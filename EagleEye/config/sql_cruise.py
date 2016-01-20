# Created by wang.zy at 2016/1/19


# SELECT
#     OrderId, OrderDate
# FROM
#     Ord_order
# WHERE
#     orderdate >= '2016-01-18'
#         AND orderdate < '2016-01-19'
#         AND DistributionChannelName IN ('Competitor' , 'Hybrid')
#         AND (NOT ((uid LIKE 'TEST%')))
#         AND (NOT ((uid LIKE 'WWWWW%')));

# orders = """
# SELECT
#     OrderId, OrderDate
# FROM
#     v_Cru_Order
# WHERE
#     orderdate >= %(sdt)s
#         AND orderdate < %(edt)s
#         AND channel = %(channel)s
# ;
#         """
orders = """
SELECT
    OrderId, OrderDate
FROM
    v_Cru_Order
WHERE
    orderdate >= %(sdt)s
        AND orderdate < %(edt)s
        AND channel = (case when %(channel)s='all' then channel else %(channel)s end)
;
        """
max_orderdate="""
SELECT
    MAX(orderdate) AS orderdate
FROM
    v_Cru_Order
WHERE
    orderdate >= CURDATE() AND channel = (case when %(channel)s='all' then channel else %(channel)s end)
"""