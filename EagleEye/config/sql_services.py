# Created by wang.zy at 2016/1/5

# 推荐接口-次数
ShoppingService_RecommendSearch_Times = """
SELECT
    ServiceInvokeId, DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime < %(edt)s
        AND productTypeName = 'ShoppingService_RecommendSearch'
        AND productType = (CASE
        WHEN productType = - 1 THEN productType
        ELSE %(producttype)s
    END)
        AND isIntlflight = (CASE
        WHEN isIntlflight = - 1 THEN isIntlflight
        ELSE %(isintlflight)s
    END)
        AND isIntlHotel = (CASE
        WHEN isIntlHotel = - 1 THEN isIntlHotel
        ELSE %(isintlhotel)s
    END)
        AND channel = (CASE
        WHEN channel = '- 1' THEN channel
        ELSE %(channel)s
    END);
"""
# 推荐接口-失败次数
ShoppingService_RecommendSearch_Failure_Times = """
SELECT
    ServiceInvokeId, DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime < %(edt)s
        AND productTypeName = 'ShoppingService_RecommendSearch'
        AND InvokeStatus IN (2 , 3, - 1)
        AND productType = (CASE
        WHEN productType = - 1 THEN productType
        ELSE %(producttype)s
    END)
        AND isIntlflight = (CASE
        WHEN isIntlflight = - 1 THEN isIntlflight
        ELSE %(isintlflight)s
    END)
        AND isIntlHotel = (CASE
        WHEN isIntlHotel = - 1 THEN isIntlHotel
        ELSE  %(isintlhotel)s
    END)
        AND channel = (CASE
        WHEN channel = '-1' THEN channel
        ELSE %(channel)s
    END);
"""

# 推荐接口-耗时
ShoppingService_RecommendSearch_Elapsed = """
SELECT
    ServiceInvokeId,elapsedtime,DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime <= %(edt)s
        and productTypeName = 'ShoppingService_RecommendSearch'
        and productType = (case when productType=-1 then productType else %(producttype)s end)
        and isIntlflight = (case when isIntlflight = -1 then  isIntlflight else %(isintlflight)s end)
        and isIntlHotel = (case when isIntlHotel = -1 then isIntlHotel else %(isintlhotel)s end )
        and channel = (case when channel ='-1' then channel else %(channel)s end)
        and elapsedtime > 0;
        """

ShoppingService_max_time = """


"""

# 推荐接口-次数
ShoppingService_RecommendSearch_ratio = """
SELECT
     ServiceInvokeId,
     case when InvokeStatus IN (2 , 3, - 1) then 1 else 0 end as InvokeStatus,
     elapsedtime,
     DataChange_LastTime
FROM
    monitor.serviceinvokelog
WHERE
    DataChange_LastTime >= %(sdt)s
        AND DataChange_LastTime < %(edt)s
        AND productTypeName = 'ShoppingService_RecommendSearch'
        AND productType = (CASE
        WHEN productType = - 1 THEN productType
        ELSE %(producttype)s
    END)
        AND isIntlflight = (CASE
        WHEN isIntlflight = - 1 THEN isIntlflight
        ELSE %(isintlflight)s
    END)
        AND isIntlHotel = (CASE
        WHEN isIntlHotel = - 1 THEN isIntlHotel
        ELSE %(isintlhotel)s
    END)
        AND channel = (CASE
        WHEN channel = '- 1' THEN channel
        ELSE %(channel)s
    END);
"""
