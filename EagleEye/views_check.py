from datetime import timedelta
import os
from datetime import datetime, date

from django.db import connection
from django.http import JsonResponse
from django.shortcuts import render
import numpy as np
import pandas as pd

from django.contrib.auth.decorators import login_required

from EagleEye.config import sql_check as SQL
from EagleEye.models import authusers

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Monitor.settings")


# Create your views here.

# judge the login is in the white list
def judge_list(user):
    "判断CAS认证通过的用户是否是在白名单内"
    try:
        authusers.objects.get(username=user)
    except:
        return False
    return True


@login_required(login_url='/login/')
def get_check(request):
    if judge_list(request.user):
        return render(request, 'check.html', {'first_name': request.user})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user})


@login_required(login_url='/login/')
def get_CheckHistory(request):
    if judge_list(request.user):
        return render(request, "checkHistory.html", {'first_name': request.user})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user})


def get_enddt(interval=10, lastdt=datetime.now()):
    """
    计算每次初始化图标时候的截止日志,除去毛头，原因是数据同步时间为不规则10min一次
    :param interval: 更新间隔时间
    :return:
    """
    edt = str(lastdt - timedelta(minutes=(lastdt.minute % int(interval))))[:17] + '00'  # 截断当前时间获取edt
    return edt


def get_updatedt_pair(interval=10, lastdt=datetime.now()):
    """
    计算每次更新加点时间起始和截止,数据同步时间为不规则10min一次，例如：
    2015-12-04 15:06:49
    2015-12-04 14:56:50
    :param interval: 更新间隔时间
    :return:
    """
    sdt = lastdt - timedelta(minutes=1 * int(interval))  # 获取查询开始时间,往前推2个间隔单元
    sdt = sdt - timedelta(minutes=(sdt.minute % int(interval)))
    sdt = str(sdt)[:17] + '00'  # 截断开始时间 取得sdt
    edt = str(lastdt - timedelta(minutes=(lastdt.minute % int(interval))))[:17] + '00'  # 截断当前时间获取edt
    return sdt, edt


