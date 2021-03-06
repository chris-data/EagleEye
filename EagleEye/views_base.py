# coding=utf8

from datetime import date, datetime, timedelta
import ssl
import os

from django.http import JsonResponse
from django.shortcuts import render
import pandas as pd
import numpy as np

from django.db import connection

from django.contrib.auth.decorators import login_required

from EagleEye.models import DiyPageviewStatisticRealtime as pageview, DiyOrderRealtime as orders, BookingOrder, \
    predictedorders, systemusers as users
from EagleEye.config import sql_base as SQL
from EagleEye.models import authusers

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Monitor.settings")

ssl._create_default_https_context = ssl._create_unverified_context


# Create your views here.

# @login_required(login_url='/login/')
# def to_dashboard(request):
#     return HttpResponseRedirect('/EagleEye/')

# judge the login is in the white list
def judge_list(user):
    "判断CAS认证通过的用户是否是在白名单内"
    try:
        authusers.objects.get(username=user)
    except:
        return False
    return True


@login_required(login_url='/login/')
def home(request):
    if judge_list(request.user.username):
        # debug info
        print(request.user.username)
        return render(request, "home.html", {'first_name': request.user.username})

    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


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
    if judge_list(request.user.username):
        return render(request, "traffic.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


@login_required(login_url='/login/')
def get_order_detail(request):
    if judge_list(request.user.username):
        return render(request, "order.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


@login_required(login_url='/login/')
def get_ua_analysis(request):
    if judge_list(request.user.username):
        return render(request, "useragent.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


@login_required(login_url='/login/')
def get_app_CR(request):
    if judge_list(request.user.username):
        return render(request, "appVacationCR.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


# app订单url
@login_required(login_url='/login/')
def get_app_Order(request):
    if judge_list(request.user.username):
        return render(request, "appvacationorders.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


# 度假bookcommit失败率
@login_required(login_url='/login/')
def get_vacation_bookcommit(request):
    if judge_list(request.user.username):
        return render(request, "vacationbookcommit.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


# 自由行查询为空
@login_required(login_url='/login/')
def get_diy_serviceinvoke(request):
    if judge_list(request.user.username):
        return render(request, "diyserviceinvoke.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


# 自由行handler性能
@login_required(login_url='/login/')
def get_diy_handler(request):
    if judge_list(request.user.username):
        return render(request, "handler.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


        ##度假接口监控


@login_required(login_url='/login/')
def get_vac_soa(request):
    if judge_list(request.user.username):
        return render(request, "soa.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})
        ##自由行新SDP可订检查


@login_required(login_url='/login/')
def get_new_checkhistory(request):
    if judge_list(request.user.username):
        return render(request, "newcheckHistory.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})

@login_required(login_url='/login/')
def get_pkg_checkhistory(request):
    if judge_list(request.user.username):
        return render(request, "pkgcheckHistory.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})
##度假online阻断
@login_required(login_url='/login/')
def get_tour_block(request):
    if judge_list(request.user.username):
        return render(request, "blockRate.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


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
    cursor = connection.cursor()

    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.sqldict["order_max_orderdate"])
        edt = get_enddt(int(interval), cursor.fetchone()[0])

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
    cursor = connection.cursor()
    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.sqldict["order_max_orderdate"])
        edt = get_enddt(int(interval), cursor.fetchone()[0])

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
    # 如果是更新逻辑，则重复分配查询日期起始
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict['order_max_orderdate'])
    sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])

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
    query = ''
    if dt == str(date.today()):
        query = SQL.sqldict["traffic_aggregate"]
    else:
        query = SQL.sqldict["his_traffic_aggregate"]
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


# def get_history_traffic(request, dt=str(date.today()), pageid=0, interval=10):
#     query = SQL.sqldict["init_traffic"]
#     queryset = pageview.objects.raw(query, [dt, pageid, interval, interval, dt, pageid, interval])
#     data_list1 = {}
#     data_list2 = {}
#     for item in queryset:
#         key = str(date.today()) + " " + str(item.dt)[11:]
#         data_list1[key] = item.pv
#         data_list2[key] = item.uv
#     json = {
#         "data1": data_list1,
#         "data2": data_list2
#     }
#     return JsonResponse(json)

def get_history_traffic(request, dt=str(date.today()), pageid=0, interval=10):
    query = SQL.sqldict["his_traffic"]
    queryset = pageview.objects.raw(query, [dt, pageid, interval, interval, dt, pageid, interval])[1:]
    data_list1 = {}
    data_list2 = {}
    gap = pd.to_datetime(date.today()) - pd.to_datetime(dt)
    for item in queryset:
        data_list1[str(pd.to_datetime(item.dt) + gap)] = item.pv
        data_list2[str(pd.to_datetime(item.dt) + gap)] = item.uv
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
    cursor = connection.cursor()

    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.sqldict["booking_max_orderdate"])
        edt = get_enddt(int(interval), cursor.fetchone()[0])

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
    cursor = connection.cursor()
    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.sqldict["booking_max_orderdate"])
        edt = get_enddt(int(interval), cursor.fetchone()[0])

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
    # 如果是更新逻辑，则重复分配查询日期起始
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["booking_max_orderdate"])
    sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])

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
    queryset = object
    cursor = connection.cursor()

    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.sqldict["commit_max_orderdate"])
        edt = get_enddt(int(interval), cursor.fetchone()[0])

    interval += 'min'
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
    queryset = object
    cursor = connection.cursor()
    # 如果是查询实时数据，则抹去时间尾巴，和统计周期对齐
    if history == 'False':
        cursor.execute(SQL.sqldict["commit_max_orderdate"])
        edt = get_enddt(int(interval), cursor.fetchone()[0])

    interval += 'min'
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
    # 如果是更新逻辑，则重复分配查询日期起始
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["commit_max_orderdate"])
    sdt, edt = get_updatedt_pair(int(interval), cursor.fetchone()[0])

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


