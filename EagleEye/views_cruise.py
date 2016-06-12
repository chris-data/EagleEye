# Created by wang.zy at 2016/1/19

from datetime import datetime, timedelta
from django.db import connection
from django.http import JsonResponse
from django.shortcuts import render
import numpy as np
import pandas as pd
from EagleEye.config import sql_cruise as SQL
from django.contrib.auth.decorators import login_required
from datetime import datetime, date
import os
from EagleEye.models import authusers

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Monitor.settings")


# judge the login is in the white list
def judge_list(user):
    "判断CAS认证通过的用户是否是在白名单内"
    try:
        authusers.objects.get(username=user)
    except:
        return False
    return True
# Create your views here.

@login_required(login_url='/login/')
def get_cruise(request):
    if judge_list(request.user.username):
        return render(request, 'home.html', {'first_name': request.user.username})
    else:
        return render(request,'forbiddened.html', {'first_name': request.user.username})


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


def get_order(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all', interval='10',
              history=False, update=False, whole=False):
    """
    邮轮订单查询
    :param channel: 渠道：online,app,h5,offline,offline,skysea
    :param interval:间隔时间，默认10分钟
    :param history:是否历史数据
    :param whole:是否累积
    :param update:是否更新
    """

    # app	648
    # h5	45
    # hybrid	2
    # offline	651
    # online	497

    sdt += ' 00:00:00'
    edt += ' 00:00:00'

    cursor = connection.cursor()
    cursor.execute(SQL.max_orderdate,{'channel': channel})
    if update == 'True':
        sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])
    interval += 'min'
    cursor.execute(SQL.orders, {'sdt': sdt, 'edt': edt, 'channel': channel})
    queryset = cursor.fetchall()
    df1 = pd.DataFrame(queryset, columns=['OrderId', 'OrderDate']).drop_duplicates('OrderId',
                                                                                   take_last=False)  # 去除重复和为空的
    target = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.OrderDate)
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
