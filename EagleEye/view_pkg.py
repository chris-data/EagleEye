# Created by wang.zy at 2015/11/26
# coding=utf8

from django.http import JsonResponse
from EagleEye.config import sql_pkg as SQL
from datetime import date, datetime, timedelta
import pandas as pd
import numpy as np
from django.db import connection
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Monitor.settings")


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


def get_order(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
              product='all', interval='10', history=False, whole=False, update=False):
    """
    :param sdt: 预定时间开始
    :param edt: 预订时间截止
    :param channel: 预定渠道，online,offline,app,h5
    :param product: 团队游，周边短途，签证，游学，主题游
    :param interval: 间隔时间
    :param history: 是否是历史
    """

    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    # 如果是更新逻辑，则重复分配查询日期起始
    if update == 'True':
        cursor.execute(SQL.order_max_orderdate)
        sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])
    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.order_max_orderdate)
        edt = get_enddt(int(interval), cursor.fetchone()[0])
    interval += 'min'
    # 按interval取值计算区间值
    if product == 'all':
        if channel == 'online':
            cursor.execute(SQL.order_all_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.order_all_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.order_all_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.order_all_offline, [sdt, edt])
        else:
            cursor.execute(SQL.order_all_all, [sdt, edt])
    elif product == 'visa':
        if channel == 'online':
            cursor.execute(SQL.order_visa_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.order_visa_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.order_visa_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.order_visa_offline, [sdt, edt])
        else:
            cursor.execute(SQL.order_visa_all, [sdt, edt])
    elif product == 'pkg':
        if channel == 'online':
            cursor.execute(SQL.order_pkg_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.order_pkg_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.order_pkg_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.order_pkg_offline, [sdt, edt])
        else:
            cursor.execute(SQL.order_pkg_all, [sdt, edt])
    elif product == 'short':
        if channel == 'online':
            cursor.execute(SQL.order_short_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.order_short_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.order_short_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.order_short_offline, [sdt, edt])
        else:
            cursor.execute(SQL.order_short_all, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['orderid', 'orderdate']).drop_duplicates('orderid', take_last=True)
    pd2 = pd.DataFrame(np.ones(len(pd1)), columns=['cnt'], index=pd1['orderdate'], dtype=datetime)
    s1 = pd2.resample(interval, how='sum', closed='left', label='right').fillna(0)
    # 计算结果包装到dict
    mapping = {}
    # 如果是分段值
    if whole == 'False':
        # 分段实时数据
        if history == 'False':
            for key, value in zip(list(s1.index), list(s1.cnt)):
                mapping[str(key)] = value
        # 分段历史数据
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(s1.index), list(s1.cnt)):
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = value
    # 如果是当日累积值
    elif whole == "True":

        # 实时当日累积值非更新
        if history == 'False' and update == 'False':
            total = 0
            for key, value in zip(list(s1.index), list(s1.cnt)):
                total += value
                mapping[str(key)] = total
        elif history == 'True':
            total = 0
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(s1.index), list(s1.cnt)):
                item = str(pd.to_datetime(key) + gap)
                total += value
                mapping[str(item)] = total
    cursor.close()
    return JsonResponse(mapping)


