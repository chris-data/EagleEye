# Created by wang.zy at 2015/12/22

# 可定检查
# CheckAvailableLog
# CheckAvailableID	自增主键
# SourceType	类型	1：SDP  2：DP
# Result	是否成功	1：成功 0：失败
# ProductID	产品ID
# DepartCityCode	出发城市
# ArriveCityCode	到达城市
# ChannelID	来源	1：Online  2：Offline 3：无线  4：国际英文网站
# State	状态	1：老接口 2：新接口
# CreateDate	创建时间
# ShoppingId	ShoppingID
# IsIntl	是否国际	1：国际 2：国内

# 维度划分：
# 时间：CreateDate
# 产品形态：SourceType
# 检查结果：Result
# 来源：ChannelID
# 区域：IsIntl

# 可定检查
base = """
SELECT
    CheckAvailableID,
    CreateDate
FROM
    CheckAvailableLog
WHERE
    CreateDate >= %(sdt)s
        AND CreateDate <= %(edt)s
        and SourceType=(case when %(sourcetype)s <> -1 then %(sourcetype)s else SourceType end)
		and Result=(case when %(result)s <> -1 then %(result)s else Result end)
        and IsIntl=(case when %(isintl)s <> -1 then %(isintl)s else IsIntl end)
		and ChannelID=(case when %(channelid)s <> -1 then %(channelid)s else ChannelID end)
        """
max_createdate = """
SELECT
    max(CreateDate) as CreateDate
FROM
    CheckAvailableLog
WHERE
    CreateDate >= curdate()
        """
# 推荐接口-次数
ShoppingService_RecommendSearch_Times = """
SELECT
    ServiceInvokeId, DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime <= %(edt)s
        and productTypeName = 'ShoppingService_RecommendSearch'
        and productType = (case when productType=-1 then productType else %(producttype) end)
        and isIntlflight = (case when isIntlflight = -1 then  isIntlflight else %(isintlflight) end)
        and isIntlHotel = (case when isIntlHotel = -1 then isIntlHotel else %(isintlhotel) end )
        and channel = (case when channel =-1 then channel else %(channel) end);
"""
# 推荐接口-次数
ShoppingService_RecommendSearch_Failure_Times = """
SELECT
    ServiceInvokeId, DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime <= %(edt)s
        and productTypeName = 'ShoppingService_RecommendSearch'
        and invokewstatus in (2,3,-1)
        and productType = (case when productType=-1 then productType else %(producttype) end)
        and isIntlflight = (case when isIntlflight = -1 then  isIntlflight else %(isIntlflight) end)
        and isIntlHotel = (case when isIntlHotel = -1 then isIntlHotel else %(isIntlHotel) end )
        and channel = (case when channel =-1 then channel else %(channel) end)
        ;
"""

# 推荐接口-耗时
ShoppingService_RecommendSearch_Elapsed = """
SELECT
    ServiceInvokeId,elapsedtime, DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime <= %(edt)s
        and productTypeName = 'ShoppingService_RecommendSearch'
        and productType = (case when productType=-1 then productType else %(producttype) end)
        and isIntlflight = (case when isIntlflight = -1 then  isIntlflight else %(isIntlflight) end)
        and isIntlHotel = (case when isIntlHotel = -1 then isIntlHotel else %(isIntlHotel) end )
        and channel = (case when channel =-1 then channel else %(channel) end)
        and elapsedtime > 0;
        """
# -- CheckAvailableLogDetail
# -- CheckAvailableLogDetailID	自增主键
# -- CheckAvailableID	主表Id
# -- ProductType	资源类型	1：Flight  2：Hotel  3：X资源  4：单选项
# -- 5：火车票 6：TTD
# -- Result	是否成功	1：成功 0：失败
# -- FlightNo	航班号
# -- RouteToken	Token
# -- HotelID	酒店ID
# -- RoomID	房型ID
# -- ResourcesID	资源ID
# -- Message	备注
# -- FailCodes	失败Code
# -- FlightType	机票类型	1：国际  2：大系统  3度假

# 可定检查之-资源调用
checkresource = """SELECT
    CheckAvailableLogDetailID,
    DataCreate_LastTime
FROM
    CheckAvailableLogDetail
WHERE
    DataCreate_LastTime >= %(sdt)s
        AND DataCreate_LastTime <= %(edt)s
        and ProductType=(case when %(producttype)s <> -1 then %(producttype)s else ProductType end)
		and Result=(case when %(result)s <> -1 then %(result)s else Result end)
        and FlightType=(case when %(flighttype)s <> -1 then %(flighttype)s else FlightType end)
        """

###可订检查离线数据sql   全部/分渠道
sql_all_checkHistory="""
      select
date_format(createdate,'%Y-%m-%d') as vdate,
case when Result=0 then 'fail'
     when Result=1 then 'success' end as statusCode,
case when sourceType=1 then 'SDP'
	 when sourceType=2 then 'DP' end as product,
case when ChannelID=1 then 'Online'
     when ChannelID=2 then 'Offline'
     when ChannelID=3 then '无线' end as channel,
count(1) as cnt
from CheckAvailableLog where
sourceType in (1,2)
and IsIntl in (1,2)
and ChannelID in (1,2,3)
and Result in (0,1)
and  date_format(createdate,'%Y-%m-%d')>= %s and date_format(createdate,'%Y-%m-%d') <%s
group by
date_format(createdate,'%Y-%m-%d'),
case when Result=0 then 'fail'
     when Result=1 then 'success' end,
case when sourceType=1 then 'SDP'
	 when sourceType=2 then 'DP' end,
case when ChannelID=1 then 'Online'
     when ChannelID=2 then 'Offline'
     when ChannelID=3 then '无线' end
"""
sql_channel_checkHistory="""
	 select
a.vdate,
a.statusCode,
a.product,
a.deIn,
ifnull(a.cnt+b.cnt,0)  as cnt
 from
(select * from checkChannelDim where vdate>=%s and vdate<%s ) a
left join
 (select
date_format(createdate,'%Y-%m-%d') as vdate,
case when Result=0 then 'fail'
     when Result=1 then 'success' end as statusCode,
case when sourceType=1 then 'SDP'
	 when sourceType=2 then 'DP' end as product,
case when IsIntl=1 then '国际'
	 when IsIntl=2 then '国内' end as deIn,
count(1) as cnt
from CheckAvailableLog where
sourceType in (1,2)
and IsIntl in (1,2)
and ChannelID=%s
and Result in (0,1)
and  date_format(createdate,'%Y-%m-%d')>= %s and date_format(createdate,'%Y-%m-%d') <%s
group by
date_format(createdate,'%Y-%m-%d'),
case when Result=0 then 'fail'
     when Result=1 then 'success' end,
case when sourceType=1 then 'SDP'
	 when sourceType=2 then 'DP' end,
case when IsIntl=1 then '国际'
	 when IsIntl=2 then '国内' end
     ) b
     on a.statusCode=b.statusCode and a.deIn=b.deIn  and a.product=b.product and a.vdate=b.vdate
 order by a.vdate,a.statuscode,a.product,a.deIn
     ;

"""