# Created by wang.zy at 2016/1/5
from datetime import datetime, timedelta
import os
from django.db import connection
from django.http import JsonResponse
from django.shortcuts import render
import numpy as np
import pandas as pd
from EagleEye.config import sql_services as SQL
from django.contrib.auth.decorators import login_required
from datetime import datetime, date


# productTypeName
# productType: DP/SDP
# ChannelID:Online/Hybrid/H5/
#
# 'ShoppingService_FlightSearch'
# 'ShoppingService_HotelDetail'
# 'ShoppingService_HotelListSearch'
# 'ShoppingService_RecommendSearch'
# 'ShoppingService_RoomListSearch'
# 'ShoppingService_ShoppingDetailForBook'
# 'ShoppingService_ShoppingDetailUpdate'
# 'ShoppingService_XSearch'
#
#
# NULL
# 'EnglishSite'
# 'H5'
# 'Hybrid'
# 'None'
# 'Offline'
# 'Online'


@login_required(login_url='/login/')
def get_services_page(request):
    return render(request, 'services.html', {'first_name': request.user})


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


def get_serviceinvoke_times(request, params):
    """
    推荐服务接口查询次数统计
    :param sdt: 统计开始时间
    :param edt: 统计截止时间
    :param interval: 间隔时间
    :param producttype: 产品分类
    :param isintlflight: 是否国际机票
    :param isintlhotel: 是否国际酒店
    :param channel: 预订渠道
    :return:
    """
    # 分解参数
    sdt, edt, interval, producttype, isintlflight, isintlhotel, channel = params.split('&')
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    interval += 'min'
    cursor = connection.cursor()
    cursor.execute(SQL.ShoppingService_RecommendSearch_Times,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'isintlflight': isintlflight,
                    'isintlhotel': isintlhotel, 'channel': channel})
    # from datetime import datetime
    # start=datetime.now()
    queryset = cursor.fetchall()
    # end=datetime.now()
    # gap=end-start
    # print(gap)
    df1 = pd.DataFrame(queryset, columns=['ServiceInvokeId', 'DataChange_LastTime']).drop_duplicates(
        'DataChange_LastTime',
        take_last=False)  # 去除重复和为空的
    # 构造时间序列
    target = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.DataChange_LastTime)
    # 时间序列downsample
    data_list = target.resample(interval, how='sum', closed='right', label='right').fillna(0)
    # 结果map化
    mapping = {}
    for key, value in zip(list(data_list.index), list(data_list.counter)):
        mapping[str(key)] = int(value)
    return JsonResponse(mapping)


def get_serviceinvoke_failures(request, params, history=False, whole=False, update=False):
    """
    推荐服务接口查询次数统计
    :param sdt: 统计开始时间
    :param edt: 统计截止时间
    :param interval: 间隔时间
    :param producttype: 产品分类
    :param isintlflight: 是否国际机票
    :param isintlhotel: 是否国际酒店
    :param channel: 预订渠道
    :return:
    """
    # 分解参数
    sdt, edt, interval, producttype, isintlflight, isintlhotel, channel = params.split('&')
    # sdt, edt = params.split('&')
    # interval, producttype, isintlflight, isintlhotel,channel = ('10', 1, 1, 1,'Online')
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    interval += 'min'
    cursor = connection.cursor()
    cursor.execute(SQL.ShoppingService_RecommendSearch_Failure_Times,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'isintlflight': isintlflight,
                    'isintlhotel': isintlhotel, 'channel': channel})
    # from datetime import datetime
    # start=datetime.now()
    queryset = cursor.fetchall()
    # end=datetime.now()
    # gap=end-start
    # print(gap)
    df1 = pd.DataFrame(queryset, columns=['ServiceInvokeId', 'DataChange_LastTime']).drop_duplicates(
        'DataChange_LastTime',
        take_last=False)  # 去除重复和为空的
    # 构造时间序列
    target = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.DataChange_LastTime)
    # 时间序列downsample
    data_list = target.resample(interval, how='sum', closed='right', label='right').fillna(0)
    # 结果map化
    mapping = {}
    for key, value in zip(list(data_list.index), list(data_list.counter)):
        mapping[str(key)] = int(value)
    return JsonResponse(mapping)


def get_serviceinvoke_failureratio(request, params):
    # 分解参数
    sdt, edt, interval, producttype, isintlflight, isintlhotel, channel = params.split('&')
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    interval += 'min'
    cursor = connection.cursor()
    cursor.execute(SQL.ShoppingService_RecommendSearch_ratio,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'isintlflight': isintlflight,
                    'isintlhotel': isintlhotel, 'channel': channel})
    # from datetime import datetime
    # start=datetime.now()
    queryset = cursor.fetchall()
    # end=datetime.now()
    # gap=end-start
    # print(gap)
    df1 = pd.DataFrame(queryset, columns=['ServiceInvokeId', 'InvokeStatus', 'elapsedtime',
                                          'DataChange_LastTime']).drop_duplicates(
        'DataChange_LastTime', take_last=False)  # 去除重复和为空的
    # 构造时间序列
    df1.index = df1.DataChange_LastTime
    target = df1.InvokeStatus
    # 时间序列downsample
    data_list = target.resample(interval, how={'total': np.size, 'failed': np.sum, 'elapsed': np.mean}, closed='right',
                                label='right').fillna(0)
    data_list['ratio'] = (data_list.failed / data_list.total) * 100
    # 失败数
    times = {}
    for key, value in zip(list(data_list.index), list(data_list.total)):
        times[str(key)] = int(value)
    # 失败数
    failures = {}
    for key, value in zip(list(data_list.index), list(data_list.failed)):
        failures[str(key)] = int(value)
    # 失败率
    ratios = {}
    for key, value in zip(list(data_list.index), list(data_list.ratio)):
        ratios[str(key)] = round(value, 2)
    # 平均耗时
    elapsed = {}
    for key, value in zip(list(data_list.index), list(data_list.elapsed)):
        elapsed[str(key)] = int(value)

    mapping = {'times': times, 'failures': failures, 'ratios': ratios, 'elapsed': ratios}

    return JsonResponse(mapping)


def get_serviceinvoke_elapsed(request, params, history=False, whole=False, update=False):
    """
    推荐服务接口查询次数统计
    :param sdt: 统计开始时间
    :param edt: 统计截止时间
    :param interval: 间隔时间
    :param producttype: 产品分类
    :param isintlflight: 是否国际机票
    :param isintlhotel: 是否国际酒店
    :param channel: 预订渠道
    :return:
    """
    # 分解参数
    sdt, edt, interval, producttype, isintlflight, isintlhotel, channel = params.split('&')
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    interval += 'min'
    cursor = connection.cursor()
    cursor.execute(SQL.ShoppingService_RecommendSearch_Elapsed,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'isintlflight': isintlflight,
                    'isintlhotel': isintlhotel, 'channel': channel})
    # from datetime import datetime
    # start=datetime.now()
    queryset = cursor.fetchall()
    # end=datetime.now()
    # gap=end-start
    # print(gap)
    df1 = pd.DataFrame(queryset,
                       columns=['ServiceInvokeId', 'elapsedtime', 'DataChange_LastTime']).drop_duplicates()  # 去除重复和为空的
    # 构造时间序列
    df1.index = df1['DataChange_LastTime']
    target = df1['elapsedtime']
    # 时间序列downsample
    data_list = target.resample(interval, how='mean', closed='right', label='right').fillna(0)
    # 结果map化
    mapping = {}
    for key, value in zip(list(data_list.index), list(target)):
        mapping[str(key)] = int(round(value, 0))
    return JsonResponse(mapping)
