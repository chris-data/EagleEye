# Created by wang.zy at 2015/12/22

# �ɶ����
# CheckAvailableLog
# CheckAvailableID	��������
# SourceType	����	1��SDP  2��DP
# Result	�Ƿ�ɹ�	1���ɹ� 0��ʧ��
# ProductID	��ƷID
# DepartCityCode	��������
# ArriveCityCode	�������
# ChannelID	��Դ	1��Online  2��Offline 3������  4������Ӣ����վ
# State	״̬	1���Ͻӿ� 2���½ӿ�
# CreateDate	����ʱ��
# ShoppingId	ShoppingID
# IsIntl	�Ƿ����	1������ 2������

# ά�Ȼ��֣�
# ʱ�䣺CreateDate
# ��Ʒ��̬��SourceType
# �������Result
# ��Դ��ChannelID
# ����IsIntl

# �ɶ����
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
# �Ƽ��ӿ�-����
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
# �Ƽ��ӿ�-����
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

# �Ƽ��ӿ�-��ʱ
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

###�ɶ������������sql   ȫ��/������
sql_all_checkHistory="""
      select
date_format(createdate,'%Y-%m-%d') as vdate,
case when Result=0 then 'fail'
     when Result=1 then 'success' end as statusCode,
case when sourceType=1 then 'SDP'
	 when sourceType=2 then 'DP' end as product,
case when ChannelID=1 then 'Online'
     when ChannelID=2 then 'Offline'
     when ChannelID=3 then '����' end as channel,
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
     when ChannelID=3 then '����' end
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
case when IsIntl=1 then '����'
	 when IsIntl=2 then '����' end as deIn,
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
case when IsIntl=1 then '����'
	 when IsIntl=2 then '����' end
     ) b
     on a.statusCode=b.statusCode and a.deIn=b.deIn  and a.product=b.product and a.vdate=b.vdate
 order by a.vdate,a.statuscode,a.product,a.deIn
     ;

"""