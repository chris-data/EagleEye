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