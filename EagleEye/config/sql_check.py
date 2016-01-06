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