def get_CheckAvailable(request, params, history=False, whole=False, update=False):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,app,h5,intl
    :param area:国内国际
    """

    sdt, edt, interval, sourcetype, result, isintl, channelid = str.split(params, '&')

    sdt += ' 00:00:00'
    edt += ' 00:00:00'

    cursor = connection.cursor()
    cursor.execute(SQL.max_createdate)
    if update == 'True':
        sdt, edt = get_updatedt_pair(interval, cursor.fetchone()[0])

    interval += 'min'
    # if result == '-1':
    #     cursor.execute(SQL.base_all,
    #                    {'sdt': sdt, 'edt': edt, 'sourcetype': sourcetype, 'isintl': isintl, 'channelid': channelid})

    cursor.execute(SQL.base, {'sdt': sdt, 'edt': edt, 'sourcetype': sourcetype, 'result': result, 'isintl': isintl,
                              'channelid': channelid})
    queryset = cursor.fetchall()
    df1 = pd.DataFrame(queryset, columns=['CheckAvailableID', 'CreateDate']).drop_duplicates('CheckAvailableID',
                                                                                             take_last=False)  # 去除重复和为空的
    target = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.CreateDate)
    # results
    data_list = target.resample(interval, how='sum', closed='right', label='right').fillna(0)

    # # print(data_list)
    # # 正态分布法
    # # data_list['isAnomaly'] = data_list > data_list.quantile(.95)
    # threshold = 2.8
    # # zscore算法
    # zscore = (data_list - data_list.mean()) / data_list.std()
    # data_list['isAnomaly'] = zscore.abs() > threshold
    # # 增强的zscore算法
    # # MAD = (data_list - data_list.median()).abs().median()
    # # zscore = ((data_list - data_list.median()) * 0.6475 / MAD).abs()
    # # data_list['isAnomaly'] = zscore > threshold
    #
    # print(data_list.query('isAnomaly==True'))

    mapping = {}
    if whole == 'False':
        if history == 'False':
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                mapping[str(key)] = int(value)
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = int(value)
    elif whole == 'True':
        total = 0
        if history == 'False':
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                total += int(value)
                mapping[str(key)] = int(total)
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                total += int(value)
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = int(total)
    return JsonResponse(mapping)

    # # 分段实时数据
    # if history == 'False':
    #     for key, value in zip(list(s1.index), list(s1.cnt)):
    #         mapping[str(key)] = value
    # # 分段历史数据
    # elif history == 'True':
    #     gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
    #     for key, value in zip(list(s1.index), list(s1.cnt)):
    #         item = str(pd.to_datetime(key) + gap)
    #         mapping[str(item)] = value


def get_CheckAvailable_ratio(request, params, history=False, update=False):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,app,h5,intl
    :param area:国内国际
    """
    # CheckAvailableLog
    # CheckAvailableID	自增主键
    # SourceType	类型	1：SDP  2：DP
    # Result	是否成功	1：成功 0：失败
    # ChannelID	来源	1：Online  2：Offline 3：无线  4：国际英文网站
    # CreateDate	创建时间
    # IsIntl	是否国际	1：国际 2：国内
    # if update == 'True':
    #     sdt, edt = get_updatedt_pair(interval)

    sdt, edt, interval, sourcetype, result, isintl, channelid = str.split(params, '&')

    sdt += ' 00:00:00'
    edt += ' 00:00:00'

    cursor = connection.cursor()
    cursor.execute(SQL.max_createdate)
    if update == 'True':
        sdt, edt = get_updatedt_pair(interval, cursor.fetchone()[0])

    interval += 'min'

    cursor.execute(SQL.base, {'sdt': sdt, 'edt': edt, 'sourcetype': sourcetype, 'result': -1, 'isintl': isintl,
                              'channelid': channelid})
    queryset = cursor.fetchall()
    df1 = pd.DataFrame(queryset, columns=['CheckAvailableID', 'CreateDate']).drop_duplicates('CheckAvailableID',
                                                                                             take_last=False)  # 去除重复和为空的
    tmp = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.CreateDate)
    # results
    totals = tmp.resample(interval, how='sum', closed='right', label='right').fillna(0)

    cursor.execute(SQL.base, {'sdt': sdt, 'edt': edt, 'sourcetype': sourcetype, 'result': 0, 'isintl': isintl,
                              'channelid': channelid})

    queryset2 = cursor.fetchall()
    df2 = pd.DataFrame(queryset2, columns=['CheckAvailableID', 'CreateDate']).drop_duplicates('CheckAvailableID',
                                                                                              take_last=False)  # 去除重复和为空的
    tmp2 = pd.DataFrame({'counter': np.ones(len(df2), dtype=int)}, index=df2.CreateDate)
    failures = tmp2.resample(interval, how='sum', closed='right', label='right').fillna(0)

    # add "key" coloumn
    totals['key'] = totals.index
    failures['key'] = failures.index

    # merge totals and failures
    data_list = pd.merge(totals, failures, on='key', how='left')
    data_list.fillna(0)
    data_list['ratio'] = data_list.counter_y / data_list.counter_x * 1.0
    data_list = data_list.fillna(0)
    mapping = {}
    if history == 'False':
        for key, value in zip(list(data_list.key), list(data_list.ratio)):
            mapping[str(key)] = float(round(value, 2))
    elif history == 'True':
        gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
        for key, value in zip(list(data_list.key), list(data_list.ratio)):
            item = str(pd.to_datetime(key) + gap)
            mapping[str(item)] = float(round(value, 2))
    return JsonResponse(mapping)


# 按资源统计可定检查失败率

def get_checkresource(resquest, params, sdt=str(date.today()),
                      edt=str(date.today() + timedelta(days=1)), interval='10', whole='False', update='False',
                      history='False'):
    """
    :param resquest:
    :param sdt:
    :param edt:
    :return:
    """
    producttype, result, flighttype = params.split('&')
    sdt += ' 00:00:00'
    edt += ' 00:00:00'

    cursor = connection.cursor()
    cursor.execute(SQL.max_create_source)
    if update == 'True':
        sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])

    interval += 'min'
    cursor.execute(SQL.checkresource,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'result': result, 'flighttype': flighttype})
    queryset = cursor.fetchall()
    df1 = pd.DataFrame(queryset, columns=['CheckAvailableLogDetailID', 'DataCreate_LastTime']).drop_duplicates(
        'CheckAvailableLogDetailID', take_last=False)  # 去除重复和为空的
    target = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.DataCreate_LastTime)
    # results
    data_list = target.resample(interval, how='sum', closed='right', label='right').fillna(0)
    mapping = {}
    if whole == 'False':
        if history == 'False':
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                mapping[str(key)] = int(value)
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = int(value)
    elif whole == 'True':
        total = 0
        if history == 'False':
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                total += int(value)
                mapping[str(key)] = int(total)
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(data_list.index), list(data_list.counter)):
                total += int(value)
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = int(total)
    return JsonResponse(mapping)


