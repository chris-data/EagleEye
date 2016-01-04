# coding=utf8

from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render
from EagleEye.models import DiyPageviewStatisticRealtime as pageview, DiyOrderRealtime as orders, BookingOrder, \
    predictedorders, systemusers as users
from EagleEye.config import rawsql_dict as SQL
from datetime import date, datetime, timedelta
import pandas as pd
import numpy as np
from django.db import connection
from django.contrib.auth.decorators import login_required
import ssl
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Monitor.settings")


ssl._create_default_https_context = ssl._create_unverified_context


# Create your views here.

@login_required(login_url='/login/')
def dashboard(request):
    return render(request, "obsoleted/dashboard.html", {'first_name': request.user})


@login_required(login_url='/login/')
def to_dashboard(request):
    return HttpResponseRedirect('/EagleEye/dashboard/')


@login_required(login_url='/login/')
def home(request):
    return render(request, "home.html", {'first_name': request.user})


@login_required(login_url='/login/')
def get_pageid(request):
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["pageid"])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=["pageid"])  # orderid和orderdate是一致的，切不会变化
    data_dict = {"pageid_list": str(list(pd1.pageid))}
    return JsonResponse(data_dict)


@login_required(login_url='/login/')
def get_traffic_detail(request):
    return render(request, "traffic.html", {'first_name': request.user})


@login_required(login_url='/login/')
def get_order_detail(request):
    return render(request, "order.html", {'first_name': request.user})


@login_required(login_url='/login/')
def get_ua_analysis(request):
    return render(request, "useragent.html", {'first_name': request.user})


