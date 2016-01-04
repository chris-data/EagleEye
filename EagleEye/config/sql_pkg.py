# Created by wang.zy at 2015/11/27

order_max_orderdate = """
SELECT
    MAX(orderdate)
FROM
    v_Pkg_Order
WHERE
    orderdate >= CURDATE()
"""
create_max_orderdate = """
SELECT
    MAX(datachange_lasttime)
FROM
    v_Pkg_log
WHERE
    Submitordertype <> 2
        AND datachange_lasttime >= CURDATE()
"""
commit_max_orderdate = """
SELECT
    MAX(datachange_lasttime)
FROM
    v_Pkg_log
WHERE
    Submitordertype = 2
        AND datachange_lasttime >= CURDATE()
"""

order_all_online = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s  and isonline = 'T' and serverfrom not like 'client%' and serverfrom not like 'App%' and serverfrom not like 'H5%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
order_all_app = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  isonline = 'T'AND serverfrom LIKE 'App%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""

order_all_h5 = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  isonline = 'T'AND serverfrom LIKE 'H5%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""

order_all_offline = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  isonline = 'F' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""

order_all_all = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""

# -----------------product visa-----------------------------------------------

order_visa_online = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID = 15 and isonline = 'T' and serverfrom not like 'client%' and serverfrom not like 'App%' and serverfrom not like 'H5%'
"""
order_visa_app = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID = 15 and  isonline = 'T'AND serverfrom LIKE 'App%'
"""

order_visa_h5 = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID = 15 and  isonline = 'T'AND serverfrom LIKE 'H5%'
"""

order_visa_offline = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID = 15 and  isonline = 'F'
"""
order_visa_all = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID = 15
"""

########################################product short###################################################################

order_short_online = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and isonline = 'T' and serverfrom not like 'client%' and serverfrom not like 'App%' and serverfrom not like 'H5%'
and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
order_short_app = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  isonline = 'T'AND serverfrom LIKE 'App%' and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""

order_short_h5 = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  isonline = 'T'AND serverfrom LIKE 'H5%' and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""

order_short_offline = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and  isonline = 'F' and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
order_short_all = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""

########################################product pkg#####################################################################
order_pkg_online = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15) and isonline = 'T' and serverfrom not like 'client%' and serverfrom not like 'App%' and serverfrom not like 'H5%'
"""
order_pkg_app = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15) and  isonline = 'T'AND serverfrom LIKE 'App%'
"""

order_pkg_h5 = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15) and  isonline = 'T'AND serverfrom LIKE 'H5%'
"""

order_pkg_offline = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID in (10,11,26) and ProductPatternID in (1,3,4,15)  and  isonline = 'F'
"""
order_pkg_all = """
SELECT
    orderid,orderdate
FROM
    monitor.v_Pkg_Order
WHERE
   orderdate>= %s and orderdate< %s and ProductCategoryID in (10,11,26) and ProductPatternID in (1,3,4,15)
"""
# ---------------------------create-----------------------------------

create_all_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
create_all_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and  (serverfrom like 'client%' or serverfrom like 'App%') and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
create_all_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
create_all_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom like 'booking%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
create_all_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""

create_visa_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%'
and ProductCategoryID = 15
"""
create_visa_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and  (serverfrom like 'client%' or serverfrom like 'App%') and ProductCategoryID = 15
"""
create_visa_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and ProductCategoryID = 15
"""
create_visa_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom like 'booking%' and ProductCategoryID = 15
"""
create_visa_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and ProductCategoryID = 15
"""

create_pkg_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%'
and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
create_pkg_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and  (serverfrom like 'client%' or serverfrom like 'App%') and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
create_pkg_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
create_pkg_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom like 'booking%' and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
create_pkg_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and  ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""

create_short_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%'
and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
create_short_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and  (serverfrom like 'client%' or serverfrom like 'App%') and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
create_short_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
create_short_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and serverfrom like 'booking%' and ProductCategoryid in (9,25)  and ProductPatternID in (1,3,4,15)
"""
create_short_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype<>2 and ProductCategoryid in (9,25)  and ProductPatternID in (1,3,4,15)
"""

commit_all_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
commit_all_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and (serverfrom like 'client%' or serverfrom like 'App%') and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
commit_all_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2  and (serverfrom like 'H5%' or serverfrom like '%html5%') and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
commit_all_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom like 'booking%' and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""
commit_all_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and  ((ProductCategoryID = 15) or (ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)) or (ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)))
"""

commit_visa_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%'
and ProductCategoryID = 15
"""
commit_visa_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and  (serverfrom like 'client%' or serverfrom like 'App%') and ProductCategoryID = 15
"""
commit_visa_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and ProductCategoryID = 15
"""
commit_visa_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom like 'booking%' and ProductCategoryID = 15
"""
commit_visa_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and ProductCategoryID = 15
"""

commit_pkg_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%'
and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
commit_pkg_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and  (serverfrom like 'client%' or serverfrom like 'App%') and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
commit_pkg_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
commit_pkg_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom like 'booking%' and ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""
commit_pkg_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and  ProductCategoryID in (10,11,26)  and ProductPatternID in (1,3,4,15)
"""

commit_short_online = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom not like 'booking%' and serverfrom not  like 'H5%' and serverfrom not like 'client%' and  serverfrom not like 'App%'
and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
commit_short_app = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and  (serverfrom like 'client%' or serverfrom like 'App%') and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
commit_short_h5 = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where  datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and (serverfrom like 'H5%' or serverfrom like '%html5%') and ProductCategoryid in (9,25) and ProductPatternID in (1,3,4,15)
"""
commit_short_offline = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and serverfrom like 'booking%' and ProductCategoryid in (9,25)  and ProductPatternID in (1,3,4,15)
"""
commit_short_all = """
select orderid,datachange_lasttime from monitor.v_Pkg_log where datachange_lasttime>=%s and datachange_lasttime<%s and Submitordertype=2 and ProductCategoryid in (9,25)  and ProductPatternID in (1,3,4,15)
"""
