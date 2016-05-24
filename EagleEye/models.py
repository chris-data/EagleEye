from django.db import models


class DiyPageviewStatisticRealtime(models.Model):
    id = models.AutoField(primary_key=True)
    pageid = models.IntegerField(blank=True, null=True)
    statistic_date = models.DateField(blank=True, null=True)
    pv = models.IntegerField(blank=True, null=True)
    uv = models.IntegerField(blank=True, null=True)
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.

    def __str__(self):
        return self.datachange_lasttime

    class Meta:
        managed = False
        db_table = 'diy_pageview_statistic_realtime'


class DiyOrderRealtime(models.Model):
    nid = models.AutoField(primary_key=True)
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID', blank=True, null=True)  # Field name made lowercase.
    packageid = models.IntegerField(db_column='PackageID', blank=True, null=True)  # Field name made lowercase.
    packagetitle = models.CharField(db_column='PackageTitle', max_length=200, blank=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True,
                                 null=True)  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4, blank=True,
                                        null=True)  # Field name made lowercase.
    priceadjust = models.DecimalField(db_column='PriceAdjust', max_digits=19, decimal_places=4, blank=True,
                                      null=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    diy_startdate = models.DateTimeField(db_column='DIY_StartDate', blank=True, null=True)  # Field name made lowercase.
    diy_enddate = models.DateTimeField(db_column='DIY_EndDate', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20, blank=True)  # Field name made lowercase.
    ctripcardno = models.CharField(db_column='CtripCardNo', max_length=20, blank=True)  # Field name made lowercase.
    status = models.IntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl', blank=True, null=True)  # Field name made lowercase.
    journeytype = models.SmallIntegerField(db_column='JourneyType', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    bookrq = models.TextField(db_column='BookRQ', blank=True)  # Field name made lowercase. This field type is a guess.
    bookrs = models.TextField(db_column='BookRS', blank=True)  # Field name made lowercase. This field type is a guess.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=100, blank=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    isonline = models.NullBooleanField(db_column='IsOnline')  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    processoper = models.CharField(db_column='ProcessOper', max_length=20, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=400, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    confirmclienttime = models.DateTimeField(db_column='ConfirmClientTime', blank=True,
                                             null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=19, decimal_places=4, blank=True,
                                 null=True)  # Field name made lowercase.
    emoney = models.DecimalField(db_column='EMoney', max_digits=19, decimal_places=4, blank=True,
                                 null=True)  # Field name made lowercase.
    payablepay = models.DecimalField(db_column='PayablePay', max_digits=19, decimal_places=4, blank=True,
                                     null=True)  # Field name made lowercase.
    payfinished = models.CharField(db_column='PayFinished', max_length=1, blank=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True,
                                  null=True)  # Field name made lowercase.
    ems_number = models.CharField(db_column='EMS_Number', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True,
                                               null=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType', blank=True,
                                         null=True)  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    provconfirmintervaltime = models.IntegerField(db_column='ProvConfirmIntervalTime', blank=True,
                                                  null=True)  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID', blank=True, null=True)  # Field name made lowercase.
    sid = models.CharField(db_column='SID', max_length=100, blank=True)  # Field name made lowercase.
    ouid = models.CharField(db_column='OUID', max_length=100, blank=True)  # Field name made lowercase.
    manualflag = models.SmallIntegerField(db_column='ManualFlag', blank=True, null=True)  # Field name made lowercase.
    businessmgr = models.CharField(db_column='BusinessMgr', max_length=50, blank=True)  # Field name made lowercase.
    processstatus = models.IntegerField(db_column='ProcessStatus', blank=True, null=True)  # Field name made lowercase.
    personnum = models.IntegerField(db_column='PersonNum', blank=True, null=True)  # Field name made lowercase.
    salemode = models.IntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    oprationnote = models.CharField(db_column='OprationNote', max_length=5000, blank=True)  # Field name made lowercase.
    isgivettdcoupon = models.NullBooleanField(db_column='IsGiveTTDCoupon')  # Field name made lowercase.
    productsalemode = models.IntegerField(db_column='ProductSaleMode', blank=True,
                                          null=True)  # Field name made lowercase.
    orderpolicycode = models.SmallIntegerField(db_column='OrderPolicyCode', blank=True,
                                               null=True)  # Field name made lowercase.
    datacreate_lasttime = models.DateTimeField(db_column='DataCreate_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'v_DIY_Order'


class CommitOrder(models.Model):
    nid = models.AutoField(primary_key=True)
    masterorderid = models.BigIntegerField(db_column='MasterOrderID')  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status')  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0)  # Field name made lowercase.
    lastamount = models.DecimalField(db_column='LastAmount', max_digits=18,
                                     decimal_places=0)  # Field name made lowercase.
    masterorderinfo = models.CharField(db_column='MasterOrderInfo', max_length=2000,
                                       blank=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    salemode = models.SmallIntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    departurecity = models.IntegerField(db_column='DepartureCity', blank=True, null=True)  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    serverfromurl = models.CharField(db_column='ServerFromUrl', max_length=255,
                                     blank=True)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20, blank=True)  # Field name made lowercase.
    productid = models.IntegerField(db_column='ProductID', blank=True, null=True)  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    shoppingid = models.BigIntegerField(db_column='ShoppingID', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateTimeField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True,
                                               null=True)  # Field name made lowercase.
    newshoppingid = models.CharField(db_column='NewShoppingID', max_length=50, blank=True)  # Field name made lowercase.
    datacreate_lasttime = models.DateTimeField(db_column='DataCreate_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'v_DIY_Commit'


class BookingOrder(models.Model):
    nid = models.AutoField(primary_key=True)
    masterorderid = models.BigIntegerField(db_column='MasterOrderID')  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0, blank=True,
                                 null=True)  # Field name made lowercase.
    lastamount = models.DecimalField(db_column='LastAmount', max_digits=18, decimal_places=0, blank=True,
                                     null=True)  # Field name made lowercase.
    commitrq = models.CharField(db_column='CommitRQ', max_length=2000, blank=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    salemode = models.SmallIntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    departurecity = models.IntegerField(db_column='DepartureCity', blank=True, null=True)  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType', blank=True,
                                         null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20, blank=True)  # Field name made lowercase.
    productid = models.IntegerField(db_column='ProductID', blank=True, null=True)  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.CharField(db_column='EndDate', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True,
                                               null=True)  # Field name made lowercase.
    shoppingid = models.BigIntegerField(db_column='ShoppingID', blank=True, null=True)  # Field name made lowercase.
    newshoppingid = models.CharField(db_column='NewShoppingID', max_length=50, blank=True)  # Field name made lowercase.
    datacreate_lasttime = models.DateTimeField(db_column='DataCreate_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'v_DIY_Booking'


class predictedorders(models.Model):
    id = models.AutoField(primary_key=True)
    orderdate = models.DateField(blank=True, null=True)
    producttype = models.IntegerField(blank=True, null=True)
    value = models.IntegerField(blank=True, null=True)
    intervalTime = models.DateTimeField(blank=True, null=True)  # Field name made lowercase.

    def __str__(self):
        return self.value

    class Meta:
        managed = False
        db_table = 'predicted_orders'


class systemusers(models.Model):
    ip = models.CharField(max_length=50, blank=True, primary_key=True)  # Field name made lowercase.
    times = models.IntegerField(blank=True, null=True)
    first = models.DateTimeField(db_column='first_landing')  # Field name made lowercase.
    last = models.DateTimeField(db_column='last_landing')  # Field name made lowercase.

    def __str__(self):
        return self.ip

    class Meta:
        managed = False
        db_table = 'system_users'

class authusers(models.Model):
    id = models.AutoField(primary_key=True)  #序号
    username = models.CharField(db_column='username',max_length=100)  # 用户名
    insertdt = models.DateTimeField(db_column='insertdt')  # 插入时间

    def __str__(self):
        return self.id

    class Meta:
        managed = True
        db_table = 'authusers'