# param:sdt,edt, channel,product,interval
def get_orders_interval(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
                        product='all', interval='10', history=False):
    """
    :param sdt: 最早预定日期
    :param edt: 最晚预定日期
    :param channel: 订单预定渠道：all,online,app,h5,offline
    :param product: 产品分类：all,dp,sdp
    :param interval: 统计间隔时间：1,10
    """
    queryset = object
    interval += 'min'

    if product == 'all':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(
                status=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
    elif product == 'dp':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
    elif product == 'sdp':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate

    pd1 = pd.DataFrame(list(queryset), columns=['orderid', 'orderdate'])  # orderid和orderdate是一致的，切不会变化
    pd2 = pd1.drop_duplicates('orderid', take_last=False)  # 去除重复和为空的
    pd3 = pd.DataFrame({'counter': np.ones(len(pd2), dtype=int)}, index=pd2.orderdate,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd3.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['orderdate'], dtype=datetime)
    mapping = {}
    for key, value in zip(list(pd4.orderdate), list(data_list.counter)):
        if history == 'False':
            mapping[str(key)] = int(value)
        elif history == 'True':
            gap = pd.to_datetime(date.today()) - pd.to_datetime(sdt)
            item = str(pd.to_datetime(key) + gap)
            mapping[str(item)] = int(value)
    try:
        real_ip = request.META['HTTP_X_FORWARDED_FOR']
        ip = real_ip.split(",")[0]
    except:
        try:
            ip = request.META['REMOTE_ADDR']
        except:
            ip = ""
    try:
        user = users.objects.get(ip=ip)
        user.times += 1
        user.last = datetime.now()
        user.save()
    except:
        user = users(ip=ip, times=1, first=datetime.now(), last=datetime.now())
        user.save()
    return JsonResponse(mapping)


def get_orders_aggregate(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
                         product='all', interval='10', history=False):
    """
    :param sdt: 最早预定日期
    :param edt: 最晚预定日期
    :param channel: 订单预定渠道：all,online,app,h5,offline
    :param product: 产品分类：all,dp,sdp
    :param interval: 统计间隔时间：1,10
    """
    queryset = object
    interval += 'min'

    if product == 'all':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(
                status=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
    elif product == 'dp':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
    elif product == 'sdp':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate

    pd1 = pd.DataFrame(list(queryset), columns=['orderid', 'orderdate'])  # orderid和orderdate是一致的，切不会变化
    pd2 = pd1.drop_duplicates('orderid', take_last=False)  # 去除重复和为空的
    pd3 = pd.DataFrame({'counter': np.ones(len(pd2), dtype=int)}, index=pd2.orderdate,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd3.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['orderdate'], dtype=datetime)
    mapping = {}
    cnt = 0
    if history == 'False':
        for key, value in zip(list(pd4.orderdate), list(data_list.counter)):
            cnt += value
            mapping[str(key)] = int(cnt)
        mapping[str(pd.to_datetime(sdt))] = 0
    elif history == 'True':
        for key, value in zip(list(pd4.orderdate), list(data_list.counter)):
            cnt += value
            item = str(date.today()) + " " + str(key)[11:]
            mapping[str(item)] = int(cnt)
        mapping[str(pd.to_datetime(date.today() + timedelta(days=1)))] = int(cnt)
        mapping[str(pd.to_datetime(str(date.today())))] = 0
    return JsonResponse(mapping)


def get_append_order(request, channel='all', product='all', interval='10'):
    realdt = datetime.now() - timedelta(minutes=2 * int(interval))  # 获取查询开始时间,往前推2个间隔单元
    basedt = realdt - timedelta(minutes=(realdt.minute % int(interval)))
    sdt = str(basedt)[:17] + '00'  # 截断开始时间 取得sdt
    edt = str(datetime.now() - timedelta(minutes=(datetime.now().minute % int(interval))))[:17] + '00'  # 截断当前时间获取edt
    print(sdt, edt)
    interval += 'min'
    queryset = object
    if product == 'all':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(
                status=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
    elif product == 'dp':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).filter(serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).filter(
                packageid=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
    elif product == 'sdp':
        if channel == 'online':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=1).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=3).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).filter(serverfromtype=5).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = orders.objects.filter(orderdate__gte=sdt).filter(orderdate__lt=edt).exclude(status=0).exclude(
                packageid=0).values_list('diy_orderid', 'orderdate')  # 获取当天所有的orderdate

    pd1 = pd.DataFrame(list(queryset), columns=['orderid', 'orderdate'])  # orderid和orderdate是一致的，切不会变化
    pd2 = pd1.drop_duplicates('orderid', take_last=False)  # 去除重复和为空的
    pd3 = pd.DataFrame({'counter': np.ones(len(pd2), dtype=int)}, index=pd2.orderdate,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd3.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['orderdate'], dtype=datetime)
    mapping = {}
    for key, value in zip(list(pd4.orderdate), list(data_list.counter)):
        mapping[str(key)] = int(value)
    return JsonResponse(mapping)


def get_init_traffic(request, dt=str(date.today()), pageid=0, interval=10):
    query = SQL.sqldict["init_traffic"]
    queryset = pageview.objects.raw(query, [dt, pageid, interval, interval, dt, pageid, interval])
    data_list1 = {}
    data_list2 = {}
    for item in queryset:
        data_list1[str(item.dt)] = item.pv
        data_list2[str(item.dt)] = item.uv
    json = {
        "data1": data_list1,
        "data2": data_list2
    }
    return JsonResponse(json)


def get_traffic_aggregate(request, dt=str(date.today()), pageid=0, interval=10, history=False):
    query = SQL.sqldict["traffic_aggregate"]
    queryset = pageview.objects.raw(query, [pageid, dt, interval])
    data_list1 = {}
    data_list2 = {}
    if history == 'False':
        for item in queryset:
            data_list1[str(item.dt)] = item.pv
            data_list2[str(item.dt)] = item.uv
    elif history == 'True':
        for item in queryset:
            data_list1[str(date.today()) + " " + str(item.dt)[11:]] = item.pv
            data_list2[str(date.today()) + " " + str(item.dt)[11:]] = item.uv
    json = {
        "data1": data_list1,
        "data2": data_list2
    }
    return JsonResponse(json)


