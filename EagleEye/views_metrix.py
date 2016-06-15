# coding=utf8
# Created by wang.zy at 2016/5/31

from datetime import datetime

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


def get_bookable_all(request, sdt, edt=datetime.now(), interval=10, type='all'):
    """
    从Metrix restful API 读取数据
    :param request:
    :param paras:
    :return:
    """
    # sdt="2016-06-02 00:00:00"
    # edt="2016-06-02 14:12:00"
    # interval=10
    map, x = services.get_check_all(sdt, edt, interval, type)
    return JsonResponse(map, safe=False)


def get_bookable_failure(request, sdt, edt=datetime.now(), interval=10, type='all'):
    """
    从Metrix restful API 读取数据
    :param request:
    :param paras:
    :return:
    """
    # sdt="2016-06-02 00:00:00"
    # edt="2016-06-02 14:12:00"
    # interval=10
    map, x = services.get_check_failed(sdt, edt, interval, type)
    return JsonResponse(map, safe=False)


def get_bookable_rate(request, sdt, edt=datetime.now(), interval=10, type='all'):
    # get failure map
    failure, a = services.get_check_failed(sdt, edt, interval, type)
    # get bookable map
    bookable, b = services.get_check_all(sdt, edt, interval, type)

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


# def get_adhoc_rate(request, sdt, edt):
#     '获取当天平均失败率'
#     gap = get_interval(sdt, edt)
#     # failed
#     failed = services.get_check_failed(sdt, edt, gap)
#     # total
#     total = services.get_check_all(sdt, edt, gap)
#     if failed.get(sdt):
#         rate = {
#             "rate": round((failed.get(sdt) / total.get(sdt)) * 100, 2)
#         }
#     else:
#         rate = {
#             "rate": 0.00
#         }
#     return JsonResponse(rate)

#
# def get_adhoc_total(request, sdt, edt):
#     '获取当天总调用数'
#     gap = get_interval(sdt, edt)
#     # failed
#     total = services.get_check_all(sdt, edt, gap)
#     data = {
#         'total': total
#     }
#     return JsonResponse(data)
#
#
# def get_adhoc_failed(request, sdt, edt):
#     '获取当天总失败次数'
#     gap = get_interval(sdt, edt)
#     # failed
#     failed = services.get_check_failed(sdt, edt, gap)
#     data = {
#         'failed': failed
#     }
#     return JsonResponse(data)


# def get_today_all(request, sdt, edt):
#     gap = get_interval(sdt, edt)
#     # failed
#     failed = services.get_check_failed(sdt, edt, gap)
#     # total
#     total = services.get_check_all(sdt, edt, gap)
#     if failed.get(sdt):
#         rate = round((failed.get(sdt) / total.get(sdt)) * 100, 2)
#
#     else:
#         rate = 0.00
#     data = {
#         'rate': rate,
#         'failed': failed.get(sdt),
#         'total': total.get(sdt)
#     }
#     return JsonResponse(data)


def get_interval(sdt, edt):
    """
    return the distince of two datetimes
    """
    from dateutil.parser import parse
    interval = parse(edt) - parse(sdt)
    return int(interval.days * 1440 + interval.seconds / 60)


def get_metrix(request, sdt, edt, type):
    gap = get_interval(sdt, edt)

    # failed
    failed, failed_total = services.get_check_failed(sdt, edt, gap, type)
    # total
    total, total_total = services.get_check_all(sdt, edt, gap, type)
    if failed != 0:
        rate = round((float(failed_total) / float(total_total)) * 100, 2)
    else:
        rate = 0.00
    data = {
        'rate': rate,
        'failed': failed_total,
        'total': total_total
    }
    return JsonResponse(data)
