# Created by wang.zy at 2015/11/19

sql_cancelorders = """
SELECT
    CASE WHEN CancelReason LIKE '%其他原因%' THEN '其他原因'
        ELSE CancelReason
    END AS `key`,
    COUNT(*) AS `value`
FROM
    DIY_Order
WHERE
    OrderDate >= CURDATE()
        AND Status & 64 = 64
GROUP BY
CASE
    WHEN CancelReason LIKE '%其他原因%' THEN '其他原因'
    ELSE CancelReason
END
"""
sql_cancelrate = """
SELECT
    DIY_OrderID,
    CASE
        WHEN status & 64 = 64 THEN 1
        ELSE 0
    END AS isCancel,
    OrderDate
FROM
    DIY_Order
WHERE
    OrderDate >= %s
        AND OrderDate < %s
        AND status & 1 = 1
"""
sql_auto_cancelrate = """
SELECT
    DIY_OrderID,
    CASE
        WHEN
            status & 64 = 64
                AND CancelReason = '超时30分钟未付款自动取消'
        THEN
            1
        ELSE 0
    END AS isCancel,
    OrderDate
FROM
    DIY_Order
WHERE
    OrderDate >=%s
        AND OrderDate < %s
        AND status & 1 = 1
"""

sql_ua_platform="""
SELECT
    platform,
    COUNT(*) AS cnt
FROM
    analysis.ua_analysis
where platform <> '' and startdt >= %s and startdt< %s
GROUP BY platform;
"""

sql_ua_browser="""
SELECT
    brower, COUNT(*) as cnt
FROM
    analysis.ua_analysis
WHERE
    brower <> '' and startdt >= %s and startdt< %s
GROUP BY brower;
"""
sql_ua_device="""
SELECT
    CASE
        WHEN device LIKE '%Android%' THEN 'Android phone'
        WHEN device LIKE 'Mac OS%' THEN 'Mac Book'
        WHEN device LIKE 'Windows NT%' THEN 'Windows PC'
        WHEN device LIKE 'Linux%' THEN 'Linux PC'
        ELSE device
    END AS device,
    COUNT(*) AS cnt
FROM
    analysis.ua_analysis
WHERE
    device <> '' and startdt >= %s and startdt< %s
GROUP BY CASE
    WHEN device LIKE '%Android%' THEN 'Android phone'
    WHEN device LIKE 'Mac OS%' THEN 'Mac Book'
    WHEN device LIKE 'Windows NT%' THEN 'Windows PC'
    WHEN device LIKE 'Linux%' THEN 'Linux PC'
    ELSE device
END;
"""
sql_ua_operationsystem ="""
SELECT
    operatesystem, COUNT(*) as cnt
FROM
    analysis.ua_analysis
where  startdt >= %s and startdt< %s
GROUP BY operatesystem;
"""
sql_ua_edition="""
SELECT
    SUBSTRING(edition, 1, 18) AS eidtion, COUNT(*)
FROM
    analysis.ua_analysis
WHERE
    edition <> '' and startdt >= %s and startdt< %s
GROUP BY SUBSTRING(edition, 1, 18);
"""