def get_history_traffic(request, dt=str(date.today()), pageid=0, interval=10):
    query = SQL.sqldict["init_traffic"]
    queryset = pageview.objects.raw(query, [dt, pageid, interval, interval, dt, pageid, interval])
    data_list1 = {}
    data_list2 = {}
    for item in queryset:
        key = str(date.today()) + " " + str(item.dt)[11:]
        data_list1[key] = item.pv
        data_list2[key] = item.uv
    json = {
        "data1": data_list1,
        "data2": data_list2
    }
    return JsonResponse(json)


def get_update_traffic(request, dt=str(date.today()), pageid=0, interval=10):
    query = SQL.sqldict["update_traffic"]
    queryset = pageview.objects.raw(query, [interval, dt, pageid, interval, dt, pageid, interval])
    data_list1 = {}
    data_list2 = {}
    for item in queryset:
        data_list1[str(item.dt)] = item.pv
        data_list2[str(item.dt)] = item.uv
    json = {
        "data1": data_list1,
        "data2": data_list2
    }
    return JsonResponse(json)


def get_booking_interval(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
                         product='all', interval='10', history=False):
    """
    :param sdt: 最早预定日期
    :param edt: 最晚预定日期
    :param channel: 订单预定渠道：all,online,app,h5,offline
    :param product: 产品分类：all,dp,sdp
    :param interval: 统计间隔时间：1,10
    :param history:是否取历史数据，默认否
    """
    queryset = object
    interval += 'min'

    if product == 'all':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(status=0).filter(
                serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                      'datachange_lasttime')  # 获取当天所有的orderdate
    elif product == 'dp':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                        'datachange_lasttime')  # 获取当天所有的orderdate
    elif product == 'sdp':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                        'datachange_lasttime')  # 获取当天所有的orderdate

    pd1 = pd.DataFrame(list(queryset), columns=['masterorderid', 'salemode', 'serverfromtype',
                                                'datachange_lasttime'])  # orderid和orderdate是一致的，切不会变化
    pd2 = pd1.drop_duplicates('masterorderid', take_last=False)  # 去除重复和为空的
    pd3 = pd.DataFrame({'counter': np.ones(len(pd2), dtype=int)}, index=pd2.datachange_lasttime,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd3.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['datachange_lasttime'], dtype=datetime)
    mapping = {}
    for key, value in zip(list(pd4.datachange_lasttime), list(data_list.counter)):
        if history == 'False':
            mapping[str(key)] = int(value)
        elif history == 'True':
            item = str(date.today()) + " " + str(key)[11:]
            mapping[str(item)] = int(value)
    return JsonResponse(mapping)


def get_booking_aggregate(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
                          product='all', interval='10', history=False):
    """
    :param sdt: 最早预定日期
    :param edt: 最晚预定日期
    :param channel: 订单预定渠道：all,online,app,h5,offline
    :param product: 产品分类：all,dp,sdp
    :param interval: 统计间隔时间：1,10
    :param history:是否取历史数据，默认否
    """
    queryset = object
    interval += 'min'

    if product == 'all':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(status=0).filter(
                serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                      'datachange_lasttime')  # 获取当天所有的orderdate
    elif product == 'dp':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                        'datachange_lasttime')  # 获取当天所有的orderdate
    elif product == 'sdp':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                        'datachange_lasttime')  # 获取当天所有的orderdate

    pd1 = pd.DataFrame(list(queryset), columns=['masterorderid', 'salemode', 'serverfromtype',
                                                'datachange_lasttime'])  # orderid和orderdate是一致的，切不会变化
    pd2 = pd1.drop_duplicates('masterorderid', take_last=False)  # 去除重复和为空的
    pd3 = pd.DataFrame({'counter': np.ones(len(pd2), dtype=int)}, index=pd2.datachange_lasttime,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd3.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['datachange_lasttime'], dtype=datetime)
    mapping = {}
    cnt = 0
    if history == 'False':
        for key, value in zip(list(pd4.datachange_lasttime), list(data_list.counter)):
            cnt += value
            mapping[str(key)] = int(cnt)
        mapping[str(pd.to_datetime(sdt))] = 0
    elif history == 'True':
        for key, value in zip(list(pd4.datachange_lasttime), list(data_list.counter)):
            cnt += value
            item = str(date.today()) + " " + str(key)[11:]
            mapping[str(item)] = int(cnt)
        mapping[str(pd.to_datetime(date.today() + timedelta(days=1)))] = int(cnt)
        mapping[str(pd.to_datetime(str(date.today())))] = 0
    return JsonResponse(mapping)


