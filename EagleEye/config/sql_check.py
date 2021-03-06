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
    CheckAvailableLog force index(idx_CreateDate,idx_SourceType,idx_Result,idx_IsIntl,idx_ChannelID)
WHERE
    CreateDate >= %(sdt)s
        AND CreateDate < %(edt)s
        and SourceType=(case when %(sourcetype)s <> -1 then %(sourcetype)s else SourceType end)
		and Result=(case when %(result)s <> -1 then %(result)s else Result end)
        and IsIntl=(case when %(isintl)s <> -1 then %(isintl)s else IsIntl end)
		and ChannelID=(case when %(channelid)s <> -1 then %(channelid)s else ChannelID end)
        """
base_all = """
SELECT
    CheckAvailableID,
    CreateDate
FROM
    CheckAvailableLog force index(idx_CreateDate,idx_SourceType,idx_Result,idx_IsIntl,idx_ChannelID)
WHERE
    CreateDate >= %(sdt)s
        AND CreateDate < %(edt)s
        and SourceType=(case when %(sourcetype)s <> -1 then %(sourcetype)s else SourceType end)
        and IsIntl=(case when %(isintl)s <> -1 then %(isintl)s else IsIntl end)
		and ChannelID=(case when %(channelid)s <> -1 then %(channelid)s else ChannelID end)
        """

max_createdate = """
SELECT
    max(CreateDate) as CreateDate
FROM
    CheckAvailableLog force index(idx_createdate)
WHERE
    CreateDate >= curdate()
        """
max_create_source="""
SELECT
    max(CreateDate) as CreateDate
FROM
    CheckAvailableLogDetail force index(idx_CreateDate)
WHERE
    CreateDate >= curdate()
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
    CreateDate
FROM
    CheckAvailableLogDetail force index(idx_CreateDate)
WHERE
    CreateDate >= %(sdt)s
        AND CreateDate < %(edt)s
        and ProductType=(case when %(producttype)s <> -1 then %(producttype)s else ProductType end)
		and Result=(case when %(result)s <> -1 then %(result)s else Result end)
        and FlightType=(case when %(flighttype)s <> -1 then %(flighttype)s else FlightType end)
        """

###可订检查离线数据sql   全部
sql_all_checkHistory="""
select * from  diyCheckAvailableResults where
vdate between %s and %s
and product in ('DP','SDP') and channel in ('Online','Offline','无线') order by vdate,statusCode,product,channel
"""
sql_channel_checkHistory="""
	 select
a.vdate,
a.statusCode,
a.product,
a.deIn,
ifnull(a.cnt+b.cnt,0)  as cnt
 from
(select * from checkChannelDim where vdate>%s and vdate<%s ) a
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
and  createdate> %s and createdate <%s
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
###可订检查离线分资源数据sql   机票
sql_flightCheckHistory="""

select vdate,statuscode,product,cnt from  diyCheckAvailableResults where
vdate between  %s and %s
 and channel in ('flight') order by vdate,statusCode,product
"""

###  可订检查 分资源 酒店及其他资源（不含机票）
sql_hotelCheckHistory="""
 select vdate,statuscode,product,cnt from  diyCheckAvailableResults where
vdate between  %s and %s
 and channel in ('hotelothers') order by vdate,statusCode,product
"""


###  新的SDP可订检查接口
sql_newCheckHistory="""
select vdate,pagetype,channel,statustype,cnt from  diycanbooking where
vdate between   %s and %s and bu='diy'
order by vdate,pagetype,channel,statustype
"""


###  新的团队游可订检查接口
sql_pkgCheckHistory="""
select vdate,pagetype,channel,statustype,cnt from  diycanbooking where
vdate between   %s and %s and bu='pkg'
order by vdate,pagetype,channel,statustype
"""


###  老的DP可订检查接口
sql_oldDPCheckHistory="""
select vdate,statuscode,product,channel,cnt from diycanbookingDP
where vdate between   %s and %s
group by vdate,statuscode,product,channel
"""
