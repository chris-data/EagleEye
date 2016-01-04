from django.http import JsonResponse, HttpResponse
from datetime import datetime, timedelta
import pandas as pd
from EagleEye.config import sqls as SQL
import numpy as np
from django.db import connection
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Monitor.settings")


def get_cancelorders(request):
    cursor = connection.cursor()
    cursor.execute(SQL.sql_cancelorders)
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['cancelreason', 'cnt'])
    json = {}
    for key, value in zip(list(pd1.cancelreason), list(pd1.cnt)):
        json[str(key)] = int(value)
    return JsonResponse(json)


def get_cancelrate(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today()), interval='5'):
    interval += 'min'
    cursor = connection.cursor()
    cursor.execute(SQL.sql_cancelrate, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['orderid', 'iscancel', 'orderdate']).drop_duplicates('orderid', take_last=True)
    cancelorder = pd1.iscancel
    cancelorder.index = pd1.orderdate
    totalorder = pd.DataFrame({'counter': np.ones(len(cancelorder), dtype=int)}, index=pd1.orderdate)
    # cancel orders
    s2 = cancelorder.resample(interval, how='sum', closed='right', label='right').fillna(0)
    s2 = pd.DataFrame(s2)
    s3 = totalorder.resample(interval, how='sum', closed='right', label='right').fillna(0)
    final = pd.merge(s2, s3, how='inner', left_index=True, right_index=True, sort=True)
    final['rate'] = final.iscancel / final.counter
    final = final.fillna(0)
    mapping = {}
    for key, value in zip(list(final.index), list(final.rate)):
        mapping[str(key)] = round(value, 2)
    return JsonResponse(mapping)


def get_autocancelrate(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today()), interval='5'):
    interval += 'min'
    cursor = connection.cursor()
    cursor.execute(SQL.sql_auto_cancelrate, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['orderid', 'iscancel', 'orderdate']).drop_duplicates('orderid', take_last=True)
    cancelorder = pd1.iscancel
    cancelorder.index = pd1.orderdate
    totalorder = pd.DataFrame({'counter': np.ones(len(cancelorder), dtype=int)}, index=pd1.orderdate)
    # cancel orders
    s2 = cancelorder.resample(interval, how='sum', closed='right', label='right').fillna(0)
    s2 = pd.DataFrame(s2)
    s3 = totalorder.resample(interval, how='sum', closed='right', label='right').fillna(0)
    final = pd.merge(s2, s3, how='inner', left_index=True, right_index=True, sort=True)
    final['rate'] = final.iscancel / final.counter
    final = final.fillna(0)
    mapping = {}
    for key, value in zip(list(final.index), list(final.rate)):
        mapping[str(key)] = round(value, 2)
    return JsonResponse(mapping)


def get_platform(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today())):
    cursor = connection.cursor()
    cursor.execute(SQL.sql_ua_platform, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['platform', 'cnt'])
    total = pd1["cnt"].sum()
    json = {}
    for key, value in zip(list(pd1.platform), list(pd1.cnt)):
        json[str(key)] = round(int(value) / total, 5)
    return JsonResponse(json)


def get_device(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today())):
    cursor = connection.cursor()
    cursor.execute(SQL.sql_ua_device, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['device', 'cnt'])
    total = pd1["cnt"].sum()
    json = {}
    for key, value in zip(list(pd1.device), list(pd1.cnt)):
        json[str(key)] = round(int(value) / total, 5)
    return JsonResponse(json)


def get_browser(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today())):
    cursor = connection.cursor()
    cursor.execute(SQL.sql_ua_browser, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['browser', 'cnt'])
    total = pd1["cnt"].sum()
    json = {}
    for key, value in zip(list(pd1.browser), list(pd1.cnt)):
        json[str(key)] = round(int(value) / total, 5)
    return JsonResponse(json)


def get_operationsystem(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today())):
    cursor = connection.cursor()
    cursor.execute(SQL.sql_ua_operationsystem, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['operationsystem', 'cnt'])
    total = pd1["cnt"].sum()
    json = {}
    for key, value in zip(list(pd1.operationsystem), list(pd1.cnt)):
        json[str(key)] = round(int(value) / total, 5)
    return JsonResponse(json)


def get_edition(request, sdt=str(datetime.today() - timedelta(days=1)), edt=str(datetime.today())):
    cursor = connection.cursor()
    cursor.execute(SQL.sql_ua_edition, [sdt, edt])
    results = cursor.fetchall()
    pd1 = pd.DataFrame(results, columns=['edition', 'cnt'])
    total = pd1["cnt"].sum()
    json = {}
    for key, value in zip(list(pd1.edition), list(pd1.cnt)):
        json[str(key)] = round(int(value) / total, 5)
    return JsonResponse(json)


def download_ua_excel(request, sdt, edt):
    """
    Send a file through Django without loading the whole file into
    memory at once. The FileWrapper will turn the file object into an
    iterator for chunks of 8KB.
    """
    # construct the filename
    filename = str(sdt).replace('-', '') + '-' + str(edt).replace('-', '') + '.xlsx'
    # if file is exists,then pass
    if os.path.isfile(filename):
        pass
    # if file is not exists then create the file
    else:
        cursor = connection.cursor()
        # browser
        cursor.execute(SQL.sql_ua_browser, [sdt, edt])
        results = cursor.fetchall()
        pd1 = pd.DataFrame(results, columns=['Browser', 'Sessions'])
        # device
        cursor.execute(SQL.sql_ua_device, [sdt, edt])
        results = cursor.fetchall()
        pd2 = pd.DataFrame(results, columns=['Device', 'Sessions'])
        # operationsystem
        cursor.execute(SQL.sql_ua_operationsystem, [sdt, edt])
        results = cursor.fetchall()
        pd3 = pd.DataFrame(results, columns=['OS', 'Sessions'])
        # edition
        cursor.execute(SQL.sql_ua_edition, [sdt, edt])
        results = cursor.fetchall()
        pd4 = pd.DataFrame(results, columns=['Edition', 'Sessions'])

        # dataframe to excel
        with pd.ExcelWriter(filename) as writer:
            pd1.to_excel(writer, encoding='utf8', sheet_name='Browser')
            pd2.to_excel(writer, encoding='utf8', sheet_name='Device')
            pd3.to_excel(writer, encoding='utf8', sheet_name='OS')
            pd4.to_excel(writer, encoding='utf8', sheet_name='APP Edition')

    # iterator of the file
    def readFile(filename, buf_size=262144):  # 大文件下载，设定缓存大小
        f = open(filename, "rb")
        while True:  # 循环读取
            c = f.read(buf_size)
            if c:
                yield c
            else:
                break
        f.close()

    response = HttpResponse(readFile(filename),
                            content_type='APPLICATION/OCTET-STREAM')  # 设定文件头，这种设定可以让任意文件都能正确下载，而且已知文本文件不是本地打开
    response['Content-Disposition'] = 'attachment; filename=' + filename  # 设定传输给客户端的文件名称
    response['Content-Length'] = os.path.getsize(filename)  # 传输给客户端的文件大小
    return response
