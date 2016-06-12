# coding=utf8
# Created by wang.zy at 2016/5/31

from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from EagleEye.models import authusers
from  EagleEye.restful import services


def judge_list(user):
    "判断CAS认证通过的用户是否是在白名单内"
    try:
        authusers.objects.get(username=user)
    except:
        return False
    return True


@login_required(login_url='/login/')
def get_page_bookable(request):
    if judge_list(request.user.username):
        return render(request, "bookable.html", {'first_name': request.user.username})
    else:
        return render(request, 'forbiddened.html', {'first_name': request.user.username})


def get_bookable_all(request, sdt, edt, interval=10):
    """
    从Metrix restful API 读取数据
    :param request:
    :param paras:
    :return:
    """
    # sdt="2016-06-02 00:00:00"
    # edt="2016-06-02 14:12:00"
    # interval=10
    map = services.get_check_all(sdt, edt, interval)
    return JsonResponse(map, safe=False)


def get_bookable_failure(request, sdt, edt, interval=10):
    """
    从Metrix restful API 读取数据
    :param request:
    :param paras:
    :return:
    """
    # sdt="2016-06-02 00:00:00"
    # edt="2016-06-02 14:12:00"
    # interval=10
    map = services.get_check_failed(sdt, edt, interval)
    return JsonResponse(map, safe=False)


def get_failure_rate(request, sdt, edt, interval):
    # get failure map
    failure = services.get_check_failed(sdt, edt, interval)
    # get bookable map
    bookable = services.get_check_all(sdt, edt, interval)

    import pandas as pd

    failure = pd.DataFrame(pd.Series(failure), columns=["failure"]).fillna(0)
    bookable = pd.DataFrame(pd.Series(bookable), columns=["bookable"]).fillna(0)

    failure['key'] = failure.index
    bookable['key'] = bookable.index

    data_list = pd.merge(failure, bookable, on='key', how='inner', )
    data_list['rate'] = data_list.failure / data_list.bookable * 1.0
    data_list = data_list.fillna(0)

    mapping = {}
    for key, value in zip(list(data_list.key), list(data_list.rate)):
        mapping[str(key)] = float(round(value, 2))

    return JsonResponse(mapping, safe=False)


def get_adhoc_rate(request, sdt, edt):

    '获取当天平均失败率'
    gap = get_interval(sdt, edt)
    # failed
    failed = services.get_check_failed(sdt, edt, gap)
    # total
    total = services.get_check_all(sdt, edt, gap)
    rate = {
        "rate": round((failed.get(sdt) / total.get(sdt))*100,4)
    }
    return JsonResponse(rate)


def get_interval(sdt, edt):
    """
    return the distince of two datetimes
    """
    from dateutil.parser import parse
    interval = parse(edt) - parse(sdt)
    print('sdt:%s' %sdt)
    print('edt:%s' %edt)
    a=int(interval.seconds / 60)
    print('interval:%s' %a)
    return int(interval.seconds / 60)