def get_append_booking(request, channel='all', product='all', interval='10'):
    realdt = datetime.now() - timedelta(minutes=2 * int(interval))  # 获取查询开始时间,往前推2个间隔单元
    basedt = realdt - timedelta(minutes=(realdt.minute % int(interval)))
    sdt = str(basedt)[:17] + '00'  # 截断开始时间 取得sdt
    edt = str(datetime.now() - timedelta(minutes=(datetime.now().minute % int(interval))))[:17] + '00'  # 截断当前时间获取edt
    queryset = object
    interval += 'min'
    if product == 'all':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(status=0).filter(
                serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                              'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                      'datachange_lasttime')  # 获取当天所有的orderdate
    elif product == 'dp':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).filter(serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).filter(
                salemode=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                        'datachange_lasttime')  # 获取当天所有的orderdate
    elif product == 'sdp':
        if channel == 'online':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'app':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=1).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'offline':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=3).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'h5':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).filter(serverfromtype=5).values_list('masterorderid', 'salemode', 'serverfromtype',
                                                                 'datachange_lasttime')  # 获取当天所有的orderdate
        elif channel == 'all':
            queryset = BookingOrder.objects.filter(datachange_lasttime__gte=sdt).filter(
                datachange_lasttime__lt=edt).exclude(
                status=0).exclude(
                salemode=0).values_list('masterorderid', 'salemode', 'serverfromtype',
                                        'datachange_lasttime')  # 获取当天所有的orderdate

    pd1 = pd.DataFrame(list(queryset), columns=['masterorderid', 'salemode', 'serverfromtype',
                                                'datachange_lasttime'])  # orderid和orderdate是一致的，切不会变化
    pd2 = pd1.drop_duplicates('masterorderid', take_last=False)  # 去除重复和为空的
    pd3 = pd.DataFrame({'counter': np.ones(len(pd2), dtype=int)}, index=pd2.datachange_lasttime,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd3.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['datachange_lasttime'], dtype=datetime)
    mapping = {}
    for key, value in zip(list(pd4.datachange_lasttime), list(data_list.counter)):
        mapping[str(key)] = int(value)
    return JsonResponse(mapping)


def get_predicate_order(request, sdt, edt, producttype):
    """
    :param request:
    :return:
    """
    queryset = predictedorders.objects.using('analysis').filter(intervalTime__gte=sdt).filter(
        intervalTime__lt=edt).filter(producttype=producttype).values('intervalTime', 'value')
    data_list = {}
    for item in queryset:
        data_list[str(item['intervalTime'])] = item['value']
    return JsonResponse(data_list)


def get_predicate_order_aggregate(request, sdt, edt, producttype):
    """
    :param request:
    :return:
    """
    queryset = predictedorders.objects.using('analysis').filter(intervalTime__gte=sdt).filter(
        intervalTime__lt=edt).filter(producttype=producttype).values('intervalTime', 'value')
    data_list = {}
    cnt = 0
    for item in queryset:
        cnt += item['value']
        data_list[str(item['intervalTime'])] = cnt
    data_list[str(pd.to_datetime(edt))] = cnt
    return JsonResponse(data_list)


