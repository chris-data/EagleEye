# Created by wang.zy at 2016/5/31

import requests


# 模拟读取DB的方式读取Restful API
# 摘取非公共参数到一起，封装到各个services

# version	int	需要调用restful api的版本号，如果不输入，使用默认的最新版本
# namespace	string	需要查询的metric所在的namespace，不输入，使用默认的namespace
# metric-name	string	需要查询的metric name
# tags	string	需要查询的tag信息，支持多个tag支持，每个tag以json格式，例如：tag={appId:[920120,920110]}，如果不输，默认查询该metric name下的所有tag
# start-time	string	需要查询的开始时间，格式为yyyy-MM-dd hh:mm:ss，例如：2012-12-03 02:33:37
# end-time	string	需要查询的结束时间，格式为yyyy-MM-dd hh:mm:ss，例如：2012-12-03 03:33:37
# max-datapoint-count	int	返回最大data points的个数，默认100
# interval	string	downsampler中interval支持时间单位为m(分钟),h(小时),d(天),w(周),M(月),y(年)，时间计算已经考虑了天数变化（比如不同的月天数不同），无需前端计算
# downsampler	string	downsampler中需要用到的function定义，目前支持sum,min,max,avg,count
# group-by	string	type为grouped时，需要进行group by的tag names，该字段可以不填，但是一旦给了group-by，则一定要给aggregator
# aggregator	string	aggregator中需要用到的function定义，目前支持sum,min,max,avg,count
# maxGroupCount

# urlbase = """http://engine.dashboard.sh2.ctripcorp.com:8080/data?env=PROD&metric-name=%(metric-name)s&interval=%(interval)s&start-time=%(start-time)s&end-time=%(end-time)s&tags=%(tags)s&chart=line&%(aggregator)sdownsampler=%(downsampler)s"""

def f(x):
    if x is None:
        return 0
    else:
        return x


def get_check_all(sdt, edt, interval, type):
    env = 'PROD'
    metrix_name = "tour.product.shoppingservice.orderavailabilitycounternew"
    if type == 'dp':
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["4"]}"""
    elif type == 'sdp':
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["3"]}"""
    else:
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["3","4"]}"""
    chart = 'line'
    aggregator = "sum"
    groupby = []
    downsampler = 'sum'
    maxcount = 10000
    interval = str(interval) + 'm'
    params = {"metric-name": metrix_name, "tags": tags, "group-by": groupby,
              "downsampler": downsampler, "aggregator": aggregator, "env": env, "chart": chart,
              "max-datapoint-count": maxcount}
    params.update({'start-time': sdt, 'end-time': edt, 'interval': interval})
    r = requests.get('http://engine.dashboard.sh2.ctripcorp.com:8080/data?', params=params)
    # print(str(r.url))
    points = 0
    if r.status_code == 200:
        a = r.json()
        b = a["time-series-group-list"]
        if len(b)==0:
            return None,None
        else:
            c = b[0]["data-points"]
            points = c["data-points"]
            basetime = c["base-time"]
            total = c["total"]
            import pandas as pd
            interval = interval + 'in'
            indexs = pd.date_range(start=basetime, end=edt, freq=interval)
    else:
        return None,None
    json = {}

    for key, value in zip(indexs, points):
        value = f(value)
        json[str(key)] = value
    return json, total


def get_check_failed(sdt, edt, interval, type):
    env = 'PROD'
    metrix_name = "tour.product.shoppingservice.orderavailabilitycounternew"
    if type == 'dp':
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["4"],"status":["f"]}"""
    elif type == 'sdp':
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["3"],"status":["f"]}"""
    else:
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["3","4"],"status":["f"]}"""
    chart = 'line'
    aggregator = "sum"
    groupby = []
    downsampler = 'sum'
    maxcount = 10000
    interval = str(interval) + 'm'
    params = {"metric-name": metrix_name, "tags": tags, "group-by": groupby,
              "downsampler": downsampler, "aggregator": aggregator, "env": env, "chart": chart,
              "max-datapoint-count": maxcount}
    params.update({'start-time': sdt, 'end-time': edt, 'interval': interval})
    r = requests.get('http://engine.dashboard.sh2.ctripcorp.com:8080/data?', params=params)
    points = 0
    if r.status_code == 200:
        a = r.json()
        b = a["time-series-group-list"]
        if len(b)==0:
            return None,None
        else:
            c = b[0]["data-points"]
            points = c["data-points"]
            total = c["total"]
            basetime = c["base-time"]
            import pandas as pd
            interval = interval + 'in'
            indexs = pd.date_range(start=basetime, end=edt, freq=interval)
    else:
        return None
    json = {}
    for key, value in zip(indexs, points):
        value = f(value)
        json[str(key)] = value
    return json, total


def get_check_successed(sdt, edt, interval, type):
    env = 'PROD'
    metrix_name = "tour.product.shoppingservice.orderavailabilitycounternew"
    if type == 'dp':
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["4"],"status":["t"]}"""
    elif type == 'sdp':
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["3"],"status":["t"]}"""
    else:
        tags = """{"channel":["MD_DistributionChannel_Online","MD_DistributionChannel_MobileAPP","MD_DistributionChannel_Offline"],"onlypricechange":["f"],"ordertype":["0"],"section":["3","4"],"status":["t"]}"""
    chart = 'line'
    aggregator = "sum"
    groupby = []
    downsampler = 'sum'
    maxcount = 10000
    interval = str(interval) + 'm'
    params = {"metric-name": metrix_name, "interval": interval, "tags": tags, "group-by": groupby,
              "downsampler": downsampler, "aggregator": aggregator, "env": env, "chart": chart,
              "max-datapoint-count": maxcount}
    params.update({'start-time': sdt, 'end-time': edt, 'interval': interval})
    r = requests.get('http://engine.dashboard.sh2.ctripcorp.com:8080/data?', params=params)
    if r.status_code == 200:
        a = r.json()
        b = a["time-series-group-list"]
        c = b[0]["data-points"]
        points = c["data-points"]
        total = c["total"]
        basetime = c["base-time"]
        import pandas as pd
        interval += 'in'
        indexs = pd.date_range(start=basetime, end=edt, freq=interval)
    else:
        return None
    json = {}
    for key, value in zip(indexs, points):
        value = f(value)
        json[str(key)] = value
    return json, total
