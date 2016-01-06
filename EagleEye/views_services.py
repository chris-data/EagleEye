# Created by wang.zy at 2016/1/5
from datetime import datetime, timedelta
import os
from django.db import connection
from django.http import JsonResponse
from django.shortcuts import render
import numpy as np
import pandas as pd
from EagleEye.config import sql_check as SQL
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

def get_serviceinvoke(request, interval, params):
    """
    :param request:
    :param interval:
    :param params:
    :return:

    """
    sdt, edt, interval, producttype, isintlflight, isintlhotel, channel = str.split(params, '&')

    sdt += ' 00:00:00'
    edt += ' 00:00:00'
    interval += 'min'

    cursor = connection.cursor()
    cursor.execute(SQL.ShoppingService_RecommendSearch_Times,
                   {'sdt': sdt, 'edt': edt, 'producttype': producttype, 'isintlflight': isintlflight,
                    'isintlhotel': isintlhotel,
                    'channel': channel})
    queryset = cursor.fetchall()
    df1 = pd.DataFrame(queryset, columns=['ServiceInvokeId', 'DataChange_LastTime']).drop_duplicates(
        'DataChange_LastTime',
        take_last=False)  # 去除重复和为空的
    target = pd.DataFrame({'counter': np.ones(len(df1), dtype=int)}, index=df1.DataChange_LastTime)
    # results
    data_list = target.resample(interval, how='sum', closed='right', label='right').fillna(0)
    mapping = {}
    for key, value in zip(list(data_list.index), list(data_list.counter)):
        mapping[str(key)] = int(value)
    return JsonResponse(mapping)