def get_commit_interval(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
                        product='all', interval='10', history=False):
    interval += 'min'
    cursor = connection.cursor()
    if product == 'all':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 5])
    elif product == 'dp':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 5])
    elif product == 'sdp':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 5])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['nid', 'masterorderid', 'DataChange_LastTime'])  # orderid和orderdate是一致的，切不会变化
    pd3 = pd1.drop_duplicates('masterorderid', take_last=False)  # 去除重复和为空的
    pd2 = pd.DataFrame({'counter': np.ones(len(pd3), dtype=int)}, index=pd3.DataChange_LastTime,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd2.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['DataChange_LastTime'], dtype=datetime)
    mapping = {}
    for key, value in zip(list(pd4.DataChange_LastTime), list(data_list.counter)):
        if history == 'False':
            mapping[str(key)] = int(value)
        elif history == 'True':
            item = str(date.today()) + " " + str(key)[11:]
            mapping[str(item)] = int(value)
    return JsonResponse(mapping)


def get_commit_aggregate(request, sdt=str(date.today()), edt=str(date.today() + timedelta(days=1)), channel='all',
                         product='all', interval='10', history=False):
    interval += 'min'
    cursor = connection.cursor()
    if product == 'all':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 5])
    elif product == 'dp':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 5])
    elif product == 'sdp':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 5])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['nid', 'masterorderid', 'DataChange_LastTime'])  # orderid和orderdate是一致的，切不会变化
    pd3 = pd1.drop_duplicates('masterorderid', take_last=False)  # 去除重复和为空的
    pd2 = pd.DataFrame({'counter': np.ones(len(pd3), dtype=int)}, index=pd3.DataChange_LastTime,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd2.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['DataChange_LastTime'], dtype=datetime)
    mapping = {}
    cnt = 0
    if history == 'False':
        for key, value in zip(list(pd4.DataChange_LastTime), list(data_list.counter)):
            cnt += value
            mapping[str(key)] = int(cnt)
        mapping[str(pd.to_datetime(sdt))] = 0
    elif history == 'True':
        for key, value in zip(list(pd4.DataChange_LastTime), list(data_list.counter)):
            cnt += value
            item = str(date.today()) + " " + str(key)[11:]
            mapping[str(item)] = int(cnt)
        mapping[str(pd.to_datetime(date.today() + timedelta(days=1)))] = int(cnt)
        mapping[str(pd.to_datetime(str(date.today())))] = 0
    return JsonResponse(mapping)


def get_append_commit(request, channel='all', product='all', interval='10'):
    realdt = datetime.now() - timedelta(minutes=2 * int(interval))  # 获取查询开始时间,往前推2个间隔单元
    basedt = realdt - timedelta(minutes=(realdt.minute % int(interval)))
    sdt = str(basedt)[:17] + '00'  # 截断开始时间 取得sdt
    edt = str(datetime.now() - timedelta(minutes=(datetime.now().minute % int(interval))))[:17] + '00'  # 截断当前时间获取edt
    interval += 'min'
    cursor = connection.cursor()
    if product == 'all':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_all"], [sdt, edt, 5])
    elif product == 'dp':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_dp"], [sdt, edt, 0, 5])
    elif product == 'sdp':
        if channel == 'all':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, None])
        elif channel == 'online':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 0])
        elif channel == 'app':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 1])
        elif channel == 'offline':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 3])
        elif channel == 'h5':
            cursor.execute(SQL.sqldict["commmit_sdp"], [sdt, edt, 0, 5])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['nid', 'masterorderid', 'DataChange_LastTime'])  # orderid和orderdate是一致的，切不会变化
    pd3 = pd1.drop_duplicates('masterorderid', take_last=False)  # 去除重复和为空的
    pd2 = pd.DataFrame({'counter': np.ones(len(pd3), dtype=int)}, index=pd3.DataChange_LastTime,
                       dtype=datetime)  # 构造dataframe，增加一列counter
    data_list = pd2.resample(interval, how='sum', closed='right', label='right').fillna(0)
    pd4 = pd.DataFrame(data_list.index, columns=['DataChange_LastTime'], dtype=datetime)
    mapping = {}
    for key, value in zip(list(pd4.DataChange_LastTime), list(data_list.counter)):
        mapping[str(key)] = int(value)
    return JsonResponse(mapping)