def get_resource_ratio(resquest, params, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)),
                       interval='10', history=False, update=False):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,app,h5,intl
    :param area:国内国际
    """
    # CheckAvailableLog
    # CheckAvailableID	自增主键
    # SourceType	类型	1：SDP  2：DP
    # Result	是否成功	1：成功 0：失败
    # ChannelID	来源	1：Online  2：Offline 3：无线  4：国际英文网站
    # CreateDate	创建时间
    # IsIntl	是否国际	1：国际 2：国内
    # if update == 'True':
    #     sdt, edt = get_updatedt_pair(interval)

    producttype, result, flighttype = params.split('&')

    cursor = connection.cursor()
    cursor.execute(SQL.max_create_source)
    if update == 'True':
        sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])
    interval += 'min'
    cursor.execute(SQL.checkresource,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'result': -1, 'flighttype': flighttype})
    queryset = cursor.fetchall()
    df1 = pd.DataFrame(queryset, columns=['CheckAvailableLogDetailID', 'DataCreate_LastTime']).drop_duplicates(
        'CheckAvailableLogDetailID', take_last=False)  # 去除重复和为空的
    tmp = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.DataCreate_LastTime)
    # results
    totals = tmp.resample(interval, how='sum', closed='right', label='right').fillna(0)

    cursor.execute(SQL.checkresource,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'result': 0, 'flighttype': flighttype})

    queryset2 = cursor.fetchall()
    df2 = pd.DataFrame(queryset2, columns=['CheckAvailableLogDetailID', 'DataCreate_LastTime']).drop_duplicates(
        'CheckAvailableLogDetailID', take_last=False)  # 去除重复和为空的
    tmp2 = pd.DataFrame({'counter': np.ones(len(df2), dtype=int)}, index=df2.DataCreate_LastTime)
    failures = tmp2.resample(interval, how='sum', closed='right', label='right').fillna(0)

    # add "key" coloumn
    totals['key'] = totals.index
    failures['key'] = failures.index

    # merge totals and failures
    data_list = pd.merge(totals, failures, on='key', how='left')
    data_list.fillna(0)
    data_list['ratio'] = data_list.counter_y / data_list.counter_x * 1.0
    data_list = data_list.fillna(0)
    mapping = {}
    if history == 'False':
        for key, value in zip(list(data_list.key), list(data_list.ratio)):
            mapping[str(key)] = float(round(value, 2))
    elif history == 'True':
        gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
        for key, value in zip(list(data_list.key), list(data_list.ratio)):
            item = str(pd.to_datetime(key) + gap)
            mapping[str(item)] = float(round(value, 2))
    return JsonResponse(mapping)


######可订检查历史数据接口##############




##离线可订检查接口 全部

def get_AllCheckHistory(request, sdt, edt):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,无线,intl
    :param area:国内国际
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sql_all_checkHistory, [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##离线可订检查接口  分渠道
def get_channelCheckHistory(request, channel, dimsdt, dimedt, sdt, edt):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,无线,intl
    :param area:国内国际
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sql_channel_checkHistory, [dimsdt, dimedt, channel, sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##离线可订检查接口  分资源-->机票
def get_flightCheckHistory(request, sdt, edt):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,无线,intl
    :param area:国内国际
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sql_flightCheckHistory, [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##离线可订检查接口  分资源-->酒店/X资源/单选项/当地玩乐
def get_hotelCheckHistory(request, sdt, edt):
    """
    :param productpattern: 产品形态，例如：DP，SDP
    :param channel:预定渠道：online,无线,intl
    :param area:国内国际
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sql_hotelCheckHistory, [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)
