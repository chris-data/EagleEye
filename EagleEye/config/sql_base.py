# Created by wang.zy at 2015/10/15 DIY_Order

sqldict = {
    # ��ȡ��������һ��Ԥ��
    "order_max_orderdate": """
SELECT
    MAX(orderdate) AS orderdate
FROM
    v_DIY_Order
WHERE
    orderdate >= CURDATE()
    """,
    "booking_max_orderdate": """
SELECT
    MAX(DataChange_LastTime) AS orderdate
FROM
    v_DIY_Booking
WHERE
    DataChange_LastTime >= CURDATE()
    """,
    "commit_max_orderdate": """
SELECT
    MAX(DataChange_LastTime) AS orderdate
FROM
    v_DIY_Commit
WHERE
    DataChange_LastTime >= CURDATE()
    """,
    # ��pageid�ͼ��ʱ������ʼ��pv
    "init_pv_day": '''
                   SELECT id
                          ,datachange_lasttime AS dt
                          ,pv
                   FROM   monitor.diy_pageview_statistic_realtime
                   WHERE  pageid = %s AND statistic_date = %s AND minute(datachange_lasttime)%%s = 0
                   ORDER  BY datachange_lasttime limit 1440
                   ''',
    # ��pageid�ͼ��ʱ����׷��pv
    "update_pv_day": '''
                   SELECT id
                          ,DataChange_LastTime AS dt
                          ,pv
                   FROM   monitor.diy_pageview_statistic_realtime
                   WHERE  pageid = %s  AND statistic_date = %s AND minute(datachange_lasttime)%%s = 0
                   ORDER  BY DataChange_LastTime DESC limit 1
    ''',
    # ��pageid�ͼ��ʱ������ʼ��uv
    "init_uv_day": '''
                   SELECT id
                          ,datachange_lasttime AS dt
                          ,uv
                   FROM   monitor.diy_pageview_statistic_realtime
                   WHERE  pageid = %s AND statistic_date = %s AND minute(datachange_lasttime)%%s = 0
                   ORDER  BY datachange_lasttime limit 1440
                   ''',
    # ��pageid�ͼ��ʱ����׷��uv
    "update_uv_day": '''
                   SELECT id
                          ,DataChange_LastTime AS dt
                          ,uv
                   FROM   monitor.diy_pageview_statistic_realtime
                   WHERE  pageid = %s  AND statistic_date = %s AND minute(datachange_lasttime)%%s = 0
                   ORDER  BY DataChange_LastTime DESC limit 1
    ''',
    # ��pageid�ͼ��ʱ������ʼ��pv������ۻ�ֵ
    "init_traffic": '''
SELECT
    a.id, a.DataChange_LastTime as dt, a.pv - b.pv AS pv,a.uv-b.uv as uv
FROM
    (SELECT
        id,
            SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        diy_pageview_statistic_realtime
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) a
        LEFT OUTER JOIN
    (SELECT
        id,
            SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %s MINUTE), 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        monitor.diy_pageview_statistic_realtime
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) b ON a.DataChange_LastTime = b.DataChange_LastTime
            ''',
    "his_traffic": '''
SELECT
    a.id, a.DataChange_LastTime as dt, coalesce(a.pv - b.pv,0) AS pv,coalesce(a.uv-b.uv,0) as uv
FROM
    (SELECT
        id,
            SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        monitor.frt_pageview_statistic
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) a
        LEFT OUTER JOIN
    (SELECT
        id,
            SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %s MINUTE), 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        monitor.frt_pageview_statistic
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) b ON a.DataChange_LastTime = b.DataChange_LastTime
order by 2
            ''',
    "update_traffic": """
                     SELECT
                           a.id, a.DataChange_LastTime as dt, a.pv - b.pv AS pv,a.uv - b.uv AS uv
                     FROM
                     ( SELECT
                           id,
                           SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %s MINUTE), 1, 16) AS DataChange_LastTime,
                           pv,
                           uv
                     FROM diy_pageview_statistic_realtime
                     WHERE statistic_date = %s
                     AND pageid = %s
                     AND MINUTE(DataChange_LastTime) %%s = 0
                     ORDER BY DataChange_LastTime desc
                     LIMIT 2) b
                     join
                     ( SELECT
                           id,
                           SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
                           pv,
                           uv
                     FROM
                     diy_pageview_statistic_realtime
                     WHERE  statistic_date = %s
                     AND pageid = %s
                     AND MINUTE(DataChange_LastTime) %%s = 0) a
                     ON a.DataChange_LastTime = b.DataChange_LastTime;
    """,
    # ��pageid�ͼ��ʱ������ʼ��pv������ۻ�ֵ
    "init_uv_span": '''
SELECT
    a.id, SUBSTR(a.DataChange_LastTime, 1, 16) as dt, a.uv - b.uv AS uv
FROM
    (SELECT
        id,
            SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        diy_pageview_statistic_realtime
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) a
        LEFT OUTER JOIN
    (SELECT
        id,
            SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %s MINUTE), 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        monitor.diy_pageview_statistic_realtime
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) b ON a.DataChange_LastTime = b.DataChange_LastTime
    ''',
    "update_uv_span": """
SELECT
    a.id, SUBSTR(a.DataChange_LastTime, 1, 16) as dt, a.uv - b.uv AS pv
FROM
    (SELECT
        id,
            SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        diy_pageview_statistic_realtime
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0) a
        JOIN
    (SELECT
        id,
            SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %s MINUTE), 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        diy_pageview_statistic_realtime
    WHERE
        statistic_date = %s
            AND pageid = %s
            AND MINUTE(DataChange_LastTime) %%s = 0
    ORDER BY DataChange_LastTime
    LIMIT 1) b ON a.DataChange_LastTime = b.DataChange_LastTime
                    """,
    'compare_pvs_init': """
select
lastdt.id,
COALESCE(lastdt.dt,'')as dt,
COALESCE(lastdt.pv,0) as pv1,
coalesce(predt.pv,0)as pv2
from
(
SELECT
    a.id, a.DataChange_LastTime as dt, COALESCE(a.pv - b.pv, 0) AS pv,substr(a.DataChange_LastTime,11,6) as idx
FROM
    (SELECT
        id,
            SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        diy_pageview_statistic_realtime
    WHERE
        statistic_date = %(predt)s
            AND pageid = %(pageid)s
            AND MINUTE(DataChange_LastTime) %%(interval)s = 0) a
        LEFT OUTER JOIN
    (SELECT
        id,
            SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %(interval)s MINUTE), 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        monitor.diy_pageview_statistic_realtime
    WHERE
        statistic_date = %(predt)s
            AND pageid = %(pageid)s
            AND MINUTE(DataChange_LastTime) %%(interval)s = 0) b ON a.DataChange_LastTime = b.DataChange_LastTime
) predt
left outer join
(
SELECT
    a.id, a.DataChange_LastTime as dt, COALESCE(a.pv - b.pv, 0) AS pv,substr(a.DataChange_LastTime,11,6) as idx
FROM
    (SELECT
        id,
            SUBSTR(DataChange_LastTime, 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        diy_pageview_statistic_realtime
    WHERE
        statistic_date = %(lastdt)s
            AND pageid = %(pageid)s
            AND MINUTE(DataChange_LastTime) %%(interval)s = 0) a
        LEFT OUTER JOIN
    (SELECT
        id,
            SUBSTR(DATE_ADD(DataChange_LastTime, INTERVAL %(interval)s MINUTE), 1, 16) AS DataChange_LastTime,
            pv,
            uv
    FROM
        monitor.diy_pageview_statistic_realtime
    WHERE
        statistic_date = %(lastdt)s
            AND pageid = %(pageid)s
            AND MINUTE(DataChange_LastTime) %%(interval)s = 0) b ON a.DataChange_LastTime = b.DataChange_LastTime
) lastdt on predt.idx = lastdt.idx
    """,
    # ��ȡbooking������ʱ������м�¼
    "bookgingorder_init": """
                          SELECT
                                n_id as nid,
                                MasterOrderID as masterorderid,
                                SaleMode as salemode,
                                ServerFromType as serverfromtype,
                                DataChange_LastTime as datacreate_lasttime
                          FROM  monitor.DIY_Booking
                          where datediff(DataChange_lasttime , %s)=0
     """,
    # commmit_all
    "commmit_all": """
SELECT
    a.n_id AS nid,
    a.MasterOrderID AS masterorderid,
    a.DataChange_LastTime AS datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
        AND a.DataChange_LastTime < %s
        AND b.ServerFromType = COALESCE(%s, b.ServerFromType);
    """,
    # commmit_dp
    "commmit_dp": """
SELECT
    a.n_id as nid,
    a.MasterOrderID as masterorderid,
    a.DataChange_LastTime as datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
        AND a.DataChange_LastTime < %s
        AND a.SaleMode = %s
        AND b.ServerFromType = COALESCE(%s, b.ServerFromType);
    """,
    # commmit_sdp
    "commmit_sdp": """
SELECT
    a.n_id as nid,
    a.MasterOrderID as masterorderid,
    a.DataChange_LastTime as datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
        AND a.DataChange_LastTime < %s
        AND a.SaleMode <> %s
        AND b.ServerFromType = COALESCE(%s, b.ServerFromType);
    """,

    # commmit_init_alldp
    "commmit_init_alldp": """
    SELECT
    a.n_id as nid,
    a.MasterOrderID as masterorderid,
    a.DataChange_LastTime as datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
        AND a.DataChange_LastTime < %s
        AND a.SaleMode = 0
    """,

    # commmit_update
    "commmit_update": """
    SELECT
    a.n_id as nid,
    a.MasterOrderID as masterorderid,
    a.DataChange_LastTime as datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
        AND a.SaleMode = %s
        AND b.ServerFromType = %s;
    """,

    # commmit_update_sdpall
    "commmit_update_sdpall": """
    SELECT
    a.n_id as nid,
    a.MasterOrderID as masterorderid,
    a.DataChange_LastTime as datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
        AND a.SaleMode <> 0;
    """,

    # commmit_update
    "commmit_update_all": """
    SELECT
    a.n_id as nid,
    a.MasterOrderID as masterorderid,
    a.DataChange_LastTime as datachange_lasttime
FROM
    monitor.DIY_Commit a
        LEFT JOIN
    monitor.DIY_Booking b ON a.MasterOrderID = b.MasterOrderID
WHERE
    a.DataChange_LastTime >= %s
    """,
    # pageid
    "pageid": """
    select pageid from monitor.DIY_pageid
    """,
    "history_order": """

    """,
    "traffic_aggregate": """
    SELECT
        id,
        datachange_lasttime AS dt,
        pv,
        uv
    FROM
        monitor.diy_pageview_statistic_realtime
    WHERE
         pageid = %s
        AND statistic_date = %s
        AND MINUTE(datachange_lasttime) %%s = 0
    ORDER BY datachange_lasttime
    """,
    "his_traffic_aggregate": """
    SELECT
        id,
        datachange_lasttime AS dt,
        COALESCE(pv, 0) as pv,
        COALESCE(uv, 0) as uv
    FROM
        monitor.frt_pageview_statistic
    WHERE
         pageid = %s
        AND statistic_date = %s
        AND MINUTE(datachange_lasttime) %%s = 0
    ORDER BY datachange_lasttime
    """,
    # app����ת����
    "appCR": """
    select vdate,type,cnt from APPVacationCR where
    vdate between %s and %s
    order by vdate,type
    """  ,
     #�ȼ�ȫ������
    "appAllOrder":"""
    select vdate,bu,channel,cnt from fatVdataVacationOrder where
    vdate> %s and vdate <%s
    and channel in ('total','online')
    order by vdate,channel,bu
    """,
    #app�ȼٶ���
    "appOrder":"""
    select vdate,bu,channel,cnt from fatVdataVacationOrder where
    vdate> %s and vdate <%s
    and channel in ('android','iphone','iphone_6.17','iphone_6.16','iphone_6.15','iphone_6.14','iphone_6.13','iphone_6.12','iphone_6.11','others')
    order by vdate,channel,bu
    """,
    #h5�ȼٶ���
     "h5Order":"""
    select vdate,bu,cnt from vdataVacationOrderH5 where
    vdate> %s and vdate <%s
    order by vdate,bu
    """,
    #�ȼٽ��
     "appAmount":"""
    select vdate,bu,cnt from vdateVacationAmount where
    vdate> %s and vdate <%s
    order by vdate,bu
    """,
 # ������bookcommit
    "diybookcommit": """
   select * from vacationBookCommit where
  vdate> %s and vdate <%s   and bu='diy'
   order by vdate,actionType,channel
    """  ,
# �Ŷ���bookcommit
    "pkgbookcommit": """
   select * from vacationBookCommit where
  vdate> %s and vdate <%s  and bu='pkg'
   order by vdate,actionType,channel
    """  ,
# ǩ֤ commit
    "visabookcommit": """
   select * from vacationBookCommit where
  vdate> %s and vdate <%s  and bu='visa'
   order by vdate,actionType,channel
    """  ,
#�����в�ѯΪ��
   "diyservicehis": """
   select vdate,type,product,channel,status,cnt from serviceinvokelogResults where
  vdate between %s and %s
   order by vdate,type,product,channel,status
    """  ,
 # ������bookcommit��
    "diybookcommitnew": """
   select
 O.vdate,
 O.actionType,
 O.channel,
 O.rate,
 O.bu
 from
   (
   select * from vacationBookCommit where
  vdate> %s and vdate < %s    and bu='diy'
   union all
  select * from vacationBookCommit where
  vdate> %s and vdate < %s   and bu='diy'
  )O
 order by  O.vdate,O.actionType,O.channel
    """  ,
# �Ŷ���bookcommit��
    "pkgbookcommitnew": """
   select
 O.vdate,
 O.actionType,
 O.channel,
 O.rate,
 O.bu
 from
   (
   select * from vacationBookCommit where
  vdate> %s and vdate < %s    and bu='pkg'
   union all
  select * from vacationBookCommit where
  vdate> %s and vdate < %s   and bu='pkg'
  )O
 order by  O.vdate,O.actionType,O.channel
    """  ,
 # ǩ֤commit��
    "visacommitnew": """
   select
 O.vdate,
 O.actionType,
 O.channel,
 O.rate,
 O.bu
 from
   (
   select * from vacationBookCommit where
  vdate> %s and vdate < %s    and bu='visa'
   union all
  select * from vacationBookCommit where
  vdate> %s and vdate < %s   and bu='visa'
  )O
 order by  O.vdate,O.actionType,O.channel
    """  ,
##ҳ������(�Ŷ���)
  "pageHandler": """
   select vdate,page,handlerName,maxcnt,mincnt,avgcnt from handler
    where vdate between %s and %s
    order by vdate,page,handlerName,maxcnt,mincnt,avgcnt
    """  ,

##�ӿ�����
  "soaPerforms": """
   select vdate,operation,interfaceName,maxcnt,mincnt,avgcnt from soarequestlatency
    where vdate between %s and %s
    order by vdate,operation,interfaceName,maxcnt,mincnt,avgcnt
    """  ,
 ##ҳ������(������+����)
    "tourhandler": """
  select vdate,page,handlerName,maxcnt,mincnt,avgcnt from tourhandler
    where vdate between %s and %s
    order by vdate,page,handlerName,maxcnt,mincnt,avgcnt
    """  ,


}