##  度假app整体转化率

##离线可订检查接口  分资源-->酒店/X资源/单选项/当地玩乐
def get_APPCR(request, dimsdt, dimedt, sdt, edt):
    """
    :param vdate: 日期
    :param type: 总订单  自由行订单  团队定案  流量同
    :param cnt:订单或流量值
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["appCR"],  [dimsdt, dimedt, sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假app订单
def get_VacAllOrder(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["appAllOrder"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假app订单
def get_APPOrder(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["appOrder"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假app分版本订单  不含android个版本，只有android总数
def get_VacPieOrder(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["pieOrder"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)

##度假app分版本订单转化率   含android、ios个版本
def get_tourapporderrate(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["tourapporderrate"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假金额
def get_VacAmount(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["appAmount"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假-自由行bookcommit
def get_diyBookCommit(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["diybookcommit"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假-团队游bookcommit
def get_pkgBookCommit(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["pkgbookcommit"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##度假-签证commit
def get_visaBookCommit(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["visabookcommit"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##自由行查询为空
def get_diyserviceinvoke(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["diyservicehis"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##自由行bookcommit新
def get_diybookcommitnew(request, dimsdt, dimedt, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["diybookcommitnew"], [dimsdt, dimedt, sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##团队游bookcommit新
def get_pkgbookcommitnew(request, dimsdt, dimedt, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["pkgbookcommitnew"], [dimsdt, dimedt, sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


##团队游bookcommit新
def get_visacommitnew(request, dimsdt, dimedt, sdt, edt):
    """
    :param vdate: 日期
    :param bu: bu名称  如自由行、团队游、 邮轮
    :param channel:订单来自的平台，如android、ios
    :param cnt 订单数
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["visacommitnew"], [dimsdt, dimedt, sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


## 页面性能

def get_pageHandler(request, sdt, edt):
    """
    :param vdate: 日期
    :param page: 页面名称
    :param handlerName: handler名称
    :param maxcnt:最大值
    :param mincnt:最小值
    :param avgcnt:平均值
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["pageHandler"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


## 接口性能
def get_interfacePerforms(request, sdt, edt):
    """
    :param vdate: 日期
    :param operation: 接口英文
    :param interfaceName:接口名称
    :param maxcnt:最大值
    :param mincnt:最小值
    :param avgcnt:平均值
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["soaPerforms"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)


## 接口性能
def get_tourhandler(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: diy
    :param page:页面类型
    :param handlername:页面中某个指标名称
    :param maxcnt:最大值
    :param mincnt:最小值
    :param avgcnt:平均值
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["tourhandler"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)

## 接口性能
def get_tourblock(request, sdt, edt):
    """
    :param vdate: 日期
    :param bu: diy
    :param pagetype:详情页下一步
    :param channel:online/offline
    :param failcnt:失败
    :param totalcnt:全部
    """
    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    cursor = connection.cursor()
    cursor.execute(SQL.sqldict["tourblock"], [sdt, edt])
    queryset = cursor.fetchall()
    mapping = {"key": sdt, "value": queryset}

    return JsonResponse(mapping)