def get_create(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
               product='all', interval='10', history=False, whole=False, update=False):
    """
    :param sdt: 预定时间开始
    :param edt: 预订时间截止
    :param channel: 预定渠道，online,offline,app,h5
    :param product: 团队游，周边短途，签证，游学，主题游
    :param interval: 间隔时间
    :param history: 是否是历史
    """

    cursor = connection.cursor()
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    if update == 'True':
        cursor.execute(SQL.create_max_orderdate)
        sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])
    if history == "False":
        cursor.execute(SQL.create_max_orderdate)
        edt = get_enddt(int(interval), cursor.fetchone()[0])
    interval += 'min'
    if product == 'all':
        if channel == 'online':
            cursor.execute(SQL.create_all_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.create_all_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.create_all_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.create_all_offline, [sdt, edt])
        else:
            cursor.execute(SQL.create_all_all, [sdt, edt])
    elif product == 'visa':
        if channel == 'online':
            cursor.execute(SQL.order_visa_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.order_visa_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.order_visa_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.order_visa_offline, [sdt, edt])
        else:
            cursor.execute(SQL.order_visa_all, [sdt, edt])
    elif product == 'pkg':
        if channel == 'online':
            cursor.execute(SQL.create_pkg_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.create_pkg_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.create_pkg_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.create_pkg_offline, [sdt, edt])
        else:
            cursor.execute(SQL.create_pkg_all, [sdt, edt])
    elif product == 'short':
        if channel == 'online':
            cursor.execute(SQL.create_short_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.create_short_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.create_short_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.create_short_offline, [sdt, edt])
        else:
            cursor.execute(SQL.create_short_all, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['orderid', 'orderdate']).drop_duplicates('orderid', take_last=True)
    pd2 = pd.DataFrame(np.ones(len(pd1)), columns=['cnt'], index=pd1['orderdate'], dtype=datetime)
    s1 = pd2.resample(interval, how='sum', closed='left', label='right').fillna(0)
    mapping = {}
    if whole == 'False':
        if history == 'False':
            for key, value in zip(list(s1.index), list(s1.cnt)):
                mapping[str(key)] = value
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(s1.index), list(s1.cnt)):
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = value
    elif whole == "True":
        total = 0
        if history == 'False':
            for key, value in zip(list(s1.index), list(s1.cnt)):
                total += value
                mapping[str(key)] = total
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(s1.index), list(s1.cnt)):
                item = str(pd.to_datetime(key) + gap)
                total += value
                mapping[str(item)] = total
    cursor.close()
    return JsonResponse(mapping)


def get_commit(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
               product='all', interval='10', history=False, whole=False, update=False):
    """
    :param sdt: 预定时间开始
    :param edt: 预订时间截止
    :param channel: 预定渠道，online,offline,app,h5
    :param product: 团队游，周边短途，签证，游学，主题游
    :param interval: 间隔时间
    :param history: 是否是历史
    """

    cursor = connection.cursor()
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    if update == 'True':
        cursor.execute(SQL.commit_max_orderdate)
        sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])
    if history == "False":
        cursor.execute(SQL.commit_max_orderdate)
        edt = get_enddt(int(interval), cursor.fetchone()[0])
    interval += 'min'
    if product == 'all':
        if channel == 'online':
            cursor.execute(SQL.commit_all_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.commit_all_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.commit_all_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.commit_all_offline, [sdt, edt])
        else:
            cursor.execute(SQL.commit_all_all, [sdt, edt])
    elif product == 'visa':
        if channel == 'online':
            cursor.execute(SQL.commit_visa_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.commit_visa_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.commit_visa_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.order_visa_offline, [sdt, edt])
        else:
            cursor.execute(SQL.order_visa_all, [sdt, edt])

    elif product == 'pkg':
        if channel == 'online':
            cursor.execute(SQL.commit_pkg_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.commit_pkg_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.commit_pkg_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.commit_pkg_offline, [sdt, edt])
        else:
            cursor.execute(SQL.commit_pkg_all, [sdt, edt])
    elif product == 'short':
        if channel == 'online':
            cursor.execute(SQL.commit_short_online, [sdt, edt])
        elif channel == 'app':
            cursor.execute(SQL.commit_short_app, [sdt, edt])
        elif channel == 'h5':
            cursor.execute(SQL.commit_short_h5, [sdt, edt])
        elif channel == 'offline':
            cursor.execute(SQL.commit_short_offline, [sdt, edt])
        else:
            cursor.execute(SQL.commit_short_all, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['orderid', 'orderdate']).drop_duplicates('orderid', take_last=True)
    pd2 = pd.DataFrame(np.ones(len(pd1)), columns=['cnt'], index=pd1['orderdate'], dtype=datetime)
    s1 = pd2.resample(interval, how='sum', closed='left', label='right').fillna(0)
    mapping = {}
    if whole == 'False':
        if history == 'False':
            for key, value in zip(list(s1.index), list(s1.cnt)):
                mapping[str(key)] = value
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(s1.index), list(s1.cnt)):
                item = str(pd.to_datetime(key) + gap)
                mapping[str(item)] = value
    elif whole == "True":
        total = 0
        if history == 'False':
            for key, value in zip(list(s1.index), list(s1.cnt)):
                total += value
                mapping[str(key)] = total
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            for key, value in zip(list(s1.index), list(s1.cnt)):
                item = str(pd.to_datetime(key) + gap)
                total += value
                mapping[str(item)] = total
    cursor.close()
    return JsonResponse(mapping)
