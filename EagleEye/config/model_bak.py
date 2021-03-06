# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models

import sqlserver_ado


class BiTtdOrdPurchaseorder(models.Model):
    orderid = models.BigIntegerField(db_column='Orderid', blank=True, null=True)  # Field name made lowercase.
    costamount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'BI_Ttd_ord_purchaseorder'


class BuyoutfltModelReportDailyBak(models.Model):
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    item_set = models.CharField(max_length=2000, blank=True)
    dcity = models.CharField(db_column='Dcity', max_length=50, blank=True)  # Field name made lowercase.
    acity = models.CharField(db_column='Acity', max_length=50, blank=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(db_column='StockDate', blank=True, null=True)  # Field name made lowercase.
    minstaydays = models.IntegerField(db_column='MinStayDays', blank=True, null=True)  # Field name made lowercase.
    flight = models.TextField(blank=True)
    totalstores = models.IntegerField(db_column='totalStores', blank=True, null=True)  # Field name made lowercase.
    totalcumactualsales = models.IntegerField(db_column='TotalCumActualSales', blank=True, null=True)  # Field name made lowercase.
    actualsalecurve = models.DecimalField(db_column='ActualSaleCurve', max_digits=24, decimal_places=12, blank=True, null=True)  # Field name made lowercase.
    expectedsalecurve = models.FloatField(db_column='ExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    tip = models.CharField(max_length=13, blank=True)
    syncstatus = models.CharField(max_length=8, blank=True)
    isok = models.CharField(db_column='isOK', max_length=6)  # Field name made lowercase.
    persons = models.CharField(max_length=30, blank=True)
    insertdt = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'BuyOutFlt_Model_Report_Daily_Bak'


class Buyoutfltfareactualsalecurve(models.Model):
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    farename = models.CharField(db_column='FareName', max_length=500, blank=True)  # Field name made lowercase.
    enablestartdate = models.DateTimeField(db_column='EnableStartDate', blank=True, null=True)  # Field name made lowercase.
    minadvancedays = models.IntegerField(db_column='MinAdvanceDays', blank=True, null=True)  # Field name made lowercase.
    airline = models.CharField(db_column='Airline', max_length=200, blank=True)  # Field name made lowercase.
    dcitycode = models.CharField(db_column='DcityCode', max_length=10, blank=True)  # Field name made lowercase.
    acitycode = models.CharField(db_column='AcityCode', max_length=10, blank=True)  # Field name made lowercase.
    salepriceault = models.FloatField(db_column='SalePriceAult', blank=True, null=True)  # Field name made lowercase.
    pricingmechanism = models.CharField(db_column='PricingMechanism', max_length=1, blank=True)  # Field name made lowercase.
    pricingstrategy = models.IntegerField(db_column='PricingStrategy', blank=True, null=True)  # Field name made lowercase.
    totalstores = models.IntegerField(db_column='TotalStores', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(blank=True, null=True)
    orderdate = models.DateField(blank=True, null=True)
    actualsales = models.IntegerField(db_column='ActualSales', blank=True, null=True)  # Field name made lowercase.
    cumactualsales = models.IntegerField(db_column='CumActualSales', blank=True, null=True)  # Field name made lowercase.
    actualsalecurve = models.FloatField(db_column='ActualSaleCurve', blank=True, null=True)  # Field name made lowercase.
    expectedsalecurve = models.FloatField(db_column='ExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totairlinepersonssubmit = models.IntegerField(db_column='totAirlinePersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    airlineexpectedsalecurve = models.FloatField(db_column='AirlineExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totcitypersonssubmit = models.IntegerField(db_column='totCityPersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    cityexpectedsalecurve = models.FloatField(db_column='CityExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    note = models.CharField(db_column='Note', max_length=1000, blank=True)  # Field name made lowercase.
    insertdate = models.DateTimeField(db_column='InsertDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'BuyoutFltFareActualSaleCurve'


class BuyoutfltfaresalecurveTwochannel(models.Model):
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    farename = models.CharField(db_column='FareName', max_length=500, blank=True)  # Field name made lowercase.
    airline = models.CharField(db_column='Airline', max_length=200, blank=True)  # Field name made lowercase.
    dcitycode = models.CharField(db_column='DcityCode', max_length=10, blank=True)  # Field name made lowercase.
    acitycode = models.CharField(db_column='AcityCode', max_length=10, blank=True)  # Field name made lowercase.
    enablestartdate = models.DateTimeField(db_column='EnableStartDate', blank=True, null=True)  # Field name made lowercase.
    minadvancedays = models.IntegerField(db_column='MinAdvanceDays', blank=True, null=True)  # Field name made lowercase.
    pricingmechanism = models.CharField(db_column='PricingMechanism', max_length=1, blank=True)  # Field name made lowercase.
    pricingstrategy = models.IntegerField(db_column='PricingStrategy', blank=True, null=True)  # Field name made lowercase.
    totalstores = models.IntegerField(db_column='TotalStores', blank=True, null=True)  # Field name made lowercase.
    itemtotalstores = models.IntegerField(db_column='ItemtotalStores', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(blank=True, null=True)
    orderdate = models.DateField(blank=True, null=True)
    actualsales = models.IntegerField(db_column='ActualSales', blank=True, null=True)  # Field name made lowercase.
    cumactualsales = models.IntegerField(db_column='CumActualSales', blank=True, null=True)  # Field name made lowercase.
    actualsalecurve = models.FloatField(db_column='ActualSaleCurve', blank=True, null=True)  # Field name made lowercase.
    actualitemsales = models.IntegerField(db_column='ActualItemSales', blank=True, null=True)  # Field name made lowercase.
    cumactualitemsales = models.IntegerField(db_column='CumActualItemSales', blank=True, null=True)  # Field name made lowercase.
    expectedsalecurve = models.FloatField(db_column='ExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totairlinepersonssubmit = models.IntegerField(db_column='totAirlinePersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    airlineexpectedsalecurve = models.FloatField(db_column='AirlineExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totcitypersonssubmit = models.IntegerField(db_column='totCityPersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    cityexpectedsalecurve = models.FloatField(db_column='CityExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    note = models.CharField(db_column='Note', max_length=1000, blank=True)  # Field name made lowercase.
    insertdate = models.DateTimeField(db_column='InsertDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'BuyoutFltFareSaleCurve_TwoChannel'


class BuyoutfltfaresalecurveTwochannelFinal(models.Model):
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    farename = models.CharField(db_column='FareName', max_length=500, blank=True)  # Field name made lowercase.
    enablestartdate = models.DateTimeField(db_column='EnableStartDate', blank=True, null=True)  # Field name made lowercase.
    minadvancedays = models.IntegerField(db_column='MinAdvanceDays', blank=True, null=True)  # Field name made lowercase.
    airline = models.CharField(db_column='Airline', max_length=200, blank=True)  # Field name made lowercase.
    dcitycode = models.CharField(db_column='DcityCode', max_length=10, blank=True)  # Field name made lowercase.
    acitycode = models.CharField(db_column='Acitycode', max_length=10, blank=True)  # Field name made lowercase.
    pricingmechanism = models.CharField(db_column='PricingMechanism', max_length=1, blank=True)  # Field name made lowercase.
    pricingstrategy = models.IntegerField(db_column='PricingStrategy', blank=True, null=True)  # Field name made lowercase.
    totalstores = models.IntegerField(db_column='TotalStores', blank=True, null=True)  # Field name made lowercase.
    itemtotalstores = models.IntegerField(db_column='ItemtotalStores', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(db_column='StockDate', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    actualsales = models.IntegerField(db_column='ActualSales', blank=True, null=True)  # Field name made lowercase.
    cumactualsales = models.IntegerField(db_column='CumActualSales', blank=True, null=True)  # Field name made lowercase.
    actualsalecurve = models.FloatField(db_column='ActualSaleCurve', blank=True, null=True)  # Field name made lowercase.
    actualitemsales = models.IntegerField(db_column='ActualItemSales', blank=True, null=True)  # Field name made lowercase.
    cumactualitemsales = models.IntegerField(db_column='CumActualItemSales', blank=True, null=True)  # Field name made lowercase.
    ahead = models.IntegerField(blank=True, null=True)
    expectedsalecurve = models.FloatField(db_column='ExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totairlinepersonssubmit = models.IntegerField(db_column='totAirlinePersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    airlineexpectedsalecurve = models.FloatField(db_column='AirlineExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totcitypersonssubmit = models.IntegerField(db_column='totCityPersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    cityexpectedsalecurve = models.FloatField(db_column='CityExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    insertdate = models.DateTimeField(db_column='InsertDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'BuyoutFltFareSaleCurve_TwoChannel_Final'


class DiyChangedOrders(models.Model):
    logid = models.IntegerField(db_column='LogID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    operatedt = models.DateTimeField(db_column='OperateDT', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_CHANGED_ORDERS'


class DiyChangedOrdersNew(models.Model):
    logid = models.IntegerField(db_column='LogID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    operatedt = models.DateTimeField(db_column='OperateDT', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_CHANGED_ORDERS_NEW'


class DiyContactperson(models.Model):
    diy_contactpersonid = models.IntegerField(db_column='DIY_ContactPersonID')  # Field name made lowercase.
    diy_orderid = models.IntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    personname = models.CharField(db_column='PersonName', max_length=50)  # Field name made lowercase.
    mobile = models.CharField(db_column='Mobile', max_length=50)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=50, blank=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=100, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_ContactPerson'


class DiyDelivery(models.Model):
    diy_deliveryid = models.IntegerField(db_column='DIY_DeliveryID')  # Field name made lowercase.
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID', blank=True, null=True)  # Field name made lowercase.
    deliverytype = models.IntegerField(db_column='DeliveryType', blank=True, null=True)  # Field name made lowercase.
    receivername = models.CharField(db_column='ReceiverName', max_length=50, blank=True)  # Field name made lowercase.
    contacttel = models.CharField(db_column='ContactTel', max_length=100, blank=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=200, blank=True)  # Field name made lowercase.
    cityname = models.CharField(db_column='CityName', max_length=100, blank=True)  # Field name made lowercase.
    postcode = models.CharField(db_column='PostCode', max_length=20, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_Delivery'


class DiyInvoices(models.Model):
    diy_invoicesid = models.IntegerField(db_column='DIY_InvoicesID')  # Field name made lowercase.
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    invinfoid = models.IntegerField(db_column='InvInfoID', blank=True, null=True)  # Field name made lowercase.
    invoicecity = models.CharField(db_column='InvoiceCity', max_length=100, blank=True)  # Field name made lowercase.
    invoiceno = models.CharField(db_column='InvoiceNO', max_length=100, blank=True)  # Field name made lowercase.
    invoicetype = models.CharField(db_column='InvoiceType', max_length=1, blank=True)  # Field name made lowercase.
    title = models.CharField(db_column='Title', max_length=100, blank=True)  # Field name made lowercase.
    content = models.CharField(db_column='Content', max_length=100, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    isinforminvoice = models.CharField(db_column='IsInformInvoice', max_length=1, blank=True)  # Field name made lowercase.
    informdate = models.DateTimeField(db_column='InformDate', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='Eid', max_length=100, blank=True)  # Field name made lowercase.
    transtype = models.CharField(db_column='TransType', max_length=1, blank=True)  # Field name made lowercase.
    isinvoiced = models.CharField(db_column='IsInvoiced', max_length=1, blank=True)  # Field name made lowercase.
    mergerdiy_orderid = models.IntegerField(db_column='MergerDIY_OrderID', blank=True, null=True)  # Field name made lowercase.
    cancelflag = models.CharField(db_column='CancelFlag', max_length=1, blank=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=1, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_Invoices'


class DiyOrder(models.Model):
    diy_orderid = models.IntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    packageid = models.IntegerField(db_column='PackageID', blank=True, null=True)  # Field name made lowercase.
    packagetitle = models.CharField(db_column='PackageTitle', max_length=200, blank=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    priceadjust = models.DecimalField(db_column='PriceAdjust', max_digits=19, decimal_places=4)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate')  # Field name made lowercase.
    diy_startdate = models.DateTimeField(db_column='DIY_StartDate')  # Field name made lowercase.
    diy_enddate = models.DateTimeField(db_column='DIY_EndDate')  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20)  # Field name made lowercase.
    ctripcardno = models.CharField(db_column='CtripCardNo', max_length=20)  # Field name made lowercase.
    status = models.IntegerField(db_column='Status')  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl')  # Field name made lowercase.
    journeytype = models.SmallIntegerField(db_column='JourneyType')  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType')  # Field name made lowercase.
    bookrq = models.TextField(db_column='BookRQ', blank=True)  # Field name made lowercase. This field type is a guess.
    bookrs = models.TextField(db_column='BookRS', blank=True)  # Field name made lowercase. This field type is a guess.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=100)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade')  # Field name made lowercase.
    isonline = models.BooleanField(db_column='IsOnline')  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity')  # Field name made lowercase.
    processoper = models.CharField(db_column='ProcessOper', max_length=20, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=400, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    confirmclienttime = models.DateTimeField(db_column='ConfirmClientTime')  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=19, decimal_places=4)  # Field name made lowercase.
    emoney = models.DecimalField(db_column='EMoney', max_digits=19, decimal_places=4)  # Field name made lowercase.
    payablepay = models.DecimalField(db_column='PayablePay', max_digits=19, decimal_places=4)  # Field name made lowercase.
    payfinished = models.CharField(db_column='PayFinished', max_length=1, blank=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4)  # Field name made lowercase.
    ems_number = models.CharField(db_column='EMS_Number', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType')  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity')  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity')  # Field name made lowercase.
    provconfirmintervaltime = models.IntegerField(db_column='ProvConfirmIntervalTime')  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID')  # Field name made lowercase.
    sid = models.CharField(db_column='SID', max_length=100, blank=True)  # Field name made lowercase.
    ouid = models.CharField(db_column='OUID', max_length=100, blank=True)  # Field name made lowercase.
    manualflag = models.SmallIntegerField(db_column='ManualFlag')  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    personnum = models.IntegerField(db_column='PersonNum', blank=True, null=True)  # Field name made lowercase.
    salemode = models.IntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_Order'


class DiyOrderintegralgiftcards(models.Model):
    diy_integralgiftcardsid = models.BigIntegerField(db_column='DIY_IntegralGiftCardsID')  # Field name made lowercase.
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID', blank=True, null=True)  # Field name made lowercase.
    integralgiftcardstype = models.IntegerField(db_column='IntegralGiftCardsType', blank=True, null=True)  # Field name made lowercase.
    optiontype = models.IntegerField(db_column='OptionType', blank=True, null=True)  # Field name made lowercase.
    amount = models.IntegerField(db_column='Amount', blank=True, null=True)  # Field name made lowercase.
    department = models.IntegerField(db_column='Department', blank=True, null=True)  # Field name made lowercase.
    reason = models.IntegerField(db_column='Reason', blank=True, null=True)  # Field name made lowercase.
    otherreason = models.CharField(db_column='OtherReason', max_length=50, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    integralgiftcardsstatus = models.IntegerField(db_column='IntegralGiftCardsStatus', blank=True, null=True)  # Field name made lowercase.
    optiontime = models.DateTimeField(db_column='OptionTime', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_OrderIntegralGiftCards'


class DiyOrderRealtime(models.Model):
    nid = sqlserver_ado.fields.BigAutoField(primary_key=True)
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID', blank=True, null=True)  # Field name made lowercase.
    packageid = models.IntegerField(db_column='PackageID', blank=True, null=True)  # Field name made lowercase.
    packagetitle = models.CharField(db_column='PackageTitle', max_length=200, blank=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    priceadjust = models.DecimalField(db_column='PriceAdjust', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
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
    confirmclienttime = models.DateTimeField(db_column='ConfirmClientTime', blank=True, null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    emoney = models.DecimalField(db_column='EMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payablepay = models.DecimalField(db_column='PayablePay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payfinished = models.CharField(db_column='PayFinished', max_length=1, blank=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ems_number = models.CharField(db_column='EMS_Number', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType', blank=True, null=True)  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    provconfirmintervaltime = models.IntegerField(db_column='ProvConfirmIntervalTime', blank=True, null=True)  # Field name made lowercase.
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
    productsalemode = models.IntegerField(db_column='ProductSaleMode', blank=True, null=True)  # Field name made lowercase.
    orderpolicycode = models.SmallIntegerField(db_column='OrderPolicyCode', blank=True, null=True)  # Field name made lowercase.
    datacreate_lasttime = models.DateTimeField(db_column='DataCreate_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_Order_RealTime'


class DiyPassengers(models.Model):
    diy_passengersid = models.IntegerField(db_column='DIY_PassengersID')  # Field name made lowercase.
    diy_orderid = models.IntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    rph = models.IntegerField(db_column='RPH')  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=100, blank=True)  # Field name made lowercase.
    name_e = models.CharField(db_column='Name_E', max_length=100, blank=True)  # Field name made lowercase.
    sex = models.SmallIntegerField(db_column='Sex', blank=True, null=True)  # Field name made lowercase.
    passengertype = models.SmallIntegerField(db_column='PassengerType', blank=True, null=True)  # Field name made lowercase.
    certificate = models.SmallIntegerField(db_column='Certificate', blank=True, null=True)  # Field name made lowercase.
    certificateno = models.CharField(db_column='CertificateNo', max_length=50, blank=True)  # Field name made lowercase.
    birthdate = models.DateTimeField(db_column='BirthDate', blank=True, null=True)  # Field name made lowercase.
    expiredate = models.DateTimeField(db_column='ExpireDate', blank=True, null=True)  # Field name made lowercase.
    nationnality = models.CharField(db_column='Nationnality', max_length=100, blank=True)  # Field name made lowercase.
    mobile = models.CharField(db_column='Mobile', max_length=50, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=200, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_Passengers'


class DiyPaymentinfo(models.Model):
    diy_paymentinfoid = models.IntegerField(db_column='DIY_PaymentInfoID')  # Field name made lowercase.
    diy_orderid = models.IntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    diy_suborderid = models.IntegerField(db_column='DIY_SubOrderID')  # Field name made lowercase.
    subordertype = models.IntegerField(db_column='SubOrderType')  # Field name made lowercase.
    paytype = models.IntegerField(db_column='PayType')  # Field name made lowercase.
    sendstatus = models.IntegerField(db_column='SendStatus')  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=500, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    paycategory = models.IntegerField(db_column='PayCategory')  # Field name made lowercase.
    lastnotifytime = models.DateTimeField(db_column='LastNotifyTime', blank=True, null=True)  # Field name made lowercase.
    lastnotifyxml = models.TextField(db_column='LastNotifyXML', blank=True)  # Field name made lowercase. This field type is a guess.
    lastsendrequestxml = models.TextField(db_column='LastSendRequestXML', blank=True)  # Field name made lowercase. This field type is a guess.
    requesttime = models.DateTimeField(db_column='RequestTime', blank=True, null=True)  # Field name made lowercase.
    responsetime = models.DateTimeField(db_column='ResponseTime', blank=True, null=True)  # Field name made lowercase.
    payableamount = models.DecimalField(db_column='PayableAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    billno = models.BigIntegerField(db_column='BillNo')  # Field name made lowercase.
    referenceno = models.CharField(db_column='ReferenceNo', max_length=50)  # Field name made lowercase.
    billitemno = models.BigIntegerField(db_column='BillItemNo')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DIY_PaymentInfo'


class DiyRealtimePageviewMonitor(models.Model):
    page_id = models.IntegerField()
    pv = models.IntegerField()
    uv = models.IntegerField()
    d = models.DateField()
    last_opt_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'DIY_RealTime_PageView_Monitor'


class Dimfareflttotalstock(models.Model):
    fareid = models.IntegerField(blank=True, null=True)
    stockdate = models.DateField(blank=True, null=True)
    totalstore = models.IntegerField(blank=True, null=True)
    groupstore = models.IntegerField(blank=True, null=True)
    policycode = models.CharField(max_length=200, blank=True)
    pricingmechanism = models.CharField(max_length=10, blank=True)
    pricingstrategy = models.IntegerField(blank=True, null=True)
    flightinfo = models.CharField(max_length=2000, blank=True)
    itemtotalstores = models.IntegerField(blank=True, null=True)
    itemusedstores = models.IntegerField(blank=True, null=True)
    item_set = models.CharField(max_length=2000, blank=True)
    insertdate = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'DimFareFltTotalStock'


class DimticketpurchaseDestDistrictmapping(models.Model):
    dmid = models.AutoField(db_column='DMID')  # Field name made lowercase.
    cityid = models.IntegerField(db_column='CityID', blank=True, null=True)  # Field name made lowercase.
    citycode = models.CharField(db_column='CityCode', max_length=200, blank=True)  # Field name made lowercase.
    cityname = models.CharField(db_column='CityName', max_length=200, blank=True)  # Field name made lowercase.
    province = models.CharField(max_length=200, blank=True)
    country = models.CharField(max_length=200, blank=True)
    corpname = models.CharField(db_column='CorpName', max_length=200, blank=True)  # Field name made lowercase.
    district = models.CharField(db_column='District', max_length=50, blank=True)  # Field name made lowercase.
    createtime = models.DateTimeField(db_column='CreateTime')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.
    diyarea = models.CharField(db_column='DIYArea', max_length=200, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DimTicketPurchase_Dest_DistrictMapping'


class DimticketpurchaseStartDistrictmapping(models.Model):
    dmid = models.AutoField(db_column='DMID')  # Field name made lowercase.
    cityid = models.IntegerField(db_column='CityID', blank=True, null=True)  # Field name made lowercase.
    citycode = models.CharField(db_column='CityCode', max_length=200, blank=True)  # Field name made lowercase.
    cityname = models.CharField(db_column='CityName', max_length=200, blank=True)  # Field name made lowercase.
    province = models.CharField(max_length=200, blank=True)
    country = models.CharField(max_length=200, blank=True)
    corpname = models.CharField(db_column='CorpName', max_length=200, blank=True)  # Field name made lowercase.
    district = models.CharField(db_column='District', max_length=50, blank=True)  # Field name made lowercase.
    createtime = models.DateTimeField(db_column='CreateTime')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DimTicketPurchase_Start_DistrictMapping'


class DimticketpurchaseExamine(models.Model):
    startcity = models.CharField(db_column='startCity', max_length=64, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='destCity', max_length=64, blank=True)  # Field name made lowercase.
    flight = models.CharField(db_column='Flight', max_length=16, blank=True)  # Field name made lowercase.
    examinetype = models.CharField(db_column='examineType', max_length=8, blank=True)  # Field name made lowercase.
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'DimTicketPurchase_examine'


class DiyFhPageview(models.Model):
    d = models.CharField(max_length=10)
    pageid = models.IntegerField()
    uv = models.IntegerField(db_column='UV', blank=True, null=True)  # Field name made lowercase.
    pv = models.IntegerField(db_column='PV', blank=True, null=True)  # Field name made lowercase.
    ordnum = models.IntegerField(db_column='OrdNum', blank=True, null=True)  # Field name made lowercase.
    ruleid = models.IntegerField(db_column='Ruleid')  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)
    c_type = models.CharField(db_column='C_type', max_length=10, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Diy_FH_PageView'


class DiyFhPageview002(models.Model):
    d = models.CharField(max_length=20, blank=True)
    pageid = models.CharField(max_length=20, blank=True)
    pv = models.IntegerField(blank=True, null=True)
    uv = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Diy_FH_PageView_002'


class FactdiyOperatelogAuto(models.Model):
    diy_operatelogid = models.IntegerField(db_column='DIY_OperateLogID')  # Field name made lowercase.
    diy_orderid = models.IntegerField(db_column='DIY_OrderId', blank=True, null=True)  # Field name made lowercase.
    logtype = models.IntegerField(db_column='LogType', blank=True, null=True)  # Field name made lowercase.
    suborderid = models.IntegerField(db_column='Suborderid', blank=True, null=True)  # Field name made lowercase.
    subordertype = models.CharField(db_column='Subordertype', max_length=1, blank=True)  # Field name made lowercase.
    operatetime = models.DateTimeField(db_column='Operatetime', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='Eid', max_length=20, blank=True)  # Field name made lowercase.
    actiontype = models.CharField(db_column='Actiontype', max_length=20, blank=True)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=2000, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=2000, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    errormsg = models.CharField(db_column='ErrorMsg', max_length=500, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FACTDIY_OperateLog_AUTO'


class FactdiyOperatelogAutoRobot(models.Model):
    diy_operatelogid = models.IntegerField(db_column='DIY_OperateLogID')  # Field name made lowercase.
    diy_orderid = models.IntegerField(db_column='DIY_OrderId', blank=True, null=True)  # Field name made lowercase.
    logtype = models.IntegerField(db_column='LogType', blank=True, null=True)  # Field name made lowercase.
    suborderid = models.IntegerField(db_column='Suborderid', blank=True, null=True)  # Field name made lowercase.
    subordertype = models.CharField(db_column='Subordertype', max_length=1, blank=True)  # Field name made lowercase.
    operatetime = models.DateTimeField(db_column='Operatetime', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='Eid', max_length=20, blank=True)  # Field name made lowercase.
    actiontype = models.CharField(db_column='Actiontype', max_length=20, blank=True)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=2000, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=2000, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FACTDIY_OperateLog_AUTO_ROBOT'


class Factbookfail(models.Model):
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    producttype = models.CharField(db_column='productType', max_length=10, blank=True)  # Field name made lowercase.
    channel = models.CharField(max_length=10, blank=True)
    totalbook = models.IntegerField(db_column='totalBook', blank=True, null=True)  # Field name made lowercase.
    failbook = models.IntegerField(db_column='failBook', blank=True, null=True)  # Field name made lowercase.
    flight_fail = models.IntegerField(blank=True, null=True)
    hotel_fail = models.IntegerField(db_column='Hotel_fail', blank=True, null=True)  # Field name made lowercase.
    other_fail = models.IntegerField(blank=True, null=True)
    repeat_user = models.IntegerField(blank=True, null=True)
    repeat_num = models.IntegerField(blank=True, null=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactBookFail'


class Factdiybill(models.Model):
    billid = models.IntegerField(db_column='BillID')  # Field name made lowercase.
    billno = models.BigIntegerField(db_column='BillNo', blank=True, null=True)  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    dealstatus = models.IntegerField(db_column='DealStatus', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=200, blank=True)  # Field name made lowercase.
    gatheringtype = models.CharField(db_column='GatheringType', max_length=1, blank=True)  # Field name made lowercase.
    pathtype = models.CharField(db_column='PathType', max_length=10, blank=True)  # Field name made lowercase.
    willcancel = models.CharField(db_column='WillCancel', max_length=1, blank=True)  # Field name made lowercase.
    referenceno = models.CharField(db_column='ReferenceNo', max_length=50, blank=True)  # Field name made lowercase.
    merchantid = models.IntegerField(db_column='MerchantID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    returnamount = models.DecimalField(db_column='ReturnAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    exchangerate = models.DecimalField(db_column='ExchangeRate', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=20, blank=True)  # Field name made lowercase.
    paymentuid = models.CharField(db_column='PaymentUid', max_length=20, blank=True)  # Field name made lowercase.
    lastnotifytime = models.DateTimeField(db_column='LastNotifyTime', blank=True, null=True)  # Field name made lowercase.
    requesttime = models.DateTimeField(db_column='RequestTime', blank=True, null=True)  # Field name made lowercase.
    responsetime = models.DateTimeField(db_column='ResponseTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    oldbillno = models.BigIntegerField(db_column='OldBillNo', blank=True, null=True)  # Field name made lowercase.
    modifyccardbillno = models.BigIntegerField(db_column='ModifyCCardBillNO', blank=True, null=True)  # Field name made lowercase.
    isprocessing = models.NullBooleanField(db_column='IsProcessing')  # Field name made lowercase.
    paydeadline = models.DateTimeField(db_column='PayDeadLine', blank=True, null=True)  # Field name made lowercase.
    isenabled = models.NullBooleanField(db_column='IsEnabled')  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactDIYBill'


class Factdiybillitem(models.Model):
    billitemid = models.IntegerField(db_column='BillItemID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    billitemno = models.BigIntegerField(db_column='BillItemNo', blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=200, blank=True)  # Field name made lowercase.
    billno = models.BigIntegerField(db_column='BillNo', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=50, blank=True)  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=50, blank=True)  # Field name made lowercase.
    returnamount = models.DecimalField(db_column='ReturnAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    oldbillitemno = models.BigIntegerField(db_column='OldBillItemNo', blank=True, null=True)  # Field name made lowercase.
    payingamount = models.DecimalField(db_column='PayingAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    paidamount = models.DecimalField(db_column='PaidAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    exchangerate = models.DecimalField(db_column='ExchangeRate', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=20, blank=True)  # Field name made lowercase.
    paymentwayid = models.CharField(db_column='PaymentWayID', max_length=50, blank=True)  # Field name made lowercase.
    rmbrealamount = models.DecimalField(db_column='RMBRealAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    realamount = models.DecimalField(db_column='RealAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    dealstatus = models.IntegerField(db_column='DealStatus', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactDIYBillItem'


class Factdiyorder(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    packageid = models.IntegerField(db_column='PackageID', blank=True, null=True)  # Field name made lowercase.
    packagetitle = models.CharField(db_column='PackageTitle', max_length=200, blank=True)  # Field name made lowercase.
    userid = models.CharField(db_column='UserID', max_length=20, blank=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    statuscode = models.IntegerField(db_column='StatusCode', blank=True, null=True)  # Field name made lowercase.
    statusname = models.CharField(db_column='StatusName', max_length=50, blank=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    priceadjust = models.DecimalField(db_column='PriceAdjust', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    journeytype = models.SmallIntegerField(db_column='JourneyType', blank=True, null=True)  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    startdatekey = models.IntegerField(db_column='StartDateKey', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateTimeField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    enddatekey = models.IntegerField(db_column='EndDateKey', blank=True, null=True)  # Field name made lowercase.
    headcnt = models.IntegerField(db_column='HeadCnt', blank=True, null=True)  # Field name made lowercase.
    adultcnt = models.IntegerField(db_column='AdultCnt', blank=True, null=True)  # Field name made lowercase.
    childcnt = models.IntegerField(db_column='ChildCnt', blank=True, null=True)  # Field name made lowercase.
    babycnt = models.IntegerField(db_column='BabyCnt', blank=True, null=True)  # Field name made lowercase.
    malecnt = models.IntegerField(db_column='MaleCnt', blank=True, null=True)  # Field name made lowercase.
    femalecnt = models.IntegerField(db_column='FemaleCnt', blank=True, null=True)  # Field name made lowercase.
    addordropcnt = models.IntegerField(db_column='AddOrDropCnt', blank=True, null=True)  # Field name made lowercase.
    actualtravers = models.IntegerField(db_column='ActualTravers', blank=True, null=True)  # Field name made lowercase.
    payablepay = models.DecimalField(db_column='PayablePay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    emoney = models.DecimalField(db_column='EMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payfinished = models.NullBooleanField(db_column='PayFinished')  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    profit = models.DecimalField(db_column='Profit', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    grossprofit = models.DecimalField(db_column='GrossProfit', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    grossprofitrate = models.DecimalField(db_column='GrossProfitRate', max_digits=4, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cclienttime = models.DateTimeField(db_column='CClientTime', blank=True, null=True)  # Field name made lowercase.
    cprovidertime = models.IntegerField(db_column='CProviderTime', blank=True, null=True)  # Field name made lowercase.
    isintl = models.NullBooleanField(db_column='IsIntl')  # Field name made lowercase.
    isonline = models.NullBooleanField(db_column='IsOnline')  # Field name made lowercase.
    manualflag = models.SmallIntegerField(db_column='ManualFlag', blank=True, null=True)  # Field name made lowercase.
    processoper = models.CharField(db_column='ProcessOper', max_length=20, blank=True)  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID', blank=True, null=True)  # Field name made lowercase.
    sid = models.CharField(db_column='SID', max_length=100, blank=True)  # Field name made lowercase.
    ouid = models.CharField(db_column='OUID', max_length=100, blank=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType', blank=True, null=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=100, blank=True)  # Field name made lowercase.
    invoicecity = models.CharField(db_column='InvoiceCity', max_length=100, blank=True)  # Field name made lowercase.
    contactpersonid = models.IntegerField(db_column='ContactPersonID', blank=True, null=True)  # Field name made lowercase.
    personname = models.CharField(db_column='PersonName', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    timestamp = models.TextField(db_column='TimeStamp', blank=True)  # Field name made lowercase. This field type is a guess.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    ems_no = models.CharField(db_column='EMS_NO', max_length=50, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=400, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    pkgregion = models.CharField(db_column='PkgRegion', max_length=50, blank=True)  # Field name made lowercase.
    personnum = models.IntegerField(db_column='PersonNum', blank=True, null=True)  # Field name made lowercase.
    personmobile = models.CharField(db_column='PersonMobile', max_length=50, blank=True)  # Field name made lowercase.
    personemail = models.CharField(db_column='PersonEmail', max_length=100, blank=True)  # Field name made lowercase.
    tmporderid = models.IntegerField(db_column='TmpOrderID', blank=True, null=True)  # Field name made lowercase.
    custid = models.IntegerField(db_column='CUSTID', blank=True, null=True)  # Field name made lowercase.
    subpaysystem = models.IntegerField(db_column='SubPaySystem', blank=True, null=True)  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=50, blank=True)  # Field name made lowercase.
    salemode = models.IntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactDIYOrder'


class FactdiyorderNew(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    packageid = models.IntegerField(db_column='PackageID', blank=True, null=True)  # Field name made lowercase.
    packagetitle = models.CharField(db_column='PackageTitle', max_length=200, blank=True)  # Field name made lowercase.
    userid = models.CharField(db_column='UserID', max_length=20, blank=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    statuscode = models.IntegerField(db_column='StatusCode', blank=True, null=True)  # Field name made lowercase.
    statusname = models.CharField(db_column='StatusName', max_length=50, blank=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    priceadjust = models.DecimalField(db_column='PriceAdjust', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    journeytype = models.SmallIntegerField(db_column='JourneyType', blank=True, null=True)  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    startdatekey = models.IntegerField(db_column='StartDateKey', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateTimeField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    enddatekey = models.IntegerField(db_column='EndDateKey', blank=True, null=True)  # Field name made lowercase.
    headcnt = models.IntegerField(db_column='HeadCnt', blank=True, null=True)  # Field name made lowercase.
    adultcnt = models.IntegerField(db_column='AdultCnt', blank=True, null=True)  # Field name made lowercase.
    childcnt = models.IntegerField(db_column='ChildCnt', blank=True, null=True)  # Field name made lowercase.
    babycnt = models.IntegerField(db_column='BabyCnt', blank=True, null=True)  # Field name made lowercase.
    malecnt = models.IntegerField(db_column='MaleCnt', blank=True, null=True)  # Field name made lowercase.
    femalecnt = models.IntegerField(db_column='FemaleCnt', blank=True, null=True)  # Field name made lowercase.
    addordropcnt = models.IntegerField(db_column='AddOrDropCnt', blank=True, null=True)  # Field name made lowercase.
    actualtravers = models.IntegerField(db_column='ActualTravers', blank=True, null=True)  # Field name made lowercase.
    payablepay = models.DecimalField(db_column='PayablePay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    emoney = models.DecimalField(db_column='EMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payfinished = models.NullBooleanField(db_column='PayFinished')  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    profit = models.DecimalField(db_column='Profit', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    grossprofit = models.DecimalField(db_column='GrossProfit', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    grossprofitrate = models.DecimalField(db_column='GrossProfitRate', max_digits=4, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cclienttime = models.DateTimeField(db_column='CClientTime', blank=True, null=True)  # Field name made lowercase.
    cprovidertime = models.IntegerField(db_column='CProviderTime', blank=True, null=True)  # Field name made lowercase.
    isintl = models.NullBooleanField(db_column='IsIntl')  # Field name made lowercase.
    isonline = models.NullBooleanField(db_column='IsOnline')  # Field name made lowercase.
    manualflag = models.SmallIntegerField(db_column='ManualFlag', blank=True, null=True)  # Field name made lowercase.
    processoper = models.CharField(db_column='ProcessOper', max_length=20, blank=True)  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID', blank=True, null=True)  # Field name made lowercase.
    sid = models.CharField(db_column='SID', max_length=100, blank=True)  # Field name made lowercase.
    ouid = models.CharField(db_column='OUID', max_length=100, blank=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType', blank=True, null=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=100, blank=True)  # Field name made lowercase.
    invoicecity = models.CharField(db_column='InvoiceCity', max_length=100, blank=True)  # Field name made lowercase.
    contactpersonid = models.IntegerField(db_column='ContactPersonID', blank=True, null=True)  # Field name made lowercase.
    personname = models.CharField(db_column='PersonName', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    timestamp = models.TextField(db_column='TimeStamp', blank=True)  # Field name made lowercase. This field type is a guess.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    ems_no = models.CharField(db_column='EMS_NO', max_length=50, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=400, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    pkgregion = models.CharField(db_column='PkgRegion', max_length=50, blank=True)  # Field name made lowercase.
    personnum = models.IntegerField(db_column='PersonNum', blank=True, null=True)  # Field name made lowercase.
    personmobile = models.CharField(db_column='PersonMobile', max_length=50, blank=True)  # Field name made lowercase.
    personemail = models.CharField(db_column='PersonEmail', max_length=100, blank=True)  # Field name made lowercase.
    tmporderid = models.IntegerField(db_column='TmpOrderID', blank=True, null=True)  # Field name made lowercase.
    custid = models.IntegerField(db_column='CUSTID', blank=True, null=True)  # Field name made lowercase.
    subpaysystem = models.IntegerField(db_column='SubPaySystem', blank=True, null=True)  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=50, blank=True)  # Field name made lowercase.
    salemode = models.IntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactDIYOrder_new'


class Factdiypriceadjustment(models.Model):
    priceadjustmentid = models.IntegerField(db_column='PriceAdjustmentID')  # Field name made lowercase.
    orderid = models.BigIntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    payrefund = models.DecimalField(db_column='PayRefund', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    adjustmenttype = models.IntegerField(db_column='AdjustmentType', blank=True, null=True)  # Field name made lowercase.
    auditstatus = models.IntegerField(db_column='AuditStatus', blank=True, null=True)  # Field name made lowercase.
    audittime = models.DateTimeField(db_column='AuditTime', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=500, blank=True)  # Field name made lowercase.
    paystatus = models.IntegerField(db_column='PayStatus', blank=True, null=True)  # Field name made lowercase.
    realamount = models.DecimalField(db_column='RealAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactDIYPriceAdjustment'


class FactdiyCouponsinfo(models.Model):
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    couponcode = models.CharField(db_column='CouponCode', max_length=200)  # Field name made lowercase.
    transactionid = models.BigIntegerField(db_column='TransactionID')  # Field name made lowercase.
    couponamount = models.DecimalField(db_column='CouponAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    outfee = models.DecimalField(db_column='OutFee', max_digits=19, decimal_places=4)  # Field name made lowercase.
    inerfee = models.DecimalField(db_column='InerFee', max_digits=19, decimal_places=4)  # Field name made lowercase.
    profitsagainst = models.DecimalField(db_column='ProfitsAgainst', max_digits=19, decimal_places=4)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4)  # Field name made lowercase.
    couponstatus = models.IntegerField(db_column='CouponStatus')  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.
    promotionid = models.IntegerField(db_column='PromotionID')  # Field name made lowercase.
    displayname = models.CharField(db_column='DisplayName', max_length=200)  # Field name made lowercase.
    rulegroupid = models.BigIntegerField(db_column='RuleGroupID')  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)
    updatedt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactDIY_CouponsInfo'


class FactdiyCouponsinfoNew(models.Model):
    diy_orderid = models.BigIntegerField(db_column='DIY_OrderID')  # Field name made lowercase.
    couponcode = models.CharField(db_column='CouponCode', max_length=200)  # Field name made lowercase.
    transactionid = models.BigIntegerField(db_column='TransactionID')  # Field name made lowercase.
    couponamount = models.DecimalField(db_column='CouponAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    outfee = models.DecimalField(db_column='OutFee', max_digits=19, decimal_places=4)  # Field name made lowercase.
    inerfee = models.DecimalField(db_column='InerFee', max_digits=19, decimal_places=4)  # Field name made lowercase.
    profitsagainst = models.DecimalField(db_column='ProfitsAgainst', max_digits=19, decimal_places=4)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4)  # Field name made lowercase.
    couponstatus = models.IntegerField(db_column='CouponStatus')  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.
    promotionid = models.IntegerField(db_column='PromotionID')  # Field name made lowercase.
    displayname = models.CharField(db_column='DisplayName', max_length=200)  # Field name made lowercase.
    rulegroupid = models.BigIntegerField(db_column='RuleGroupID')  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)
    updatedt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactDIY_CouponsInfo_new'


class Factfhuid(models.Model):
    uid = models.CharField(db_column='Uid', max_length=20, blank=True)  # Field name made lowercase.
    isfhnew = models.CharField(db_column='IsFHnew', max_length=1, blank=True)  # Field name made lowercase.
    newfhdate = models.CharField(db_column='NewFHDate', max_length=10, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactFhUid'


class Factfltorder(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    ctripcardno = models.CharField(db_column='CtripCardNo', max_length=10, blank=True)  # Field name made lowercase.
    flightway = models.CharField(db_column='FlightWay', max_length=1, blank=True)  # Field name made lowercase.
    flightclass = models.CharField(db_column='FlightClass', max_length=1, blank=True)  # Field name made lowercase.
    isopentran = models.CharField(db_column='IsOpenTran', max_length=1, blank=True)  # Field name made lowercase.
    sendticketcity = models.SmallIntegerField(db_column='SendTicketCity', blank=True, null=True)  # Field name made lowercase.
    flightagency = models.SmallIntegerField(db_column='FlightAgency', blank=True, null=True)  # Field name made lowercase.
    urgencylevel = models.IntegerField(db_column='UrgencyLevel', blank=True, null=True)  # Field name made lowercase.
    isonline = models.CharField(db_column='IsOnline', max_length=1, blank=True)  # Field name made lowercase.
    needappl = models.CharField(db_column='NeedAppl', max_length=1, blank=True)  # Field name made lowercase.
    isspecialprice = models.CharField(db_column='IsSpecialPrice', max_length=1, blank=True)  # Field name made lowercase.
    ispost = models.CharField(db_column='IsPost', max_length=1, blank=True)  # Field name made lowercase.
    noprint = models.CharField(db_column='NoPrint', max_length=1, blank=True)  # Field name made lowercase.
    ispostfinal = models.CharField(db_column='IsPostFinal', max_length=1, blank=True)  # Field name made lowercase.
    gifttype = models.CharField(db_column='GiftType', max_length=2, blank=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=20, blank=True)  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=20, blank=True)  # Field name made lowercase.
    vipgrade = models.SmallIntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    sendsite = models.IntegerField(db_column='SendSite', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tot_oilfee = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tot_tax = models.IntegerField(blank=True, null=True)
    send_ticket_fee = models.SmallIntegerField(blank=True, null=True)
    insurance_fee = models.SmallIntegerField(blank=True, null=True)
    emoney = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tot_sequence = models.SmallIntegerField(blank=True, null=True)
    quantity = models.SmallIntegerField(blank=True, null=True)
    tot_adult = models.SmallIntegerField(blank=True, null=True)
    tot_children = models.SmallIntegerField(blank=True, null=True)
    persons = models.SmallIntegerField(blank=True, null=True)
    tot_giftnum = models.IntegerField(blank=True, null=True)
    ave_recommendlevel = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    ave_costrate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    payable = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    balancetype = models.CharField(db_column='BalanceType', max_length=2, blank=True)  # Field name made lowercase.
    frompackageorder = models.CharField(db_column='FromPackageOrder', max_length=1, blank=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDt', blank=True, null=True)  # Field name made lowercase.
    auditkey = models.SmallIntegerField(db_column='AuditKey', blank=True, null=True)  # Field name made lowercase.
    servicefee = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    paymenttype = models.SmallIntegerField(db_column='PaymentType', blank=True, null=True)  # Field name made lowercase.
    gatheringtype = models.SmallIntegerField(db_column='GatheringType', blank=True, null=True)  # Field name made lowercase.
    custid = models.IntegerField(db_column='CustId', blank=True, null=True)  # Field name made lowercase.
    finishdate = models.DateTimeField(db_column='FinishDate', blank=True, null=True)  # Field name made lowercase.
    bspet = models.CharField(db_column='BSPET', max_length=1, blank=True)  # Field name made lowercase.
    eticket = models.CharField(db_column='Eticket', max_length=1, blank=True)  # Field name made lowercase.
    real_quantity = models.SmallIntegerField(blank=True, null=True)
    printtickettime = models.DateTimeField(db_column='PrintTicketTime', blank=True, null=True)  # Field name made lowercase.
    getticketway = models.CharField(db_column='GetTicketWay', max_length=3, blank=True)  # Field name made lowercase.
    specialpricetype = models.CharField(max_length=2, blank=True)
    getairport = models.CharField(db_column='Getairport', max_length=3, blank=True)  # Field name made lowercase.
    mobilephone = models.CharField(db_column='MobilePhone', max_length=20, blank=True)  # Field name made lowercase.
    processstatus = models.SmallIntegerField(db_column='ProcessStatus', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='Eid', max_length=20, blank=True)  # Field name made lowercase.
    ccoper = models.CharField(db_column='CCOper', max_length=20, blank=True)  # Field name made lowercase.
    sendtickettime = models.DateTimeField(db_column='SendTicketTime', blank=True, null=True)  # Field name made lowercase.
    lastconfirmclienttime = models.DateTimeField(db_column='LastConfirmClientTime', blank=True, null=True)  # Field name made lowercase.
    ticketsender = models.CharField(db_column='TicketSender', max_length=20, blank=True)  # Field name made lowercase.
    tot_recommendlevel = models.SmallIntegerField(blank=True, null=True)
    changereason = models.CharField(db_column='ChangeReason', max_length=10, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=10, blank=True)  # Field name made lowercase.
    isrebook = models.CharField(db_column='IsRebook', max_length=1, blank=True)  # Field name made lowercase.
    confirmclienttime = models.DateTimeField(db_column='ConfirmClientTime', blank=True, null=True)  # Field name made lowercase.
    bookmode = models.CharField(max_length=1, blank=True)
    processoper = models.CharField(db_column='ProcessOper', max_length=15, blank=True)  # Field name made lowercase.
    firstprocesstime = models.DateTimeField(db_column='FirstProcessTime', blank=True, null=True)  # Field name made lowercase.
    reserveflighttime = models.DateTimeField(db_column='ReserveFlightTime', blank=True, null=True)  # Field name made lowercase.
    lastbookmode = models.CharField(db_column='LastBookMode', max_length=1, blank=True)  # Field name made lowercase.
    copyfrom = models.IntegerField(db_column='CopyFrom', blank=True, null=True)  # Field name made lowercase.
    reference = models.IntegerField(db_column='Reference', blank=True, null=True)  # Field name made lowercase.
    vipflag = models.CharField(db_column='VipFlag', max_length=1, blank=True)  # Field name made lowercase.
    isobooking = models.CharField(db_column='IsOBooking', max_length=1, blank=True)  # Field name made lowercase.
    confirmtype = models.CharField(db_column='ConfirmType', max_length=3, blank=True)  # Field name made lowercase.
    ticketstatus = models.CharField(max_length=1, blank=True)
    ord_source = models.CharField(db_column='ord_Source', max_length=1, blank=True)  # Field name made lowercase.
    custtype = models.CharField(db_column='CustType', max_length=2, blank=True)  # Field name made lowercase.
    sysconfirmtype = models.CharField(db_column='SysConfirmType', max_length=1, blank=True)  # Field name made lowercase.
    manualset = models.CharField(db_column='Manualset', max_length=1, blank=True)  # Field name made lowercase.
    pricetype = models.CharField(db_column='PriceType', max_length=3, blank=True)  # Field name made lowercase.
    isdtoa = models.CharField(db_column='IsDtoA', max_length=1, blank=True)  # Field name made lowercase.
    classes = models.CharField(db_column='Classes', max_length=250, blank=True)  # Field name made lowercase.
    cities = models.CharField(db_column='Cities', max_length=250, blank=True)  # Field name made lowercase.
    isenglish = models.CharField(db_column='IsEnglish', max_length=1, blank=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=50, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    statuschanged = models.NullBooleanField(db_column='StatusChanged')  # Field name made lowercase.
    sendticketetime = models.DateTimeField(db_column='SendTicketEtime', blank=True, null=True)  # Field name made lowercase.
    eticketnum = models.IntegerField(db_column='ETicketNum', blank=True, null=True)  # Field name made lowercase.
    ticketnum = models.IntegerField(db_column='TicketNum', blank=True, null=True)  # Field name made lowercase.
    fu_persons = models.SmallIntegerField(db_column='FU_persons', blank=True, null=True)  # Field name made lowercase.
    fu_type = models.SmallIntegerField(db_column='FU_Type', blank=True, null=True)  # Field name made lowercase.
    u_persons = models.SmallIntegerField(db_column='U_Persons', blank=True, null=True)  # Field name made lowercase.
    contactname = models.CharField(db_column='ContactName', max_length=50, blank=True)  # Field name made lowercase.
    ac_audited = models.CharField(db_column='AC_Audited', max_length=1, blank=True)  # Field name made lowercase.
    ip1 = models.SmallIntegerField(db_column='IP1', blank=True, null=True)  # Field name made lowercase.
    ip2 = models.SmallIntegerField(db_column='IP2', blank=True, null=True)  # Field name made lowercase.
    ip3 = models.SmallIntegerField(db_column='IP3', blank=True, null=True)  # Field name made lowercase.
    ip4 = models.SmallIntegerField(db_column='IP4', blank=True, null=True)  # Field name made lowercase.
    realtickettype = models.CharField(db_column='RealTicketType', max_length=2, blank=True)  # Field name made lowercase.
    postcity = models.IntegerField(db_column='PostCity', blank=True, null=True)  # Field name made lowercase.
    isself = models.CharField(db_column='IsSelf', max_length=1, blank=True)  # Field name made lowercase.
    ispassenger = models.CharField(db_column='IsPassenger', max_length=1, blank=True)  # Field name made lowercase.
    ptoper = models.CharField(db_column='PTOper', max_length=20, blank=True)  # Field name made lowercase.
    confirmtickettime = models.DateTimeField(db_column='ConfirmTicketTime', blank=True, null=True)  # Field name made lowercase.
    forcontrol = models.CharField(db_column='Forcontrol', max_length=1, blank=True)  # Field name made lowercase.
    userpaydate = models.DateTimeField(db_column='UserPayDate', blank=True, null=True)  # Field name made lowercase.
    orglpaytype = models.CharField(db_column='OrglpayType', max_length=20, blank=True)  # Field name made lowercase.
    packageorderid = models.IntegerField(db_column='PackageOrderID', blank=True, null=True)  # Field name made lowercase.
    sendticketcity_c = models.SmallIntegerField(db_column='SendTicketCity_c', blank=True, null=True)  # Field name made lowercase.
    firstsegmentoperator = models.CharField(db_column='FirstSegmentOperator', max_length=20, blank=True)  # Field name made lowercase.
    firstsegmentprinttime = models.DateTimeField(db_column='FirstSegmentPrintTime', blank=True, null=True)  # Field name made lowercase.
    segmentcount = models.IntegerField(db_column='SegmentCount', blank=True, null=True)  # Field name made lowercase.
    firstinsuranceprinttime = models.DateTimeField(db_column='FirstInsurancePrintTime', blank=True, null=True)  # Field name made lowercase.
    firstinsuranceoperator = models.CharField(db_column='FirstInsuranceOperator', max_length=20, blank=True)  # Field name made lowercase.
    insurancecount = models.IntegerField(db_column='InsuranceCount', blank=True, null=True)  # Field name made lowercase.
    referenceby = models.IntegerField(blank=True, null=True)
    isinp_account = models.CharField(db_column='IsInP_Account', max_length=1, blank=True)  # Field name made lowercase.
    ctrippaydate = models.DateTimeField(db_column='CtripPayDate', blank=True, null=True)  # Field name made lowercase.
    sendticketaddr = models.CharField(db_column='SendTicketAddr', max_length=180, blank=True)  # Field name made lowercase.
    processlogo = models.IntegerField(db_column='ProcessLogo', blank=True, null=True)  # Field name made lowercase.
    ispostpkg = models.CharField(db_column='ISPostPkg', max_length=1, blank=True)  # Field name made lowercase.
    paymentoper = models.CharField(db_column='PaymentOper', max_length=20, blank=True)  # Field name made lowercase.
    oldflightagency = models.IntegerField(db_column='OldFlightagency', blank=True, null=True)  # Field name made lowercase.
    istodayprint = models.CharField(db_column='IsTodayprint', max_length=1, blank=True)  # Field name made lowercase.
    agetype = models.CharField(db_column='AgeType', max_length=3, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=20, blank=True)  # Field name made lowercase.
    isfhpkg = models.CharField(db_column='IsFHpkg', max_length=1, blank=True)  # Field name made lowercase.
    pricecheck = models.CharField(db_column='PriceCheck', max_length=1, blank=True)  # Field name made lowercase.
    lastprinttickettime = models.DateTimeField(db_column='LastPrintTicketTime', blank=True, null=True)  # Field name made lowercase.
    insurancerecorddate = models.DateTimeField(db_column='InsuranceRecordDate', blank=True, null=True)  # Field name made lowercase.
    insurancerefundtime = models.DateTimeField(db_column='InsuranceRefundTime', blank=True, null=True)  # Field name made lowercase.
    confirmperson = models.CharField(db_column='ConfirmPerson', max_length=40, blank=True)  # Field name made lowercase.
    journeyid = models.CharField(db_column='JourneyID', max_length=32, blank=True)  # Field name made lowercase.
    defineflag = models.CharField(db_column='DefineFlag', max_length=200, blank=True)  # Field name made lowercase.
    citiesid = models.CharField(db_column='CitiesID', max_length=100, blank=True)  # Field name made lowercase.
    canton = models.IntegerField(db_column='Canton', blank=True, null=True)  # Field name made lowercase.
    collecttime = models.DateTimeField(db_column='CollectTime', blank=True, null=True)  # Field name made lowercase.
    cashsystem = models.CharField(db_column='CashSystem', max_length=1, blank=True)  # Field name made lowercase.
    receivebranch = models.SmallIntegerField(db_column='ReceiveBranch', blank=True, null=True)  # Field name made lowercase.
    ac_ccsfee = models.DecimalField(db_column='AC_CCSFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    gatheringsite = models.SmallIntegerField(db_column='GatheringSite', blank=True, null=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    eaccountamount = models.DecimalField(db_column='EaccountAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    difftfee = models.DecimalField(db_column='DiffTFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    diffifee = models.DecimalField(db_column='DiffIFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    diffsfee = models.DecimalField(db_column='DiffSFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    producttype = models.CharField(db_column='ProductType', max_length=1, blank=True)  # Field name made lowercase.
    lastprinttime = models.DateTimeField(db_column='LastPrintTime', blank=True, null=True)  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID', blank=True, null=True)  # Field name made lowercase.
    countriesid = models.CharField(db_column='CountriesID', max_length=100, blank=True)  # Field name made lowercase.
    d = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = False
        db_table = 'FactFltOrder'


class Factfltorderext(models.Model):
    orderid = models.BigIntegerField(db_column='OrderID')  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    printtickettype = models.CharField(db_column='PrintTicketType', max_length=1, blank=True)  # Field name made lowercase.
    lastallottime = models.DateTimeField(db_column='LastAllotTime', blank=True, null=True)  # Field name made lowercase.
    timeoutmanualcheck = models.SmallIntegerField(db_column='TimeOutManualCheck', blank=True, null=True)  # Field name made lowercase.
    gatheringoper = models.CharField(db_column='GatheringOper', max_length=20, blank=True)  # Field name made lowercase.
    postprinteid = models.CharField(db_column='PostPrintEid', max_length=20, blank=True)  # Field name made lowercase.
    postprinttime = models.DateTimeField(db_column='PostPrintTime', blank=True, null=True)  # Field name made lowercase.
    ccardpayfee = models.DecimalField(db_column='CCardPayFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    printtime = models.DateTimeField(db_column='PrintTime', blank=True, null=True)  # Field name made lowercase.
    discountcode = models.CharField(db_column='DiscountCode', max_length=20, blank=True)  # Field name made lowercase.
    travelmoney = models.DecimalField(db_column='TravelMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    adjustday = models.CharField(db_column='AdjustDay', max_length=20, blank=True)  # Field name made lowercase.
    airportgetid = models.IntegerField(db_column='AirportGetID', blank=True, null=True)  # Field name made lowercase.
    origetticketwaycode = models.CharField(db_column='OriGetTicketWayCode', max_length=10, blank=True)  # Field name made lowercase.
    cities_eng = models.CharField(db_column='Cities_Eng', max_length=500, blank=True)  # Field name made lowercase.
    printticketrisklevel = models.IntegerField(db_column='PrintTicketRiskLevel', blank=True, null=True)  # Field name made lowercase.
    hasbookedmovement = models.CharField(db_column='HasBookedMovement', max_length=1, blank=True)  # Field name made lowercase.
    passengerbooked = models.IntegerField(db_column='PassengerBooked', blank=True, null=True)  # Field name made lowercase.
    pickupbooked = models.IntegerField(db_column='PickUpBooked', blank=True, null=True)  # Field name made lowercase.
    travelamount = models.DecimalField(db_column='TravelAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    refundreservetime = models.DateTimeField(db_column='RefundReserveTime', blank=True, null=True)  # Field name made lowercase.
    isinsurancemail = models.CharField(db_column='IsInsuranceMail', max_length=1, blank=True)  # Field name made lowercase.
    c_language = models.CharField(db_column='C_Language', max_length=3, blank=True)  # Field name made lowercase.
    autoassigntime = models.DateTimeField(db_column='AutoAssignTime', blank=True, null=True)  # Field name made lowercase.
    delayreason = models.CharField(db_column='DelayReason', max_length=250, blank=True)  # Field name made lowercase.
    rebookqueryfee = models.DecimalField(db_column='RebookQueryFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    bookingchannel = models.CharField(db_column='BookingChannel', max_length=10, blank=True)  # Field name made lowercase.
    posttype = models.CharField(db_column='PostType', max_length=2, blank=True)  # Field name made lowercase.
    packageattachfee = models.DecimalField(db_column='PackageAttachFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ispackageproduct = models.CharField(db_column='IsPackageProduct', max_length=1, blank=True)  # Field name made lowercase.
    storetype = models.CharField(db_column='StoreType', max_length=20, blank=True)  # Field name made lowercase.
    leastperson = models.SmallIntegerField(db_column='LeastPerson', blank=True, null=True)  # Field name made lowercase.
    isbefore = models.CharField(db_column='IsBefore', max_length=1, blank=True)  # Field name made lowercase.
    expressid = models.BigIntegerField(db_column='ExpressID', blank=True, null=True)  # Field name made lowercase.
    ispackagesend = models.CharField(db_column='IsPackageSend', max_length=1, blank=True)  # Field name made lowercase.
    distplatform = models.CharField(db_column='DistPlatform', max_length=1, blank=True)  # Field name made lowercase.
    bindinginsnum = models.IntegerField(db_column='BindingInsNum', blank=True, null=True)  # Field name made lowercase.
    invoiceflag = models.CharField(db_column='InvoiceFlag', max_length=1, blank=True)  # Field name made lowercase.
    paytype = models.IntegerField(db_column='PayType', blank=True, null=True)  # Field name made lowercase.
    paymileagecost = models.IntegerField(db_column='PayMileageCost', blank=True, null=True)  # Field name made lowercase.
    bookmileagecost = models.IntegerField(db_column='BookMileageCost', blank=True, null=True)  # Field name made lowercase.
    ispostponefee = models.CharField(db_column='IsPostponeFee', max_length=1, blank=True)  # Field name made lowercase.
    isautoprintticket = models.CharField(db_column='IsAutoPrintTicket', max_length=1, blank=True)  # Field name made lowercase.
    agreementid = models.CharField(db_column='AgreementId', max_length=100, blank=True)  # Field name made lowercase.
    ispartial = models.CharField(db_column='IsPartial', max_length=1, blank=True)  # Field name made lowercase.
    packageattachproduct = models.IntegerField(db_column='PackageAttachProduct', blank=True, null=True)  # Field name made lowercase.
    packagetype = models.IntegerField(db_column='PackageType', blank=True, null=True)  # Field name made lowercase.
    flightagency_old = models.CharField(db_column='FlightAgency_Old', max_length=30, blank=True)  # Field name made lowercase.
    changeflightagencytime = models.DateTimeField(db_column='ChangeFlightAgencyTime', blank=True, null=True)  # Field name made lowercase.
    changeflightagencyoperator = models.CharField(db_column='ChangeFlightAgencyOperator', max_length=20, blank=True)  # Field name made lowercase.
    isautoprintlist = models.CharField(db_column='IsAutoPrintList', max_length=1, blank=True)  # Field name made lowercase.
    travelinvoice = models.CharField(db_column='TravelInvoice', max_length=1, blank=True)  # Field name made lowercase.
    journeyuid = models.CharField(db_column='JourneyUid', max_length=20, blank=True)  # Field name made lowercase.
    oldorderid = models.IntegerField(db_column='OldOrderID', blank=True, null=True)  # Field name made lowercase.
    ticketvalidatedoperator = models.CharField(db_column='TicketValidatedOperator', max_length=10, blank=True)  # Field name made lowercase.
    producttype = models.CharField(db_column='ProductType', max_length=10, blank=True)  # Field name made lowercase.
    postcitycandidates = models.CharField(db_column='PostCityCandidates', max_length=100, blank=True)  # Field name made lowercase.
    enginetype = models.CharField(db_column='EngineType', max_length=25, blank=True)  # Field name made lowercase.
    bookingstatus = models.CharField(db_column='BookingStatus', max_length=1, blank=True)  # Field name made lowercase.
    intnegativeprofittype = models.SmallIntegerField(db_column='IntNegativeProfitType', blank=True, null=True)  # Field name made lowercase.
    faretypeid = models.SmallIntegerField(db_column='FareTypeID', blank=True, null=True)  # Field name made lowercase.
    lastassigntime = models.DateTimeField(db_column='LastAssignTime', blank=True, null=True)  # Field name made lowercase.
    ownerairline = models.CharField(db_column='OwnerAirline', max_length=2, blank=True)  # Field name made lowercase.
    salestype = models.IntegerField(db_column='SalesType', blank=True, null=True)  # Field name made lowercase.
    fareid = models.CharField(db_column='FareID', max_length=500, blank=True)  # Field name made lowercase.
    travelmoneyisincome = models.IntegerField(db_column='TravelMoneyIsIncome', blank=True, null=True)  # Field name made lowercase.
    stockprofit = models.DecimalField(db_column='StockProfit', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    faretype = models.CharField(db_column='FareType', max_length=200, blank=True)  # Field name made lowercase.
    nosearchresultflag = models.IntegerField(db_column='NoSearchResultFlag', blank=True, null=True)  # Field name made lowercase.
    travelmoney_finance = models.DecimalField(db_column='TravelMoney_Finance', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    travelmoneyrefund_finance = models.DecimalField(db_column='TravelMoneyRefund_Finance', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    intlsalepolicy = models.DecimalField(db_column='IntlSalePolicy', max_digits=10, decimal_places=3, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactFltOrderExt'


class FactfltorderUid(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    ctripcardno = models.CharField(db_column='CtripCardNo', max_length=10, blank=True)  # Field name made lowercase.
    flightway = models.CharField(db_column='FlightWay', max_length=1, blank=True)  # Field name made lowercase.
    flightclass = models.CharField(db_column='FlightClass', max_length=1, blank=True)  # Field name made lowercase.
    isopentran = models.CharField(db_column='IsOpenTran', max_length=1, blank=True)  # Field name made lowercase.
    sendticketcity = models.SmallIntegerField(db_column='SendTicketCity', blank=True, null=True)  # Field name made lowercase.
    flightagency = models.SmallIntegerField(db_column='FlightAgency', blank=True, null=True)  # Field name made lowercase.
    urgencylevel = models.IntegerField(db_column='UrgencyLevel', blank=True, null=True)  # Field name made lowercase.
    isonline = models.CharField(db_column='IsOnline', max_length=1, blank=True)  # Field name made lowercase.
    needappl = models.CharField(db_column='NeedAppl', max_length=1, blank=True)  # Field name made lowercase.
    isspecialprice = models.CharField(db_column='IsSpecialPrice', max_length=1, blank=True)  # Field name made lowercase.
    ispost = models.CharField(db_column='IsPost', max_length=1, blank=True)  # Field name made lowercase.
    noprint = models.CharField(db_column='NoPrint', max_length=1, blank=True)  # Field name made lowercase.
    ispostfinal = models.CharField(db_column='IsPostFinal', max_length=1, blank=True)  # Field name made lowercase.
    gifttype = models.CharField(db_column='GiftType', max_length=2, blank=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=20, blank=True)  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=20, blank=True)  # Field name made lowercase.
    vipgrade = models.SmallIntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    sendsite = models.IntegerField(db_column='SendSite', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tot_oilfee = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tot_tax = models.IntegerField(blank=True, null=True)
    send_ticket_fee = models.SmallIntegerField(blank=True, null=True)
    insurance_fee = models.SmallIntegerField(blank=True, null=True)
    emoney = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tot_sequence = models.SmallIntegerField(blank=True, null=True)
    quantity = models.SmallIntegerField(blank=True, null=True)
    tot_adult = models.SmallIntegerField(blank=True, null=True)
    tot_children = models.SmallIntegerField(blank=True, null=True)
    persons = models.SmallIntegerField(blank=True, null=True)
    tot_giftnum = models.IntegerField(blank=True, null=True)
    ave_recommendlevel = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    ave_costrate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    payable = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    balancetype = models.CharField(db_column='BalanceType', max_length=2, blank=True)  # Field name made lowercase.
    frompackageorder = models.CharField(db_column='FromPackageOrder', max_length=1, blank=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDt', blank=True, null=True)  # Field name made lowercase.
    auditkey = models.SmallIntegerField(db_column='AuditKey', blank=True, null=True)  # Field name made lowercase.
    servicefee = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    paymenttype = models.SmallIntegerField(db_column='PaymentType', blank=True, null=True)  # Field name made lowercase.
    gatheringtype = models.SmallIntegerField(db_column='GatheringType', blank=True, null=True)  # Field name made lowercase.
    custid = models.IntegerField(db_column='CustId', blank=True, null=True)  # Field name made lowercase.
    finishdate = models.DateTimeField(db_column='FinishDate', blank=True, null=True)  # Field name made lowercase.
    bspet = models.CharField(db_column='BSPET', max_length=1, blank=True)  # Field name made lowercase.
    eticket = models.CharField(db_column='Eticket', max_length=1, blank=True)  # Field name made lowercase.
    real_quantity = models.SmallIntegerField(blank=True, null=True)
    printtickettime = models.DateTimeField(db_column='PrintTicketTime', blank=True, null=True)  # Field name made lowercase.
    getticketway = models.CharField(db_column='GetTicketWay', max_length=3, blank=True)  # Field name made lowercase.
    specialpricetype = models.CharField(max_length=2, blank=True)
    getairport = models.CharField(db_column='Getairport', max_length=3, blank=True)  # Field name made lowercase.
    mobilephone = models.CharField(db_column='MobilePhone', max_length=20, blank=True)  # Field name made lowercase.
    processstatus = models.SmallIntegerField(db_column='ProcessStatus', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='Eid', max_length=20, blank=True)  # Field name made lowercase.
    ccoper = models.CharField(db_column='CCOper', max_length=20, blank=True)  # Field name made lowercase.
    sendtickettime = models.DateTimeField(db_column='SendTicketTime', blank=True, null=True)  # Field name made lowercase.
    lastconfirmclienttime = models.DateTimeField(db_column='LastConfirmClientTime', blank=True, null=True)  # Field name made lowercase.
    ticketsender = models.CharField(db_column='TicketSender', max_length=20, blank=True)  # Field name made lowercase.
    tot_recommendlevel = models.SmallIntegerField(blank=True, null=True)
    changereason = models.CharField(db_column='ChangeReason', max_length=10, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=10, blank=True)  # Field name made lowercase.
    isrebook = models.CharField(db_column='IsRebook', max_length=1, blank=True)  # Field name made lowercase.
    confirmclienttime = models.DateTimeField(db_column='ConfirmClientTime', blank=True, null=True)  # Field name made lowercase.
    bookmode = models.CharField(max_length=1, blank=True)
    processoper = models.CharField(db_column='ProcessOper', max_length=15, blank=True)  # Field name made lowercase.
    firstprocesstime = models.DateTimeField(db_column='FirstProcessTime', blank=True, null=True)  # Field name made lowercase.
    reserveflighttime = models.DateTimeField(db_column='ReserveFlightTime', blank=True, null=True)  # Field name made lowercase.
    lastbookmode = models.CharField(db_column='LastBookMode', max_length=1, blank=True)  # Field name made lowercase.
    copyfrom = models.IntegerField(db_column='CopyFrom', blank=True, null=True)  # Field name made lowercase.
    reference = models.IntegerField(db_column='Reference', blank=True, null=True)  # Field name made lowercase.
    vipflag = models.CharField(db_column='VipFlag', max_length=1, blank=True)  # Field name made lowercase.
    isobooking = models.CharField(db_column='IsOBooking', max_length=1, blank=True)  # Field name made lowercase.
    confirmtype = models.CharField(db_column='ConfirmType', max_length=3, blank=True)  # Field name made lowercase.
    ticketstatus = models.CharField(max_length=1, blank=True)
    ord_source = models.CharField(db_column='ord_Source', max_length=1, blank=True)  # Field name made lowercase.
    custtype = models.CharField(db_column='CustType', max_length=2, blank=True)  # Field name made lowercase.
    sysconfirmtype = models.CharField(db_column='SysConfirmType', max_length=1, blank=True)  # Field name made lowercase.
    manualset = models.CharField(db_column='Manualset', max_length=1, blank=True)  # Field name made lowercase.
    pricetype = models.CharField(db_column='PriceType', max_length=3, blank=True)  # Field name made lowercase.
    isdtoa = models.CharField(db_column='IsDtoA', max_length=1, blank=True)  # Field name made lowercase.
    classes = models.CharField(db_column='Classes', max_length=250, blank=True)  # Field name made lowercase.
    cities = models.CharField(db_column='Cities', max_length=250, blank=True)  # Field name made lowercase.
    isenglish = models.CharField(db_column='IsEnglish', max_length=1, blank=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=50, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    statuschanged = models.NullBooleanField(db_column='StatusChanged')  # Field name made lowercase.
    sendticketetime = models.DateTimeField(db_column='SendTicketEtime', blank=True, null=True)  # Field name made lowercase.
    eticketnum = models.IntegerField(db_column='ETicketNum', blank=True, null=True)  # Field name made lowercase.
    ticketnum = models.IntegerField(db_column='TicketNum', blank=True, null=True)  # Field name made lowercase.
    fu_persons = models.SmallIntegerField(db_column='FU_persons', blank=True, null=True)  # Field name made lowercase.
    fu_type = models.SmallIntegerField(db_column='FU_Type', blank=True, null=True)  # Field name made lowercase.
    u_persons = models.SmallIntegerField(db_column='U_Persons', blank=True, null=True)  # Field name made lowercase.
    contactname = models.CharField(db_column='ContactName', max_length=50, blank=True)  # Field name made lowercase.
    ac_audited = models.CharField(db_column='AC_Audited', max_length=1, blank=True)  # Field name made lowercase.
    ip1 = models.SmallIntegerField(db_column='IP1', blank=True, null=True)  # Field name made lowercase.
    ip2 = models.SmallIntegerField(db_column='IP2', blank=True, null=True)  # Field name made lowercase.
    ip3 = models.SmallIntegerField(db_column='IP3', blank=True, null=True)  # Field name made lowercase.
    ip4 = models.SmallIntegerField(db_column='IP4', blank=True, null=True)  # Field name made lowercase.
    realtickettype = models.CharField(db_column='RealTicketType', max_length=2, blank=True)  # Field name made lowercase.
    postcity = models.IntegerField(db_column='PostCity', blank=True, null=True)  # Field name made lowercase.
    isself = models.CharField(db_column='IsSelf', max_length=1, blank=True)  # Field name made lowercase.
    ispassenger = models.CharField(db_column='IsPassenger', max_length=1, blank=True)  # Field name made lowercase.
    ptoper = models.CharField(db_column='PTOper', max_length=20, blank=True)  # Field name made lowercase.
    confirmtickettime = models.DateTimeField(db_column='ConfirmTicketTime', blank=True, null=True)  # Field name made lowercase.
    forcontrol = models.CharField(db_column='Forcontrol', max_length=1, blank=True)  # Field name made lowercase.
    userpaydate = models.DateTimeField(db_column='UserPayDate', blank=True, null=True)  # Field name made lowercase.
    orglpaytype = models.CharField(db_column='OrglpayType', max_length=20, blank=True)  # Field name made lowercase.
    packageorderid = models.IntegerField(db_column='PackageOrderID', blank=True, null=True)  # Field name made lowercase.
    sendticketcity_c = models.SmallIntegerField(db_column='SendTicketCity_c', blank=True, null=True)  # Field name made lowercase.
    firstsegmentoperator = models.CharField(db_column='FirstSegmentOperator', max_length=20, blank=True)  # Field name made lowercase.
    firstsegmentprinttime = models.DateTimeField(db_column='FirstSegmentPrintTime', blank=True, null=True)  # Field name made lowercase.
    segmentcount = models.IntegerField(db_column='SegmentCount', blank=True, null=True)  # Field name made lowercase.
    firstinsuranceprinttime = models.DateTimeField(db_column='FirstInsurancePrintTime', blank=True, null=True)  # Field name made lowercase.
    firstinsuranceoperator = models.CharField(db_column='FirstInsuranceOperator', max_length=20, blank=True)  # Field name made lowercase.
    insurancecount = models.IntegerField(db_column='InsuranceCount', blank=True, null=True)  # Field name made lowercase.
    referenceby = models.IntegerField(blank=True, null=True)
    isinp_account = models.CharField(db_column='IsInP_Account', max_length=1, blank=True)  # Field name made lowercase.
    ctrippaydate = models.DateTimeField(db_column='CtripPayDate', blank=True, null=True)  # Field name made lowercase.
    sendticketaddr = models.CharField(db_column='SendTicketAddr', max_length=180, blank=True)  # Field name made lowercase.
    processlogo = models.IntegerField(db_column='ProcessLogo', blank=True, null=True)  # Field name made lowercase.
    ispostpkg = models.CharField(db_column='ISPostPkg', max_length=1, blank=True)  # Field name made lowercase.
    paymentoper = models.CharField(db_column='PaymentOper', max_length=20, blank=True)  # Field name made lowercase.
    oldflightagency = models.IntegerField(db_column='OldFlightagency', blank=True, null=True)  # Field name made lowercase.
    istodayprint = models.CharField(db_column='IsTodayprint', max_length=1, blank=True)  # Field name made lowercase.
    agetype = models.CharField(db_column='AgeType', max_length=3, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=20, blank=True)  # Field name made lowercase.
    isfhpkg = models.CharField(db_column='IsFHpkg', max_length=1, blank=True)  # Field name made lowercase.
    pricecheck = models.CharField(db_column='PriceCheck', max_length=1, blank=True)  # Field name made lowercase.
    lastprinttickettime = models.DateTimeField(db_column='LastPrintTicketTime', blank=True, null=True)  # Field name made lowercase.
    insurancerecorddate = models.DateTimeField(db_column='InsuranceRecordDate', blank=True, null=True)  # Field name made lowercase.
    insurancerefundtime = models.DateTimeField(db_column='InsuranceRefundTime', blank=True, null=True)  # Field name made lowercase.
    confirmperson = models.CharField(db_column='ConfirmPerson', max_length=40, blank=True)  # Field name made lowercase.
    journeyid = models.CharField(db_column='JourneyID', max_length=32, blank=True)  # Field name made lowercase.
    defineflag = models.CharField(db_column='DefineFlag', max_length=200, blank=True)  # Field name made lowercase.
    citiesid = models.CharField(db_column='CitiesID', max_length=100, blank=True)  # Field name made lowercase.
    canton = models.IntegerField(db_column='Canton', blank=True, null=True)  # Field name made lowercase.
    collecttime = models.DateTimeField(db_column='CollectTime', blank=True, null=True)  # Field name made lowercase.
    cashsystem = models.CharField(db_column='CashSystem', max_length=1, blank=True)  # Field name made lowercase.
    receivebranch = models.SmallIntegerField(db_column='ReceiveBranch', blank=True, null=True)  # Field name made lowercase.
    ac_ccsfee = models.DecimalField(db_column='AC_CCSFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    gatheringsite = models.SmallIntegerField(db_column='GatheringSite', blank=True, null=True)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    eaccountamount = models.DecimalField(db_column='EaccountAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    difftfee = models.DecimalField(db_column='DiffTFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    diffifee = models.DecimalField(db_column='DiffIFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    diffsfee = models.DecimalField(db_column='DiffSFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    producttype = models.CharField(db_column='ProductType', max_length=1, blank=True)  # Field name made lowercase.
    lastprinttime = models.DateTimeField(db_column='LastPrintTime', blank=True, null=True)  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID', blank=True, null=True)  # Field name made lowercase.
    countriesid = models.CharField(db_column='CountriesID', max_length=100, blank=True)  # Field name made lowercase.
    testuid = models.CharField(max_length=2, blank=True)
    isfltandtrain = models.IntegerField(db_column='IsFltAndTrain', blank=True, null=True)  # Field name made lowercase.
    bookingchannel = models.CharField(db_column='BookingChannel', max_length=10, blank=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'FactFltOrder_Uid'


class Factfltrefund(models.Model):
    rid = models.IntegerField(db_column='Rid')  # Field name made lowercase.
    orderid = models.IntegerField(blank=True, null=True)
    rt_oper = models.CharField(db_column='Rt_oper', max_length=20, blank=True)  # Field name made lowercase.
    rt_time = models.DateTimeField(db_column='RT_time', blank=True, null=True)  # Field name made lowercase.
    rttimekey = models.IntegerField(db_column='RTTimeKey', blank=True, null=True)  # Field name made lowercase.
    tickets = models.SmallIntegerField(blank=True, null=True)
    audited = models.CharField(db_column='Audited', max_length=1, blank=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDt', blank=True, null=True)  # Field name made lowercase.
    isrefund = models.CharField(db_column='IsRefund', max_length=1, blank=True)  # Field name made lowercase.
    acc_tickets = models.SmallIntegerField(db_column='Acc_tickets', blank=True, null=True)  # Field name made lowercase.
    paycustomer = models.DecimalField(db_column='PayCustomer', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    promptfee = models.DecimalField(db_column='PromptFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    isprompt = models.CharField(db_column='IsPrompt', max_length=1, blank=True)  # Field name made lowercase.
    refund = models.DecimalField(db_column='Refund', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    prid = models.IntegerField(db_column='Prid', blank=True, null=True)  # Field name made lowercase.
    ticketamount = models.DecimalField(db_column='TicketAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ticketcost = models.DecimalField(db_column='TicketCost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    flightclass = models.CharField(db_column='FlightClass', max_length=1, blank=True)  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=3, blank=True)  # Field name made lowercase.
    payprovider = models.DecimalField(db_column='PayProvider', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    auditedtime = models.DateTimeField(db_column='AuditedTime', blank=True, null=True)  # Field name made lowercase.
    paycustomertime = models.DateTimeField(db_column='PayCustomerTime', blank=True, null=True)  # Field name made lowercase.
    referencerid = models.IntegerField(db_column='ReferenceRID', blank=True, null=True)  # Field name made lowercase.
    auditoper = models.CharField(db_column='AuditOper', max_length=20, blank=True)  # Field name made lowercase.
    duty_dept = models.CharField(db_column='Duty_Dept', max_length=4, blank=True)  # Field name made lowercase.
    refund_ctrippay = models.DecimalField(db_column='Refund_CtripPay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    refund_ctrippay_acc = models.DecimalField(db_column='Refund_CtripPay_Acc', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    refunddesc = models.CharField(db_column='RefundDesc', max_length=255, blank=True)  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=5, blank=True)  # Field name made lowercase.
    travelmoney = models.DecimalField(db_column='TravelMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    promptfee_acc = models.DecimalField(db_column='PromptFee_Acc', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'FactFltRefund'


class FactfltrefundBalance(models.Model):
    balanceid = models.IntegerField(db_column='BalanceID')  # Field name made lowercase.
    prid = models.IntegerField(db_column='PRID', blank=True, null=True)  # Field name made lowercase.
    passengername = models.CharField(db_column='PassengerName', max_length=40, blank=True)  # Field name made lowercase.
    ticketno = models.CharField(db_column='TicketNo', max_length=10, blank=True)  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    usedamount = models.DecimalField(db_column='UsedAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    usedcost = models.DecimalField(db_column='UsedCost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    usedtax = models.DecimalField(db_column='UsedTax', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    pp_ifee = models.DecimalField(db_column='PP_IFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    refundprovider = models.DecimalField(db_column='RefundProvider', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tickets = models.IntegerField(db_column='Tickets', blank=True, null=True)  # Field name made lowercase.
    payprovider = models.DecimalField(db_column='PayProvider', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    receivesite = models.CharField(db_column='ReceiveSite', max_length=1, blank=True)  # Field name made lowercase.
    audited = models.CharField(db_column='Audited', max_length=1, blank=True)  # Field name made lowercase.
    balancemode = models.CharField(db_column='BalanceMode', max_length=1, blank=True)  # Field name made lowercase.
    refundsendticket = models.DecimalField(db_column='RefundSendTicket', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payamount = models.DecimalField(db_column='PayAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ifeeamount = models.DecimalField(db_column='IFeeAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    paymenttype = models.SmallIntegerField(db_column='PaymentType', blank=True, null=True)  # Field name made lowercase.
    modifytime = models.DateTimeField(db_column='ModifyTime', blank=True, null=True)  # Field name made lowercase.
    modifyed = models.CharField(db_column='Modifyed', max_length=1, blank=True)  # Field name made lowercase.
    pp_inum = models.IntegerField(db_column='PP_INum', blank=True, null=True)  # Field name made lowercase.
    isinv = models.CharField(db_column='IsINV', max_length=1, blank=True)  # Field name made lowercase.
    fromtbooking = models.CharField(db_column='FromTBooking', max_length=1, blank=True)  # Field name made lowercase.
    auditedtime = models.DateTimeField(db_column='AuditedTime', blank=True, null=True)  # Field name made lowercase.
    usedamount_sale = models.DecimalField(db_column='UsedAmount_Sale', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    amount_sale = models.DecimalField(db_column='Amount_Sale', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    refundserverfee = models.DecimalField(db_column='RefundServerFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'FactFltRefund_Balance'


class Factfltsegment(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    sequence = models.SmallIntegerField(db_column='Sequence')  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=7, blank=True)  # Field name made lowercase.
    airline = models.CharField(db_column='AirLine', max_length=2, blank=True)  # Field name made lowercase.
    dcity = models.IntegerField(db_column='DCity', blank=True, null=True)  # Field name made lowercase.
    acity = models.IntegerField(db_column='ACity', blank=True, null=True)  # Field name made lowercase.
    aport = models.CharField(db_column='APort', max_length=3, blank=True)  # Field name made lowercase.
    dport = models.CharField(db_column='DPort', max_length=3, blank=True)  # Field name made lowercase.
    flightclass = models.CharField(db_column='FlightClass', max_length=1, blank=True)  # Field name made lowercase.
    class_field = models.CharField(db_column='Class', max_length=1, blank=True)  # Field name made lowercase. Field renamed because it was a Python reserved word.
    subclass = models.CharField(db_column='SubClass', max_length=1, blank=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True)  # Field name made lowercase.
    saleoff = models.CharField(db_column='SaleOff', max_length=3, blank=True)  # Field name made lowercase.
    nonref = models.CharField(db_column='NonRef', max_length=1, blank=True)  # Field name made lowercase.
    nonrer = models.CharField(db_column='NonRer', max_length=1, blank=True)  # Field name made lowercase.
    nonend = models.CharField(db_column='NonEnd', max_length=1, blank=True)  # Field name made lowercase.
    isopentran = models.CharField(db_column='IsOpenTran', max_length=1, blank=True)  # Field name made lowercase.
    needappl = models.CharField(db_column='NeedAppl', max_length=1, blank=True)  # Field name made lowercase.
    realtickettype = models.CharField(db_column='RealTicketType', max_length=2, blank=True)  # Field name made lowercase.
    corpcustomerid = models.CharField(db_column='CorpCustomerID', max_length=20, blank=True)  # Field name made lowercase.
    gifttype = models.CharField(db_column='GiftType', max_length=2, blank=True)  # Field name made lowercase.
    canpost = models.CharField(db_column='CanPost', max_length=1, blank=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    onlyowncity = models.SmallIntegerField(db_column='OnlyOwnCity', blank=True, null=True)  # Field name made lowercase.
    printprice = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tax = models.IntegerField(blank=True, null=True)
    recommendlevel = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    pricerate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    updatedt = models.DateTimeField(db_column='UpdateDt', blank=True, null=True)  # Field name made lowercase.
    auditkey = models.SmallIntegerField(db_column='AuditKey', blank=True, null=True)  # Field name made lowercase.
    oilfee = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    giftnum = models.IntegerField(blank=True, null=True)
    costrate = models.DecimalField(max_digits=6, decimal_places=4, blank=True, null=True)
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    crafttype = models.CharField(db_column='CraftType', max_length=5, blank=True)  # Field name made lowercase.
    segmentid = models.CharField(db_column='SegmentID', max_length=14)  # Field name made lowercase.
    takeofftime = models.DateTimeField(db_column='TakeOffTime', blank=True, null=True)  # Field name made lowercase.
    arrivaltime = models.DateTimeField(db_column='ArrivalTime', blank=True, null=True)  # Field name made lowercase.
    quantity = models.SmallIntegerField(blank=True, null=True)
    arrivedatekey = models.IntegerField(db_column='Arrivedatekey', blank=True, null=True)  # Field name made lowercase.
    takeofftimekey = models.IntegerField(db_column='TakeoffTimekey', blank=True, null=True)  # Field name made lowercase.
    printticketno = models.IntegerField(blank=True, null=True)
    recordno = models.CharField(db_column='RecordNO', max_length=6, blank=True)  # Field name made lowercase.
    falsebookreason = models.CharField(db_column='FalseBookReason', max_length=1, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    statuschanged = models.NullBooleanField(db_column='StatusChanged')  # Field name made lowercase.
    fu_persons = models.SmallIntegerField(db_column='FU_persons', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(max_length=20, blank=True)
    issurface = models.CharField(db_column='IsSurface', max_length=1, blank=True)  # Field name made lowercase.
    saleprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    waitk = models.CharField(db_column='WaitK', max_length=1, blank=True)  # Field name made lowercase.
    forcontrol = models.CharField(db_column='Forcontrol', max_length=1, blank=True)  # Field name made lowercase.
    corpservicefee = models.DecimalField(db_column='CorpServiceFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    iscorpagreement = models.CharField(db_column='IsCorpAgreement', max_length=1, blank=True)  # Field name made lowercase.
    rcepolicy = models.CharField(db_column='RCEPolicy', max_length=6, blank=True)  # Field name made lowercase.
    qprice = models.DecimalField(db_column='QPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    bfreturn = models.CharField(db_column='BfReturn', max_length=1, blank=True)  # Field name made lowercase.
    ptcmd = models.CharField(db_column='PTCmd', max_length=25, blank=True)  # Field name made lowercase.
    policytype = models.CharField(db_column='PolicyType', max_length=1, blank=True)  # Field name made lowercase.
    productsource = models.SmallIntegerField(db_column='ProductSource', blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    rebateamount = models.DecimalField(db_column='RebateAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    paymentstatus = models.SmallIntegerField(db_column='PaymentStatus', blank=True, null=True)  # Field name made lowercase.
    paidamount = models.DecimalField(db_column='PaidAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    rebatepolicyid = models.IntegerField(db_column='RebatePolicyID', blank=True, null=True)  # Field name made lowercase.
    rebatetraceid = models.IntegerField(db_column='RebateTraceID', blank=True, null=True)  # Field name made lowercase.
    officeno = models.CharField(db_column='OfficeNo', max_length=10, blank=True)  # Field name made lowercase.
    subclassrn = models.CharField(db_column='SubClassRN', max_length=3, blank=True)  # Field name made lowercase.
    productattribute = models.CharField(db_column='ProductAttribute', max_length=50, blank=True)  # Field name made lowercase.
    paydate = models.DateTimeField(db_column='PayDate', blank=True, null=True)  # Field name made lowercase.
    adtk = models.DateTimeField(db_column='Adtk', blank=True, null=True)  # Field name made lowercase.
    packageattachprice = models.DecimalField(db_column='PackageAttachPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    packageattachnumber = models.IntegerField(db_column='PackageAttachNumber', blank=True, null=True)  # Field name made lowercase.
    passengercount = models.IntegerField(db_column='PassengerCount', blank=True, null=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)
    policyid = models.BigIntegerField(blank=True, null=True)
    policycategory = models.CharField(db_column='PolicyCategory', max_length=50, blank=True)  # Field name made lowercase.
    saletype = models.CharField(db_column='SaleType', max_length=50, blank=True)  # Field name made lowercase.
    inventorytype = models.CharField(db_column='InventoryType', max_length=10, blank=True)  # Field name made lowercase.
    segmentno = models.SmallIntegerField(db_column='SegmentNo', blank=True, null=True)  # Field name made lowercase.
    flightagencyfork = models.IntegerField(db_column='FlightAgencyForK', blank=True, null=True)  # Field name made lowercase.
    applyflag = models.CharField(db_column='ApplyFlag', max_length=1, blank=True)  # Field name made lowercase.
    applytype = models.SmallIntegerField(db_column='ApplyType', blank=True, null=True)  # Field name made lowercase.
    agreementid = models.CharField(db_column='Agreementid', max_length=20, blank=True)  # Field name made lowercase.
    policycode = models.CharField(db_column='PolicyCode', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactFltSegment'


class FactfltsegmentUid(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    sequence = models.SmallIntegerField(db_column='Sequence')  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=7, blank=True)  # Field name made lowercase.
    airline = models.CharField(db_column='AirLine', max_length=2, blank=True)  # Field name made lowercase.
    dcity = models.IntegerField(db_column='DCity', blank=True, null=True)  # Field name made lowercase.
    acity = models.IntegerField(db_column='ACity', blank=True, null=True)  # Field name made lowercase.
    aport = models.CharField(db_column='APort', max_length=3, blank=True)  # Field name made lowercase.
    dport = models.CharField(db_column='DPort', max_length=3, blank=True)  # Field name made lowercase.
    flightclass = models.CharField(db_column='FlightClass', max_length=1, blank=True)  # Field name made lowercase.
    class_field = models.CharField(db_column='Class', max_length=1, blank=True)  # Field name made lowercase. Field renamed because it was a Python reserved word.
    subclass = models.CharField(db_column='SubClass', max_length=1, blank=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True)  # Field name made lowercase.
    saleoff = models.CharField(db_column='SaleOff', max_length=3, blank=True)  # Field name made lowercase.
    nonref = models.CharField(db_column='NonRef', max_length=1, blank=True)  # Field name made lowercase.
    nonrer = models.CharField(db_column='NonRer', max_length=1, blank=True)  # Field name made lowercase.
    nonend = models.CharField(db_column='NonEnd', max_length=1, blank=True)  # Field name made lowercase.
    isopentran = models.CharField(db_column='IsOpenTran', max_length=1, blank=True)  # Field name made lowercase.
    needappl = models.CharField(db_column='NeedAppl', max_length=1, blank=True)  # Field name made lowercase.
    realtickettype = models.CharField(db_column='RealTicketType', max_length=2, blank=True)  # Field name made lowercase.
    corpcustomerid = models.CharField(db_column='CorpCustomerID', max_length=20, blank=True)  # Field name made lowercase.
    gifttype = models.CharField(db_column='GiftType', max_length=2, blank=True)  # Field name made lowercase.
    canpost = models.CharField(db_column='CanPost', max_length=1, blank=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    onlyowncity = models.SmallIntegerField(db_column='OnlyOwnCity', blank=True, null=True)  # Field name made lowercase.
    printprice = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tax = models.IntegerField(blank=True, null=True)
    recommendlevel = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    pricerate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    updatedt = models.DateTimeField(db_column='UpdateDt', blank=True, null=True)  # Field name made lowercase.
    auditkey = models.SmallIntegerField(db_column='AuditKey', blank=True, null=True)  # Field name made lowercase.
    oilfee = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    giftnum = models.IntegerField(blank=True, null=True)
    costrate = models.DecimalField(max_digits=6, decimal_places=4, blank=True, null=True)
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    crafttype = models.CharField(db_column='CraftType', max_length=5, blank=True)  # Field name made lowercase.
    segmentid = models.CharField(db_column='SegmentID', max_length=14)  # Field name made lowercase.
    takeofftime = models.DateTimeField(db_column='TakeOffTime', blank=True, null=True)  # Field name made lowercase.
    arrivaltime = models.DateTimeField(db_column='ArrivalTime', blank=True, null=True)  # Field name made lowercase.
    quantity = models.SmallIntegerField(blank=True, null=True)
    arrivedatekey = models.IntegerField(db_column='Arrivedatekey', blank=True, null=True)  # Field name made lowercase.
    takeofftimekey = models.IntegerField(db_column='TakeoffTimekey', blank=True, null=True)  # Field name made lowercase.
    printticketno = models.IntegerField(blank=True, null=True)
    recordno = models.CharField(db_column='RecordNO', max_length=6, blank=True)  # Field name made lowercase.
    falsebookreason = models.CharField(db_column='FalseBookReason', max_length=1, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    statuschanged = models.NullBooleanField(db_column='StatusChanged')  # Field name made lowercase.
    fu_persons = models.SmallIntegerField(db_column='FU_persons', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(max_length=20, blank=True)
    issurface = models.CharField(db_column='IsSurface', max_length=1, blank=True)  # Field name made lowercase.
    saleprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    waitk = models.CharField(db_column='WaitK', max_length=1, blank=True)  # Field name made lowercase.
    forcontrol = models.CharField(db_column='Forcontrol', max_length=1, blank=True)  # Field name made lowercase.
    corpservicefee = models.DecimalField(db_column='CorpServiceFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    iscorpagreement = models.CharField(db_column='IsCorpAgreement', max_length=1, blank=True)  # Field name made lowercase.
    rcepolicy = models.CharField(db_column='RCEPolicy', max_length=6, blank=True)  # Field name made lowercase.
    qprice = models.DecimalField(db_column='QPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    bfreturn = models.CharField(db_column='BfReturn', max_length=1, blank=True)  # Field name made lowercase.
    ptcmd = models.CharField(db_column='PTCmd', max_length=25, blank=True)  # Field name made lowercase.
    policytype = models.CharField(db_column='PolicyType', max_length=1, blank=True)  # Field name made lowercase.
    productsource = models.SmallIntegerField(db_column='ProductSource', blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    rebateamount = models.DecimalField(db_column='RebateAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    paymentstatus = models.SmallIntegerField(db_column='PaymentStatus', blank=True, null=True)  # Field name made lowercase.
    paidamount = models.DecimalField(db_column='PaidAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    rebatepolicyid = models.IntegerField(db_column='RebatePolicyID', blank=True, null=True)  # Field name made lowercase.
    rebatetraceid = models.IntegerField(db_column='RebateTraceID', blank=True, null=True)  # Field name made lowercase.
    officeno = models.CharField(db_column='OfficeNo', max_length=10, blank=True)  # Field name made lowercase.
    subclassrn = models.CharField(db_column='SubClassRN', max_length=3, blank=True)  # Field name made lowercase.
    productattribute = models.CharField(db_column='ProductAttribute', max_length=50, blank=True)  # Field name made lowercase.
    paydate = models.DateTimeField(db_column='PayDate', blank=True, null=True)  # Field name made lowercase.
    adtk = models.DateTimeField(db_column='Adtk', blank=True, null=True)  # Field name made lowercase.
    packageattachprice = models.DecimalField(db_column='PackageAttachPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    packageattachnumber = models.IntegerField(db_column='PackageAttachNumber', blank=True, null=True)  # Field name made lowercase.
    passengercount = models.IntegerField(db_column='PassengerCount', blank=True, null=True)  # Field name made lowercase.
    airlinerecordno = models.CharField(db_column='AirlineRecordNo', max_length=10, blank=True)  # Field name made lowercase.
    pataprice = models.IntegerField(db_column='pataPrice', blank=True, null=True)  # Field name made lowercase.
    beforepataprice = models.IntegerField(db_column='beforePataPrice', blank=True, null=True)  # Field name made lowercase.
    policyid = models.BigIntegerField(blank=True, null=True)
    inventorytype = models.CharField(db_column='InventoryType', max_length=10, blank=True)  # Field name made lowercase.
    segmentno = models.SmallIntegerField(db_column='SegmentNo', blank=True, null=True)  # Field name made lowercase.
    flightagencyfork = models.IntegerField(db_column='FlightAgencyForK', blank=True, null=True)  # Field name made lowercase.
    applyflag = models.CharField(db_column='ApplyFlag', max_length=1, blank=True)  # Field name made lowercase.
    applytype = models.SmallIntegerField(db_column='ApplyType', blank=True, null=True)  # Field name made lowercase.
    policycategory = models.CharField(db_column='PolicyCategory', max_length=50, blank=True)  # Field name made lowercase.
    saletype = models.CharField(db_column='SaleType', max_length=50, blank=True)  # Field name made lowercase.
    agreementid = models.CharField(db_column='Agreementid', max_length=20, blank=True)  # Field name made lowercase.
    policycode = models.CharField(db_column='PolicyCode', max_length=50, blank=True)  # Field name made lowercase.
    salerate = models.DecimalField(max_digits=6, decimal_places=4, blank=True, null=True)
    classtypename = models.CharField(db_column='ClassTypeName', max_length=50, blank=True)  # Field name made lowercase.
    d = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = False
        db_table = 'FactFltSegment_Uid'


class Facthotelorder(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    room = models.IntegerField(db_column='Room', blank=True, null=True)  # Field name made lowercase.
    room_chgid = models.IntegerField(db_column='Room_ChgID', blank=True, null=True)  # Field name made lowercase.
    hotel = models.IntegerField(db_column='Hotel', blank=True, null=True)  # Field name made lowercase.
    hotel_chgid = models.IntegerField(db_column='Hotel_ChgID', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=20, blank=True)  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=1, blank=True)  # Field name made lowercase.
    orderdatekey = models.IntegerField(db_column='OrderDateKey', blank=True, null=True)  # Field name made lowercase.
    customereval = models.DecimalField(db_column='CustomerEval', max_digits=3, decimal_places=1, blank=True, null=True)  # Field name made lowercase.
    earlyarrivaltime = models.DateTimeField(db_column='EarlyArrivalTime', blank=True, null=True)  # Field name made lowercase.
    arrival = models.DateTimeField(db_column='Arrival', blank=True, null=True)  # Field name made lowercase.
    arrivalkey = models.IntegerField(db_column='ArrivalKey', blank=True, null=True)  # Field name made lowercase.
    departure = models.DateTimeField(db_column='Departure', blank=True, null=True)  # Field name made lowercase.
    departurekey = models.IntegerField(db_column='DepartureKey', blank=True, null=True)  # Field name made lowercase.
    etd = models.DateTimeField(db_column='ETD', blank=True, null=True)  # Field name made lowercase.
    etdkey = models.IntegerField(db_column='ETDKey', blank=True, null=True)  # Field name made lowercase.
    ord_persons = models.SmallIntegerField(blank=True, null=True)
    clientname = models.CharField(db_column='ClientName', max_length=200, blank=True)  # Field name made lowercase.
    modifyreason = models.CharField(db_column='ModifyReason', max_length=10, blank=True)  # Field name made lowercase.
    holdroomtype = models.CharField(db_column='HoldRoomType', max_length=1, blank=True)  # Field name made lowercase.
    ord_quantity = models.SmallIntegerField(blank=True, null=True)
    cii_quantity = models.SmallIntegerField(blank=True, null=True)
    ord_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cii_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ord_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cii_receivable = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cii_payable = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cii_ac_realget = models.DecimalField(db_column='cii_AC_Realget', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    billheadid = models.IntegerField(db_column='BillHeadID', blank=True, null=True)  # Field name made lowercase.
    hasbillhead = models.CharField(db_column='HasBillHead', max_length=1, blank=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=30, blank=True)  # Field name made lowercase.
    referencetype = models.CharField(db_column='ReferenceType', max_length=1, blank=True)  # Field name made lowercase.
    reference = models.IntegerField(db_column='Reference', blank=True, null=True)  # Field name made lowercase.
    referenceby = models.IntegerField(db_column='ReferenceBy', blank=True, null=True)  # Field name made lowercase.
    validity = models.CharField(max_length=1, blank=True)
    vc = models.IntegerField(blank=True, null=True)
    vcby = models.IntegerField(blank=True, null=True)
    isonline = models.CharField(db_column='IsOnline', max_length=1, blank=True)  # Field name made lowercase.
    ispackageorder = models.CharField(db_column='IsPackageOrder', max_length=1, blank=True)  # Field name made lowercase.
    packageorderid = models.IntegerField(db_column='PackageOrderID', blank=True, null=True)  # Field name made lowercase.
    golduserlevel = models.CharField(db_column='GoldUserLevel', max_length=1, blank=True)  # Field name made lowercase.
    ordertype = models.SmallIntegerField(db_column='OrderType', blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True)  # Field name made lowercase.
    paymenttype = models.CharField(db_column='PaymentType', max_length=5, blank=True)  # Field name made lowercase.
    balancetype = models.CharField(db_column='BalanceType', max_length=2, blank=True)  # Field name made lowercase.
    guarantee = models.CharField(db_column='Guarantee', max_length=1, blank=True)  # Field name made lowercase.
    allneedguarantee = models.CharField(db_column='AllNeedGuarantee', max_length=1, blank=True)  # Field name made lowercase.
    cancelreason = models.CharField(db_column='CancelReason', max_length=10, blank=True)  # Field name made lowercase.
    famount = models.DecimalField(db_column='FAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    fcostamount = models.DecimalField(db_column='FCostAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    grouporderclass = models.CharField(db_column='GroupOrderClass', max_length=1, blank=True)  # Field name made lowercase.
    vipgrade = models.SmallIntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    clientcomefrom = models.SmallIntegerField(db_column='ClientComeFrom', blank=True, null=True)  # Field name made lowercase.
    delaytimes = models.SmallIntegerField(db_column='DelayTimes', blank=True, null=True)  # Field name made lowercase.
    balanceperiod = models.CharField(db_column='BalancePeriod', max_length=1, blank=True)  # Field name made lowercase.
    corp_paytype = models.CharField(db_column='Corp_PayType', max_length=3, blank=True)  # Field name made lowercase.
    ord_roomstatus = models.CharField(db_column='ord_RoomStatus', max_length=1, blank=True)  # Field name made lowercase.
    ord_roomnum = models.IntegerField(blank=True, null=True)
    ave_recommendlevel = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    ave_price = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ord_advanceday = models.SmallIntegerField(blank=True, null=True)
    ord_source = models.CharField(db_column='ord_Source', max_length=1, blank=True)  # Field name made lowercase.
    ord_days = models.SmallIntegerField(blank=True, null=True)
    commission_1st = models.DecimalField(db_column='Commission_1st', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cii_roomnum = models.SmallIntegerField(blank=True, null=True)
    isnoshow = models.CharField(db_column='IsNoShow', max_length=1, blank=True)  # Field name made lowercase.
    cii_chk_quantity = models.SmallIntegerField(blank=True, null=True)
    cii_nos_quantity = models.SmallIntegerField(db_column='cii_NOS_quantity', blank=True, null=True)  # Field name made lowercase.
    isacmodify = models.CharField(db_column='IsACModify', max_length=1, blank=True)  # Field name made lowercase.
    uidname = models.CharField(db_column='UidName', max_length=50, blank=True)  # Field name made lowercase.
    custid = models.IntegerField(db_column='CustID', blank=True, null=True)  # Field name made lowercase.
    isholdroom = models.CharField(db_column='IsHoldRoom', max_length=1, blank=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(blank=True, null=True)
    auditkey = models.SmallIntegerField(blank=True, null=True)
    freesale = models.CharField(db_column='FreeSale', max_length=1, blank=True)  # Field name made lowercase.
    recommendlevel = models.SmallIntegerField(db_column='RecommendLevel', blank=True, null=True)  # Field name made lowercase.
    cii_amount_valid = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    isadv = models.CharField(db_column='IsADV', max_length=1, blank=True)  # Field name made lowercase.
    iscorp = models.CharField(db_column='IsCorp', max_length=1, blank=True)  # Field name made lowercase.
    cii_adv_quantity = models.IntegerField(blank=True, null=True)
    ctripcardno = models.CharField(db_column='CtripCardNO', max_length=20, blank=True)  # Field name made lowercase.
    u_persons = models.SmallIntegerField(db_column='U_persons', blank=True, null=True)  # Field name made lowercase.
    fu_persons = models.SmallIntegerField(db_column='FU_persons', blank=True, null=True)  # Field name made lowercase.
    fu_type = models.SmallIntegerField(db_column='FU_Type', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(max_length=20, blank=True)
    ip1 = models.SmallIntegerField(db_column='IP1', blank=True, null=True)  # Field name made lowercase.
    ip2 = models.SmallIntegerField(db_column='IP2', blank=True, null=True)  # Field name made lowercase.
    ip3 = models.SmallIntegerField(db_column='IP3', blank=True, null=True)  # Field name made lowercase.
    ip4 = models.SmallIntegerField(db_column='IP4', blank=True, null=True)  # Field name made lowercase.
    frompackageorder = models.CharField(db_column='FromPackageOrder', max_length=1, blank=True)  # Field name made lowercase.
    custtype = models.CharField(db_column='CustType', max_length=2, blank=True)  # Field name made lowercase.
    sysconfirmtype = models.CharField(db_column='SysConfirmType', max_length=1, blank=True)  # Field name made lowercase.
    confirmdate = models.DateTimeField(db_column='ConfirmDate', blank=True, null=True)  # Field name made lowercase.
    modifieddate = models.DateTimeField(db_column='ModifiedDate', blank=True, null=True)  # Field name made lowercase.
    processdate = models.DateTimeField(db_column='ProcessDate', blank=True, null=True)  # Field name made lowercase.
    confirmdeadline = models.DateTimeField(db_column='ConFirmDeadLine', blank=True, null=True)  # Field name made lowercase.
    hotel_checkin = models.CharField(db_column='Hotel_CheckIN', max_length=1, blank=True)  # Field name made lowercase.
    isdiffprice = models.CharField(db_column='IsDiffPrice', max_length=1, blank=True)  # Field name made lowercase.
    chgtimes = models.IntegerField(db_column='ChgTimes', blank=True, null=True)  # Field name made lowercase.
    isebooking = models.CharField(db_column='IsEbooking', max_length=1, blank=True)  # Field name made lowercase.
    receivetype = models.CharField(db_column='ReceiveType', max_length=1, blank=True)  # Field name made lowercase.
    readtime = models.DateTimeField(db_column='ReadTime', blank=True, null=True)  # Field name made lowercase.
    receiver = models.CharField(db_column='Receiver', max_length=20, blank=True)  # Field name made lowercase.
    cutofftime = models.DateTimeField(db_column='CutOffTime', blank=True, null=True)  # Field name made lowercase.
    urgencylevel = models.SmallIntegerField(db_column='UrgencyLevel', blank=True, null=True)  # Field name made lowercase.
    isfromnoroom = models.CharField(db_column='IsFromNoRoom', max_length=1, blank=True)  # Field name made lowercase.
    lastcanceltime = models.DateTimeField(db_column='LastCancelTime', blank=True, null=True)  # Field name made lowercase.
    processoper = models.CharField(db_column='ProcessOper', max_length=20, blank=True)  # Field name made lowercase.
    confirmoper = models.CharField(db_column='ConfirmOper', max_length=20, blank=True)  # Field name made lowercase.
    confirmtype = models.CharField(db_column='ConfirmType', max_length=3, blank=True)  # Field name made lowercase.
    ebookingprocess = models.CharField(db_column='EbookingProcess', max_length=1, blank=True)  # Field name made lowercase.
    getfaxtime = models.DateTimeField(db_column='GetFaxTime', blank=True, null=True)  # Field name made lowercase.
    cii_uni_quantity = models.IntegerField(blank=True, null=True)
    readtime_ebooking = models.DateTimeField(db_column='ReadTime_Ebooking', blank=True, null=True)  # Field name made lowercase.
    receiver_ebooking = models.CharField(db_column='Receiver_Ebooking', max_length=20, blank=True)  # Field name made lowercase.
    readtime_fax = models.DateTimeField(db_column='ReadTime_Fax', blank=True, null=True)  # Field name made lowercase.
    receiver_fax = models.CharField(db_column='Receiver_Fax', max_length=20, blank=True)  # Field name made lowercase.
    isprocessed = models.CharField(db_column='IsProcessed', max_length=1, blank=True)  # Field name made lowercase.
    contactname = models.CharField(db_column='ContactName', max_length=50, blank=True)  # Field name made lowercase.
    remarktype = models.SmallIntegerField(blank=True, null=True)
    contacttel = models.CharField(db_column='ContactTel', max_length=50, blank=True)  # Field name made lowercase.
    mobilephone = models.CharField(db_column='MobilePhone', max_length=20, blank=True)  # Field name made lowercase.
    noshowreason = models.SmallIntegerField(db_column='NoshowReason', blank=True, null=True)  # Field name made lowercase.
    holddeadline = models.IntegerField(db_column='HoldDeadLine', blank=True, null=True)  # Field name made lowercase.
    noshowauditoper = models.CharField(db_column='NoShowAuditOper', max_length=20, blank=True)  # Field name made lowercase.
    noshowaudittime = models.DateTimeField(db_column='NoShowAuditTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    supereid = models.CharField(db_column='SuperEid', max_length=20, blank=True)  # Field name made lowercase.
    upselling = models.CharField(db_column='Upselling', max_length=1, blank=True)  # Field name made lowercase.
    usefg = models.CharField(db_column='USEFG', max_length=1, blank=True)  # Field name made lowercase.
    isfhpkg = models.CharField(db_column='IsFHpkg', max_length=1, blank=True)  # Field name made lowercase.
    houradjuest = models.IntegerField(db_column='HourAdjuest', blank=True, null=True)  # Field name made lowercase.
    ishotelconfirm = models.CharField(db_column='IsHotelConfirm', max_length=1, blank=True)  # Field name made lowercase.
    isswitch = models.CharField(db_column='IsSwitch', max_length=1, blank=True)  # Field name made lowercase.
    roomgiftid = models.IntegerField(db_column='RoomGiftID', blank=True, null=True)  # Field name made lowercase.
    ac_receivebranch = models.IntegerField(db_column='AC_ReceiveBranch', blank=True, null=True)  # Field name made lowercase.
    serverfromid = models.IntegerField(db_column='ServerFromID', blank=True, null=True)  # Field name made lowercase.
    isstraightconnect = models.CharField(db_column='IsStraightConnect', max_length=1, blank=True)  # Field name made lowercase.
    switchstatus = models.SmallIntegerField(db_column='SwitchStatus', blank=True, null=True)  # Field name made lowercase.
    ac_gatheringtype = models.SmallIntegerField(db_column='AC_GatheringType', blank=True, null=True)  # Field name made lowercase.
    guaranteeway = models.CharField(db_column='GuaranteeWay', max_length=1, blank=True)  # Field name made lowercase.
    ac_userpaydate = models.DateTimeField(db_column='AC_UserPayDate', blank=True, null=True)  # Field name made lowercase.
    aggquantity = models.IntegerField(db_column='AggQuantity', blank=True, null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    gtickettype = models.CharField(db_column='GTicketType', max_length=1, blank=True)  # Field name made lowercase.
    actualroom = models.IntegerField(db_column='ActualRoom', blank=True, null=True)  # Field name made lowercase.
    c_language = models.CharField(db_column='c_Language', max_length=3, blank=True)  # Field name made lowercase.
    ac_mroper = models.CharField(db_column='AC_MROper', max_length=20, blank=True)  # Field name made lowercase.
    custlastpaydate = models.DateTimeField(db_column='CustLastPayDate', blank=True, null=True)  # Field name made lowercase.
    ac_servicefee = models.DecimalField(db_column='AC_ServiceFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    isinsurance = models.CharField(db_column='IsInsurance', max_length=1, blank=True)  # Field name made lowercase.
    ordtmoney = models.DecimalField(db_column='OrdTMoney', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    riskdata = models.IntegerField(db_column='RiskData', blank=True, null=True)  # Field name made lowercase.
    isemailconfirm = models.CharField(db_column='ISEmailConfirm', max_length=1, blank=True)  # Field name made lowercase.
    phonesystemid = models.IntegerField(db_column='PhoneSystemID', blank=True, null=True)  # Field name made lowercase.
    remarks = models.CharField(db_column='Remarks', max_length=400, blank=True)  # Field name made lowercase.
    ismaskedorder = models.IntegerField(db_column='IsMaskedOrder', blank=True, null=True)  # Field name made lowercase.
    allianceid = models.IntegerField(db_column='AllianceID', blank=True, null=True)  # Field name made lowercase.
    sid = models.IntegerField(db_column='SID', blank=True, null=True)  # Field name made lowercase.
    emailconfirmstatus = models.CharField(db_column='EmailConfirmStatus', max_length=1, blank=True)  # Field name made lowercase.
    mobileconfirmstatus = models.CharField(db_column='MobileConfirmStatus', max_length=1, blank=True)  # Field name made lowercase.
    commentgiftsendstatus = models.CharField(db_column='CommentGiftSendStatus', max_length=1, blank=True)  # Field name made lowercase.
    iscashback = models.CharField(db_column='IsCashBack', max_length=1, blank=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'FactHotelOrder'


class Facthotelroom(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    eta = models.DateTimeField(db_column='ETA')  # Field name made lowercase.
    quantity = models.SmallIntegerField(db_column='Quantity', blank=True, null=True)  # Field name made lowercase.
    recommendlevel = models.SmallIntegerField(db_column='RecommendLevel', blank=True, null=True)  # Field name made lowercase.
    userlimited = models.IntegerField(db_column='UserLimited', blank=True, null=True)  # Field name made lowercase.
    roomstatus = models.CharField(db_column='RoomStatus', max_length=1, blank=True)  # Field name made lowercase.
    etd = models.DateTimeField(db_column='ETD', blank=True, null=True)  # Field name made lowercase.
    price = models.DecimalField(db_column='Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    breakfast = models.SmallIntegerField(db_column='Breakfast', blank=True, null=True)  # Field name made lowercase.
    addbreakfast = models.IntegerField(db_column='AddBreakfast', blank=True, null=True)  # Field name made lowercase.
    addbreakfastprice = models.DecimalField(db_column='AddBreakfastPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    exchange = models.DecimalField(db_column='Exchange', max_digits=10, decimal_places=5, blank=True, null=True)  # Field name made lowercase.
    rmbtousd = models.DecimalField(db_column='RMBtoUSD', max_digits=8, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    isholdroom = models.CharField(db_column='IsHoldRoom', max_length=1, blank=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(blank=True, null=True)
    auditkey = models.SmallIntegerField(blank=True, null=True)
    room = models.IntegerField(db_column='Room', blank=True, null=True)  # Field name made lowercase.
    room_chgid = models.IntegerField(db_column='Room_ChgID', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(blank=True, null=True)
    orderstatus = models.CharField(max_length=1, blank=True)
    currency = models.CharField(max_length=3, blank=True)
    ischeckdelay = models.CharField(db_column='IsCheckDelay', max_length=1, blank=True)  # Field name made lowercase.
    ppdcamount = models.DecimalField(db_column='PPDCAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='Insertdt', blank=True, null=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'FactHotelRoom'


class FacthtlorderRefund(models.Model):
    id = models.AutoField(db_column='ID')  # Field name made lowercase.
    rid = models.IntegerField(db_column='RID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    rcoper = models.CharField(db_column='RCOper', max_length=20, blank=True)  # Field name made lowercase.
    rctime = models.DateTimeField(db_column='RCTime', blank=True, null=True)  # Field name made lowercase.
    balancetype = models.CharField(db_column='BalanceType', max_length=2, blank=True)  # Field name made lowercase.
    paycustomer = models.DecimalField(db_column='PayCustomer', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payhotel = models.DecimalField(db_column='PayHotel', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    refundreason = models.CharField(db_column='RefundReason', max_length=20, blank=True)  # Field name made lowercase.
    refundesc = models.CharField(db_column='Refundesc', max_length=200, blank=True)  # Field name made lowercase.
    pcbalance = models.DecimalField(db_column='PcBalance', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    phbalance = models.DecimalField(db_column='PhBalance', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    isnoshow = models.CharField(db_column='IsNoshow', max_length=1, blank=True)  # Field name made lowercase.
    userpaytime = models.DateTimeField(db_column='UserPaytime', blank=True, null=True)  # Field name made lowercase.
    paycustomerday = models.DecimalField(db_column='PayCustomerDay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    payhotelday = models.DecimalField(db_column='PayHotelDay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    roomnights = models.DecimalField(db_column='RoomNights', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    phcostamount = models.DecimalField(db_column='PhCostAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    commissiontype = models.IntegerField(db_column='CommissionType', blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True)  # Field name made lowercase.
    bankaddress = models.CharField(db_column='BankAddress', max_length=100, blank=True)  # Field name made lowercase.
    refundreasoncode = models.CharField(db_column='RefundReasonCode', max_length=3, blank=True)  # Field name made lowercase.
    refundclass = models.CharField(db_column='RefundClass', max_length=1)  # Field name made lowercase.
    refundauto = models.CharField(db_column='RefundAuto', max_length=1, blank=True)  # Field name made lowercase.
    paycity = models.IntegerField(db_column='PayCity', blank=True, null=True)  # Field name made lowercase.
    jobstatus = models.CharField(db_column='JobStatus', max_length=1, blank=True)  # Field name made lowercase.
    jobtime = models.DateTimeField(db_column='JobTime', blank=True, null=True)  # Field name made lowercase.
    cardnumber = models.CharField(db_column='CardNumber', max_length=50, blank=True)  # Field name made lowercase.
    cardtype = models.IntegerField(db_column='CardType', blank=True, null=True)  # Field name made lowercase.
    hotel = models.IntegerField(db_column='Hotel', blank=True, null=True)  # Field name made lowercase.
    refundstatus = models.CharField(db_column='RefundStatus', max_length=1, blank=True)  # Field name made lowercase.
    commissionamount = models.DecimalField(db_column='CommissionAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    billid = models.IntegerField(db_column='BillID', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    auditeid = models.CharField(db_column='AuditEid', max_length=20, blank=True)  # Field name made lowercase.
    auditdate = models.DateTimeField(db_column='AuditDate', blank=True, null=True)  # Field name made lowercase.
    d = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'FactHtlOrder_Refund'


class Factmicrochannelgroup(models.Model):
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    microgroupdate = models.DateTimeField(db_column='MicroGroupDate', blank=True, null=True)  # Field name made lowercase.
    ctripcard = models.CharField(db_column='CtripCard', max_length=50, blank=True)  # Field name made lowercase.
    isingroup = models.CharField(db_column='IsInGroup', max_length=10, blank=True)  # Field name made lowercase.
    returndate = models.CharField(max_length=10, blank=True)
    mobile = models.CharField(max_length=50, blank=True)
    insertdate = models.DateTimeField(db_column='Insertdate', blank=True, null=True)  # Field name made lowercase.
    takeoffdate = models.CharField(db_column='Takeoffdate', max_length=10, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactMicroChannelGroup'


class Factpaymentflow(models.Model):
    billitemid = models.IntegerField(db_column='BillItemID')  # Field name made lowercase.
    billid = models.IntegerField(db_column='BillID', blank=True, null=True)  # Field name made lowercase.
    billno = models.BigIntegerField(db_column='BillNO', blank=True, null=True)  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    dealstatus = models.IntegerField(db_column='DealStatus', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=50, blank=True)  # Field name made lowercase.
    gatheringtype = models.CharField(db_column='GatheringType', max_length=1, blank=True)  # Field name made lowercase.
    gatheringname = models.CharField(db_column='GatheringName', max_length=4)  # Field name made lowercase.
    pathtype = models.CharField(db_column='PathType', max_length=10, blank=True)  # Field name made lowercase.
    pathtypename = models.CharField(db_column='PathTypeName', max_length=10, blank=True)  # Field name made lowercase.
    willcancel = models.CharField(db_column='WillCancel', max_length=1, blank=True)  # Field name made lowercase.
    referenceno = models.CharField(db_column='ReferenceNo', max_length=50, blank=True)  # Field name made lowercase.
    merchantid = models.IntegerField(db_column='MerchantID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    returnamount = models.DecimalField(db_column='ReturnAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    exchangerate = models.DecimalField(db_column='ExchangeRate', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=20, blank=True)  # Field name made lowercase.
    paymentuid = models.CharField(db_column='PaymentUid', max_length=20, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    isprocessing = models.NullBooleanField(db_column='IsProcessing')  # Field name made lowercase.
    paydeadline = models.DateTimeField(db_column='PayDeadLine', blank=True, null=True)  # Field name made lowercase.
    isenabled = models.NullBooleanField(db_column='IsEnabled')  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT')  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDt')  # Field name made lowercase.
    prepaytype = models.CharField(db_column='PrepayType', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactPaymentFlow'


class FactpaymentorderPkgFh(models.Model):
    platform = models.CharField(max_length=100, blank=True)
    creationdate = models.CharField(max_length=100, blank=True)
    orderid = models.CharField(max_length=50, blank=True)
    uid = models.CharField(max_length=50, blank=True)
    merchantid = models.CharField(max_length=50, blank=True)
    paymentwayid = models.CharField(max_length=100, blank=True)
    paymentwayidg_field = models.CharField(db_column='paymentwayidg ', max_length=100, blank=True)  # Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    paywayid_global_field = models.CharField(db_column='paywayid_global ', max_length=100, blank=True)  # Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    isoldcard = models.IntegerField(blank=True, null=True)
    isquickorder = models.IntegerField(blank=True, null=True)
    usedtosubmit = models.IntegerField(blank=True, null=True)
    isguarantee = models.CharField(max_length=100, blank=True)
    ismix = models.IntegerField(blank=True, null=True)
    ismixg = models.IntegerField(blank=True, null=True)
    isselect = models.IntegerField(blank=True, null=True)
    issubmit = models.IntegerField(blank=True, null=True)
    issubmitg = models.IntegerField(blank=True, null=True)
    applypay = models.IntegerField(blank=True, null=True)
    applypaytoql = models.IntegerField(blank=True, null=True)
    applypays = models.IntegerField(blank=True, null=True)
    enterpaytime = models.CharField(max_length=50, blank=True)
    billtime = models.CharField(max_length=50, blank=True)
    applypaytime = models.CharField(max_length=50, blank=True)
    system = models.CharField(max_length=50, blank=True)
    clientversion = models.CharField(max_length=50, blank=True)
    formattedpaytype = models.CharField(max_length=50, blank=True)
    formattedsubpaytype = models.CharField(max_length=50, blank=True)
    paychannel = models.CharField(max_length=50, blank=True)
    inblacklist = models.IntegerField(blank=True, null=True)
    transno = models.CharField(max_length=50, blank=True)
    actionmode = models.CharField(max_length=50, blank=True)
    authflag = models.CharField(max_length=50, blank=True)
    originalrisklevel = models.IntegerField(blank=True, null=True)
    paymentwayid_cardg = models.CharField(max_length=50, blank=True)
    paymentwayid_thridg = models.CharField(max_length=50, blank=True)
    paymentwayid_cashg = models.CharField(max_length=50, blank=True)
    paymentwayid_coupon = models.CharField(max_length=50, blank=True)
    isneedrealtimeapply = models.NullBooleanField()
    main_cardrisklevel = models.CharField(max_length=50, blank=True)
    main_needrealtimeapply = models.CharField(max_length=50, blank=True)
    isfingerprintpay = models.NullBooleanField()
    amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    pathtype = models.CharField(max_length=50, blank=True)
    totalamount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    payamt_coupon = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    payamt_wallet = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sub_channelid = models.IntegerField(blank=True, null=True)
    sub_brandid = models.CharField(max_length=50, blank=True)
    gatheringtype = models.CharField(max_length=50, blank=True)
    paymentwayrptsid = models.CharField(max_length=50, blank=True)
    datekey = models.IntegerField(blank=True, null=True)
    language = models.CharField(max_length=50, blank=True)

    class Meta:
        managed = False
        db_table = 'FactPaymentOrder_Pkg_FH'


class FactsdpShHotel(models.Model):
    hotelid = models.IntegerField(db_column='HotelID')  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=200, blank=True)  # Field name made lowercase.
    inputmode = models.SmallIntegerField(db_column='InputMode', blank=True, null=True)  # Field name made lowercase.
    hotelstar = models.IntegerField(db_column='HotelStar', blank=True, null=True)  # Field name made lowercase.
    hotelcityid = models.IntegerField(db_column='HotelCityID', blank=True, null=True)  # Field name made lowercase.
    hotelcityname = models.CharField(db_column='HotelCityName', max_length=200, blank=True)  # Field name made lowercase.
    hoteldistrictid = models.IntegerField(db_column='HotelDistrictID', blank=True, null=True)  # Field name made lowercase.
    hoteldistrictname = models.CharField(db_column='HotelDistrictName', max_length=200, blank=True)  # Field name made lowercase.
    sort = models.IntegerField(db_column='Sort', blank=True, null=True)  # Field name made lowercase.
    createdata_user = models.CharField(db_column='CreateData_User', max_length=200, blank=True)  # Field name made lowercase.
    createdata_time = models.DateTimeField(db_column='CreateData_Time', blank=True, null=True)  # Field name made lowercase.
    datachange_user = models.CharField(db_column='DataChange_User', max_length=200, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    hotelstatus = models.SmallIntegerField(db_column='HotelStatus', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactSDP_SH_Hotel'


class FactsdpShOptionalhotel(models.Model):
    optionalhotelid = models.IntegerField(db_column='OptionalHotelID')  # Field name made lowercase.
    optionalhotelname = models.CharField(db_column='OptionalHotelName', max_length=200, blank=True)  # Field name made lowercase.
    optionaltype = models.CharField(db_column='OptionalType', max_length=100, blank=True)  # Field name made lowercase.
    optionalobjectid = models.IntegerField(db_column='OptionalObjectID', blank=True, null=True)  # Field name made lowercase.
    optionalstatus = models.SmallIntegerField(db_column='OptionalStatus', blank=True, null=True)  # Field name made lowercase.
    createdata_user = models.CharField(db_column='CreateData_User', max_length=200, blank=True)  # Field name made lowercase.
    createdata_time = models.DateTimeField(db_column='CreateData_Time', blank=True, null=True)  # Field name made lowercase.
    datachange_user = models.CharField(db_column='DataChange_User', max_length=200, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    optionaltypename = models.CharField(db_column='OptionalTypeName', max_length=200, blank=True)  # Field name made lowercase.
    ticketproductid = models.IntegerField(db_column='TicketProductID', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactSDP_SH_OptionalHotel'


class FactsdpShProduct(models.Model):
    productid = models.IntegerField(db_column='ProductID')  # Field name made lowercase.
    productcode = models.CharField(db_column='ProductCode', max_length=36, blank=True)  # Field name made lowercase.
    productname = models.CharField(db_column='ProductName', max_length=400, blank=True)  # Field name made lowercase.
    productdisplayname = models.CharField(db_column='ProductDisplayName', max_length=1000, blank=True)  # Field name made lowercase.
    recommendnum = models.FloatField(db_column='RecommendNum', blank=True, null=True)  # Field name made lowercase.
    bookbegintime = models.DateTimeField(db_column='BookBeginTime', blank=True, null=True)  # Field name made lowercase.
    bookendtime = models.DateTimeField(db_column='BookEndTime', blank=True, null=True)  # Field name made lowercase.
    bookdaynum = models.IntegerField(db_column='BookDayNum', blank=True, null=True)  # Field name made lowercase.
    pm = models.CharField(db_column='PM', max_length=100, blank=True)  # Field name made lowercase.
    golivebegintime = models.DateTimeField(db_column='GoliveBeginTime', blank=True, null=True)  # Field name made lowercase.
    goliveendtime = models.DateTimeField(db_column='GoliveEndTime', blank=True, null=True)  # Field name made lowercase.
    pme = models.CharField(db_column='PME', max_length=100, blank=True)  # Field name made lowercase.
    iseffective = models.NullBooleanField(db_column='IsEffective')  # Field name made lowercase.
    isgolive = models.NullBooleanField(db_column='IsGolive')  # Field name made lowercase.
    inputmode = models.SmallIntegerField(db_column='InputMode', blank=True, null=True)  # Field name made lowercase.
    isneedautoaddhotel = models.NullBooleanField(db_column='IsNeedAutoAddHotel')  # Field name made lowercase.
    productstatus = models.SmallIntegerField(db_column='ProductStatus', blank=True, null=True)  # Field name made lowercase.
    createdata_user = models.CharField(db_column='CreateData_User', max_length=200, blank=True)  # Field name made lowercase.
    createdata_time = models.DateTimeField(db_column='CreateData_Time', blank=True, null=True)  # Field name made lowercase.
    datachange_user = models.CharField(db_column='DataChange_User', max_length=200, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    sort = models.IntegerField(db_column='Sort', blank=True, null=True)  # Field name made lowercase.
    showspotdetailtype = models.SmallIntegerField(db_column='ShowSpotDetailType', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactSDP_SH_Product'


class FactsdpShProductdesc(models.Model):
    productdescid = models.IntegerField(db_column='ProductDescID')  # Field name made lowercase.
    desctype = models.IntegerField(db_column='DescType', blank=True, null=True)  # Field name made lowercase.
    productid = models.IntegerField(db_column='ProductID', blank=True, null=True)  # Field name made lowercase.
    desccontent = models.CharField(db_column='DescContent', max_length=4000, blank=True)  # Field name made lowercase.
    effectdate = models.DateTimeField(db_column='EffectDate', blank=True, null=True)  # Field name made lowercase.
    expiredate = models.DateTimeField(db_column='ExpireDate', blank=True, null=True)  # Field name made lowercase.
    sort = models.IntegerField(db_column='Sort', blank=True, null=True)  # Field name made lowercase.
    productdescstatus = models.SmallIntegerField(db_column='ProductDescStatus', blank=True, null=True)  # Field name made lowercase.
    createdata_user = models.CharField(db_column='CreateData_User', max_length=200, blank=True)  # Field name made lowercase.
    createdata_time = models.DateTimeField(db_column='CreateData_Time', blank=True, null=True)  # Field name made lowercase.
    datachange_user = models.CharField(db_column='DataChange_User', max_length=200, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactSDP_SH_ProductDesc'


class FactsdpTongchengTemp(models.Model):
    hotelname = models.CharField(max_length=100, blank=True)
    roomname = models.CharField(max_length=100, blank=True)
    htl_nights = models.IntegerField(blank=True, null=True)
    breakfast_new = models.CharField(max_length=20, blank=True)
    scenicname = models.CharField(max_length=1000, blank=True)
    ticketname = models.CharField(max_length=1000, blank=True)
    ticket_nights = models.IntegerField(blank=True, null=True)
    roomid = models.IntegerField(blank=True, null=True)
    hotelid = models.IntegerField(blank=True, null=True)
    htl_lowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    htl_lowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    htl_nextmonthlowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    htl_nextmonthlowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    resourceid = models.IntegerField(blank=True, null=True)
    productid = models.IntegerField(blank=True, null=True)
    ticket_lowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ticket_lowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ticket_nextmonthlowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ticket_nextmonthlowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    hotel_name = models.CharField(max_length=1000, blank=True)
    scenic_name = models.CharField(max_length=1000, blank=True)
    tclowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tclowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tcnextmonthlowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tcnextmonthlowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cityname = models.CharField(max_length=20, blank=True)
    center = models.CharField(max_length=100, blank=True)
    ctripticketid = models.FloatField(db_column='CtripTicketID', blank=True, null=True)  # Field name made lowercase.
    city = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactSDP_TongCheng_temp'


class Factticketpurchase(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=50, blank=True)  # Field name made lowercase.
    resourcefrom = models.IntegerField(db_column='ResourceFrom', blank=True, null=True)  # Field name made lowercase.
    saleschannel = models.IntegerField(db_column='salesChannel', blank=True, null=True)  # Field name made lowercase.
    butype = models.IntegerField(db_column='BUType', blank=True, null=True)  # Field name made lowercase.
    productcategoryname = models.CharField(db_column='ProductCategoryName', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(db_column='Pkg', blank=True, null=True)  # Field name made lowercase.
    pkgname = models.CharField(db_column='PkgName', max_length=200, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=50, blank=True)  # Field name made lowercase.
    purchase_manager = models.CharField(db_column='Purchase_manager', max_length=100, blank=True)  # Field name made lowercase.
    operater_manager = models.CharField(max_length=100, blank=True)
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    start_region = models.CharField(max_length=50, blank=True)
    dest_region = models.CharField(max_length=50, blank=True)
    ordertype = models.CharField(db_column='OrderType', max_length=50, blank=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate', blank=True, null=True)  # Field name made lowercase.
    order_ahead_num = models.IntegerField(blank=True, null=True)
    interval_day = models.IntegerField(blank=True, null=True)
    flight = models.CharField(db_column='Flight', max_length=100, blank=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=200, blank=True)  # Field name made lowercase.
    resourcetype = models.IntegerField(db_column='ResourceType', blank=True, null=True)  # Field name made lowercase.
    itemid = models.CharField(db_column='ItemId', max_length=100, blank=True)  # Field name made lowercase.
    tourid = models.IntegerField(db_column='tourId', blank=True, null=True)  # Field name made lowercase.
    tourstatus = models.CharField(db_column='TourStatus', max_length=16, blank=True)  # Field name made lowercase.
    use_flt = models.CharField(max_length=8, blank=True)
    use_sys_flt = models.CharField(max_length=8, blank=True)
    item_have_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_have_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_no_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity = models.IntegerField(blank=True, null=True)
    sys_flt_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_persons = models.IntegerField(blank=True, null=True)
    total_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    child_persons = models.IntegerField(blank=True, null=True)
    baby_persons = models.IntegerField(blank=True, null=True)
    statusname = models.CharField(db_column='StatusName', max_length=100, blank=True)  # Field name made lowercase.
    flightagencyname = models.CharField(db_column='FlightAgencyName', max_length=500, blank=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='SubOrderID', max_length=500, blank=True)  # Field name made lowercase.
    last_opt_time = models.DateTimeField(blank=True, null=True)
    confirmhour = models.IntegerField(db_column='ConfirmHour', blank=True, null=True)  # Field name made lowercase.
    firsttakeoffdate = models.DateTimeField(db_column='FirstTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    lasttakeoffdate = models.DateTimeField(db_column='LastTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    isopen = models.IntegerField(db_column='IsOpen', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase'


class Factticketpurchase4126(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=50, blank=True)  # Field name made lowercase.
    resourcefrom = models.IntegerField(db_column='ResourceFrom', blank=True, null=True)  # Field name made lowercase.
    saleschannel = models.IntegerField(db_column='salesChannel', blank=True, null=True)  # Field name made lowercase.
    butype = models.IntegerField(db_column='BUType', blank=True, null=True)  # Field name made lowercase.
    productcategoryname = models.CharField(db_column='ProductCategoryName', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(db_column='Pkg', blank=True, null=True)  # Field name made lowercase.
    pkgname = models.CharField(db_column='PkgName', max_length=100, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=50, blank=True)  # Field name made lowercase.
    purchase_manager = models.CharField(db_column='Purchase_manager', max_length=100, blank=True)  # Field name made lowercase.
    operater_manager = models.CharField(max_length=100, blank=True)
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    start_region = models.CharField(max_length=50, blank=True)
    dest_region = models.CharField(max_length=50, blank=True)
    ordertype = models.CharField(db_column='OrderType', max_length=50, blank=True)  # Field name made lowercase.
    orderdate = models.CharField(db_column='OrderDate', max_length=50, blank=True)  # Field name made lowercase.
    takeoffdate = models.CharField(db_column='TakeOffDate', max_length=50, blank=True)  # Field name made lowercase.
    order_ahead_num = models.IntegerField(blank=True, null=True)
    interval_day = models.IntegerField(blank=True, null=True)
    flight = models.CharField(db_column='Flight', max_length=100, blank=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=200, blank=True)  # Field name made lowercase.
    resourcetype = models.IntegerField(db_column='ResourceType', blank=True, null=True)  # Field name made lowercase.
    itemid = models.CharField(db_column='ItemId', max_length=100, blank=True)  # Field name made lowercase.
    tourid = models.IntegerField(db_column='tourId', blank=True, null=True)  # Field name made lowercase.
    tourstatus = models.CharField(db_column='TourStatus', max_length=16, blank=True)  # Field name made lowercase.
    use_flt = models.CharField(max_length=8, blank=True)
    use_sys_flt = models.CharField(max_length=8, blank=True)
    item_have_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_have_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_no_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity = models.IntegerField(blank=True, null=True)
    sys_flt_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_persons = models.IntegerField(blank=True, null=True)
    total_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    child_persons = models.IntegerField(blank=True, null=True)
    baby_persons = models.IntegerField(blank=True, null=True)
    statusname = models.CharField(db_column='StatusName', max_length=100, blank=True)  # Field name made lowercase.
    flightagencyname = models.CharField(db_column='FlightAgencyName', max_length=200, blank=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='SubOrderID', max_length=500, blank=True)  # Field name made lowercase.
    confirmhour = models.IntegerField(db_column='ConfirmHour', blank=True, null=True)  # Field name made lowercase.
    firsttakeoffdate = models.DateTimeField(db_column='FirstTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    lasttakeoffdate = models.DateTimeField(db_column='LastTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    isopen = models.IntegerField(db_column='IsOpen', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_4126'


class Factticketpurchase6869(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=50, blank=True)  # Field name made lowercase.
    resourcefrom = models.IntegerField(db_column='ResourceFrom', blank=True, null=True)  # Field name made lowercase.
    saleschannel = models.IntegerField(db_column='salesChannel', blank=True, null=True)  # Field name made lowercase.
    butype = models.IntegerField(db_column='BUType', blank=True, null=True)  # Field name made lowercase.
    productcategoryname = models.CharField(db_column='ProductCategoryName', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(db_column='Pkg', blank=True, null=True)  # Field name made lowercase.
    pkgname = models.CharField(db_column='PkgName', max_length=200, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=50, blank=True)  # Field name made lowercase.
    purchase_manager = models.CharField(db_column='Purchase_manager', max_length=100, blank=True)  # Field name made lowercase.
    operater_manager = models.CharField(max_length=100, blank=True)
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    start_region = models.CharField(max_length=50, blank=True)
    dest_region = models.CharField(max_length=50, blank=True)
    ordertype = models.CharField(db_column='OrderType', max_length=50, blank=True)  # Field name made lowercase.
    orderdate = models.CharField(db_column='OrderDate', max_length=50, blank=True)  # Field name made lowercase.
    takeoffdate = models.CharField(db_column='TakeOffDate', max_length=50, blank=True)  # Field name made lowercase.
    order_ahead_num = models.IntegerField(blank=True, null=True)
    interval_day = models.IntegerField(blank=True, null=True)
    flight = models.CharField(db_column='Flight', max_length=100, blank=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=200, blank=True)  # Field name made lowercase.
    resourcetype = models.IntegerField(db_column='ResourceType', blank=True, null=True)  # Field name made lowercase.
    itemid = models.CharField(db_column='ItemId', max_length=100, blank=True)  # Field name made lowercase.
    tourid = models.IntegerField(db_column='tourId', blank=True, null=True)  # Field name made lowercase.
    tourstatus = models.CharField(db_column='TourStatus', max_length=16, blank=True)  # Field name made lowercase.
    use_flt = models.CharField(max_length=8, blank=True)
    use_sys_flt = models.CharField(max_length=8, blank=True)
    item_have_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_have_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_no_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity = models.IntegerField(blank=True, null=True)
    sys_flt_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_persons = models.IntegerField(blank=True, null=True)
    total_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    child_persons = models.IntegerField(blank=True, null=True)
    baby_persons = models.IntegerField(blank=True, null=True)
    statusname = models.CharField(db_column='StatusName', max_length=100, blank=True)  # Field name made lowercase.
    flightagencyname = models.CharField(db_column='FlightAgencyName', max_length=500, blank=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='SubOrderID', max_length=500, blank=True)  # Field name made lowercase.
    confirmhour = models.IntegerField(db_column='ConfirmHour', blank=True, null=True)  # Field name made lowercase.
    firsttakeoffdate = models.DateTimeField(db_column='FirstTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    lasttakeoffdate = models.DateTimeField(db_column='LastTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    isopen = models.IntegerField(db_column='IsOpen', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_6869'


class FactticketpurchaseMlTraindata(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='suborderID', max_length=500, blank=True)  # Field name made lowercase.
    startcity = models.CharField(db_column='startCity', max_length=100, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='destCity', max_length=100, blank=True)  # Field name made lowercase.
    interval_day = models.IntegerField(blank=True, null=True)
    takeoffdate = models.DateField(db_column='takeoffDate', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    firstflight = models.CharField(db_column='FirstFlight', max_length=4, blank=True)  # Field name made lowercase.
    firstdtime = models.IntegerField(db_column='FirstDTime', blank=True, null=True)  # Field name made lowercase.
    firstatime = models.IntegerField(db_column='FirstATime', blank=True, null=True)  # Field name made lowercase.
    firstdport = models.CharField(db_column='FirstDPort', max_length=8, blank=True)  # Field name made lowercase.
    firstaport = models.CharField(db_column='FirstAPort', max_length=8, blank=True)  # Field name made lowercase.
    lastflight = models.CharField(db_column='LastFlight', max_length=4, blank=True)  # Field name made lowercase.
    lastdtime = models.IntegerField(db_column='LastDTime', blank=True, null=True)  # Field name made lowercase.
    lastatime = models.IntegerField(db_column='LastATime', blank=True, null=True)  # Field name made lowercase.
    lastdport = models.CharField(db_column='LastDPort', max_length=8, blank=True)  # Field name made lowercase.
    lastaport = models.CharField(db_column='LastAPort', max_length=8, blank=True)  # Field name made lowercase.
    transit = models.IntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    class_field = models.CharField(db_column='class', max_length=8, blank=True)  # Field renamed because it was a Python reserved word.
    isselect = models.IntegerField(db_column='Isselect', blank=True, null=True)  # Field name made lowercase.
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_ML_Traindata'


class FactticketpurchaseUpdateLog(models.Model):
    proc_name = models.CharField(max_length=64, blank=True)
    desc_text = models.CharField(max_length=128, blank=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)
    is_error = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_Update_log'


class FactticketpurchaseUpdateStatus(models.Model):
    date = models.DateField(primary_key=True)
    status = models.IntegerField(blank=True, null=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_Update_status'


class FactticketpurchaseDiysoldanalysis(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='suborderID', max_length=500, blank=True)  # Field name made lowercase.
    startcity = models.CharField(db_column='startCity', max_length=100, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='destCity', max_length=100, blank=True)  # Field name made lowercase.
    interval_day = models.IntegerField(blank=True, null=True)
    takeoffdate = models.DateField(db_column='takeoffDate', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=500, blank=True)  # Field name made lowercase.
    item = models.CharField(max_length=500, blank=True)
    costadult = models.DecimalField(db_column='costAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    priceadult = models.DecimalField(db_column='priceAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    sys_flt_price_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity_pat = models.IntegerField(blank=True, null=True)
    item_num_pat = models.IntegerField(blank=True, null=True)
    sys_flt_quantity_child_pat = models.IntegerField(blank=True, null=True)
    sys_flt_quantity_baby_pat = models.IntegerField(blank=True, null=True)
    reason = models.CharField(max_length=500, blank=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)
    dp_sdp = models.CharField(max_length=16, blank=True)
    flightno_s = models.CharField(db_column='flightNO_s', max_length=500, blank=True)  # Field name made lowercase.
    firsttabkeofftime = models.DateTimeField(db_column='FirstTabkeOffTime', blank=True, null=True)  # Field name made lowercase.
    lasttakeofftime = models.DateTimeField(db_column='LastTakeOffTime', blank=True, null=True)  # Field name made lowercase.
    time_s = models.CharField(db_column='Time_s', max_length=500, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_diySoldAnalysis'


class FactticketpurchaseItemSysRate(models.Model):
    startcity = models.CharField(db_column='startCity', max_length=100, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=100, blank=True)  # Field name made lowercase.
    interval_day = models.IntegerField(blank=True, null=True)
    takeoffdate = models.DateField(db_column='TakeoffDate', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    item_num_all = models.IntegerField(blank=True, null=True)
    sys_flt_quantity_all = models.IntegerField(blank=True, null=True)
    item_num_pat = models.IntegerField(blank=True, null=True)
    sys_flt_quantity_pat = models.IntegerField(blank=True, null=True)
    item_profit_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_price_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_cost_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_profit_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_price_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_cost_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)
    item_s = models.CharField(max_length=512, blank=True)
    flight_s = models.CharField(db_column='Flight_s', max_length=512, blank=True)  # Field name made lowercase.
    flightno_s = models.CharField(db_column='FlightNo_s', max_length=512, blank=True)  # Field name made lowercase.
    time_s = models.CharField(db_column='Time_s', max_length=512, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_item_sys_rate'


class FactticketpurchaseSyssoldAnalysis(models.Model):
    policycodes = models.CharField(max_length=500, blank=True)
    dcityname = models.CharField(max_length=32, blank=True)
    acityname = models.CharField(max_length=32, blank=True)
    stockdate = models.DateField(db_column='stockDate', blank=True, null=True)  # Field name made lowercase.
    minstaydays = models.IntegerField(db_column='MinStayDays', blank=True, null=True)  # Field name made lowercase.
    oids = models.CharField(max_length=500, blank=True)
    persons = models.IntegerField(blank=True, null=True)
    price_s = models.CharField(max_length=500, blank=True)
    salepriceaults = models.CharField(db_column='SalePriceAults', max_length=500, blank=True)  # Field name made lowercase.
    sold_num_9212 = models.IntegerField(blank=True, null=True)
    adj_limit = models.IntegerField(blank=True, null=True)
    reason_9212 = models.CharField(max_length=500, blank=True)
    orderdate = models.DateField(blank=True, null=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactTicketPurchase_sysSold_analysis'


class FacttourflightPaymentvoucher(models.Model):
    tfpvid = models.BigIntegerField(db_column='TFPVID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    ordertype = models.IntegerField(db_column='OrderType', blank=True, null=True)  # Field name made lowercase.
    providername = models.CharField(db_column='ProviderName', max_length=100, blank=True)  # Field name made lowercase.
    providerid = models.IntegerField(db_column='ProviderID', blank=True, null=True)  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    purchaseorderid = models.IntegerField(db_column='PurchaseOrderID', blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=10, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=20, blank=True)  # Field name made lowercase.
    operatorreason = models.CharField(db_column='OperatorReason', max_length=400, blank=True)  # Field name made lowercase.
    balancetype = models.CharField(db_column='BalanceType', max_length=1, blank=True)  # Field name made lowercase.
    adultquantity = models.IntegerField(db_column='AdultQuantity', blank=True, null=True)  # Field name made lowercase.
    childquantity = models.IntegerField(db_column='ChildQuantity', blank=True, null=True)  # Field name made lowercase.
    babyquantity = models.IntegerField(db_column='BabyQuantity', blank=True, null=True)  # Field name made lowercase.
    settlementid = models.CharField(db_column='SettlementId', max_length=100, blank=True)  # Field name made lowercase.
    balanceoperateeid = models.CharField(db_column='BalanceOperateEid', max_length=20, blank=True)  # Field name made lowercase.
    balanceremark = models.CharField(db_column='BalanceRemark', max_length=400, blank=True)  # Field name made lowercase.
    settlementdatatype = models.IntegerField(db_column='SettlementDataType', blank=True, null=True)  # Field name made lowercase.
    datechange_lasttime = models.DateTimeField(db_column='DateChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    datechange_createtime = models.DateTimeField(db_column='DateChange_CreateTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FactTourFlight_PaymentVoucher'


class Facttrainticketpurchase(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=50, blank=True)  # Field name made lowercase.
    resourcefrom = models.IntegerField(db_column='ResourceFrom', blank=True, null=True)  # Field name made lowercase.
    saleschannel = models.IntegerField(db_column='salesChannel', blank=True, null=True)  # Field name made lowercase.
    butype = models.IntegerField(db_column='BUType', blank=True, null=True)  # Field name made lowercase.
    productcategoryname = models.CharField(db_column='ProductCategoryName', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(db_column='Pkg', blank=True, null=True)  # Field name made lowercase.
    pkgname = models.CharField(db_column='PkgName', max_length=100, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=50, blank=True)  # Field name made lowercase.
    purchase_manager = models.CharField(db_column='Purchase_manager', max_length=100, blank=True)  # Field name made lowercase.
    operater_manager = models.CharField(max_length=100, blank=True)
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    start_region = models.CharField(max_length=50, blank=True)
    dest_region = models.CharField(max_length=50, blank=True)
    ordertype = models.CharField(db_column='OrderType', max_length=50, blank=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate', blank=True, null=True)  # Field name made lowercase.
    order_ahead_num = models.IntegerField(blank=True, null=True)
    interval_day = models.IntegerField(blank=True, null=True)
    flight = models.CharField(db_column='Flight', max_length=100, blank=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=200, blank=True)  # Field name made lowercase.
    resourcetype = models.IntegerField(db_column='ResourceType', blank=True, null=True)  # Field name made lowercase.
    itemid = models.CharField(db_column='ItemId', max_length=100, blank=True)  # Field name made lowercase.
    tourid = models.IntegerField(db_column='tourId', blank=True, null=True)  # Field name made lowercase.
    tourstatus = models.CharField(db_column='TourStatus', max_length=16, blank=True)  # Field name made lowercase.
    use_flt = models.CharField(max_length=8, blank=True)
    use_sys_flt = models.CharField(max_length=8, blank=True)
    item_have_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_have_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_no_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity = models.IntegerField(blank=True, null=True)
    sys_flt_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_persons = models.IntegerField(blank=True, null=True)
    total_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    child_persons = models.IntegerField(blank=True, null=True)
    baby_persons = models.IntegerField(blank=True, null=True)
    statusname = models.CharField(db_column='StatusName', max_length=100, blank=True)  # Field name made lowercase.
    flightagencyname = models.CharField(db_column='FlightAgencyName', max_length=100, blank=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='SubOrderID', max_length=500, blank=True)  # Field name made lowercase.
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'FactTrainTicketPurchase'


class FactCtripUid(models.Model):
    uid = models.CharField(db_column='UID', max_length=50)  # Field name made lowercase.
    firstorderid_tour = models.IntegerField(db_column='FirstOrderID_Tour', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_tour = models.DateTimeField(db_column='FirstOrderIDOrderDate_Tour', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_tour = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_Tour', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_tour = models.DateTimeField(db_column='FirstOrderIDReturnDate_Tour', blank=True, null=True)  # Field name made lowercase.
    lastorderid_tour = models.IntegerField(db_column='LastOrderID_Tour', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_tour = models.DateTimeField(db_column='LastOrderIDOrderDate_Tour', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_tour = models.DateTimeField(db_column='LastOrderIDTakeoffDate_Tour', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_tour = models.DateTimeField(db_column='LastOrderIDReturnDate_Tour', blank=True, null=True)  # Field name made lowercase.
    totaladult_tour = models.IntegerField(db_column='TotalAdult_Tour', blank=True, null=True)  # Field name made lowercase.
    totalchild_tour = models.IntegerField(db_column='TotalChild_Tour', blank=True, null=True)  # Field name made lowercase.
    totalbaby_tour = models.IntegerField(db_column='TotalBaby_Tour', blank=True, null=True)  # Field name made lowercase.
    totalorders_tour = models.IntegerField(db_column='TotalOrders_Tour', blank=True, null=True)  # Field name made lowercase.
    totalamout_tour = models.FloatField(db_column='TotalAmout_Tour', blank=True, null=True)  # Field name made lowercase.
    totalprofit_tour = models.FloatField(db_column='TotalProfit_Tour', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_tour = models.FloatField(db_column='TotalTMpay_Tour', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_tour = models.IntegerField(db_column='Last_15Days_Orders_Tour', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_tour = models.IntegerField(db_column='Last_30Days_Orders_Tour', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_tour = models.IntegerField(db_column='Last_60Days_Orders_Tour', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_tour = models.IntegerField(db_column='Last_90Days_Orders_Tour', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_tour = models.IntegerField(db_column='Last_120Days_Orders_Tour', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_tour = models.IntegerField(db_column='Last_180Days_Orders_Tour', blank=True, null=True)  # Field name made lowercase.
    firstorderid_fh = models.IntegerField(db_column='FirstOrderID_FH', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_fh = models.DateTimeField(db_column='FirstOrderIDOrderDate_FH', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_fh = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_FH', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_fh = models.DateTimeField(db_column='FirstOrderIDReturnDate_FH', blank=True, null=True)  # Field name made lowercase.
    lastorderid_fh = models.IntegerField(db_column='LastOrderID_FH', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_fh = models.DateTimeField(db_column='LastOrderIDOrderDate_FH', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_fh = models.DateTimeField(db_column='LastOrderIDTakeoffDate_FH', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_fh = models.DateTimeField(db_column='LastOrderIDReturnDate_FH', blank=True, null=True)  # Field name made lowercase.
    totaladult_fh = models.IntegerField(db_column='TotalAdult_FH', blank=True, null=True)  # Field name made lowercase.
    totalchild_fh = models.IntegerField(db_column='TotalChild_FH', blank=True, null=True)  # Field name made lowercase.
    totalbaby_fh = models.IntegerField(db_column='TotalBaby_FH', blank=True, null=True)  # Field name made lowercase.
    totalorders_fh = models.IntegerField(db_column='TotalOrders_FH', blank=True, null=True)  # Field name made lowercase.
    totalamout_fh = models.FloatField(db_column='TotalAmout_FH', blank=True, null=True)  # Field name made lowercase.
    totalprofit_fh = models.FloatField(db_column='TotalProfit_FH', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_fh = models.FloatField(db_column='TotalTMpay_FH', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_fh = models.IntegerField(db_column='Last_15Days_Orders_FH', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_fh = models.IntegerField(db_column='Last_30Days_Orders_FH', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_fh = models.IntegerField(db_column='Last_60Days_Orders_FH', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_fh = models.IntegerField(db_column='Last_90Days_Orders_FH', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_fh = models.IntegerField(db_column='Last_120Days_Orders_FH', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_fh = models.IntegerField(db_column='Last_180Days_Orders_FH', blank=True, null=True)  # Field name made lowercase.
    firstorderid_jh = models.IntegerField(db_column='FirstOrderID_JH', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_jh = models.DateTimeField(db_column='FirstOrderIDOrderDate_JH', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_jh = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_JH', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_jh = models.DateTimeField(db_column='FirstOrderIDReturnDate_JH', blank=True, null=True)  # Field name made lowercase.
    lastorderid_jh = models.IntegerField(db_column='LastOrderID_JH', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_jh = models.DateTimeField(db_column='LastOrderIDOrderDate_JH', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_jh = models.DateTimeField(db_column='LastOrderIDTakeoffDate_JH', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_jh = models.DateTimeField(db_column='LastOrderIDReturnDate_JH', blank=True, null=True)  # Field name made lowercase.
    totaladult_jh = models.IntegerField(db_column='TotalAdult_JH', blank=True, null=True)  # Field name made lowercase.
    totalchild_jh = models.IntegerField(db_column='TotalChild_JH', blank=True, null=True)  # Field name made lowercase.
    totalbaby_jh = models.IntegerField(db_column='TotalBaby_JH', blank=True, null=True)  # Field name made lowercase.
    totalorders_jh = models.IntegerField(db_column='TotalOrders_JH', blank=True, null=True)  # Field name made lowercase.
    totalamout_jh = models.FloatField(db_column='TotalAmout_JH', blank=True, null=True)  # Field name made lowercase.
    totalprofit_jh = models.FloatField(db_column='TotalProfit_JH', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_jh = models.FloatField(db_column='TotalTMpay_JH', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_jh = models.IntegerField(db_column='Last_15Days_Orders_JH', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_jh = models.IntegerField(db_column='Last_30Days_Orders_JH', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_jh = models.IntegerField(db_column='Last_60Days_Orders_JH', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_jh = models.IntegerField(db_column='Last_90Days_Orders_JH', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_jh = models.IntegerField(db_column='Last_120Days_Orders_JH', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_jh = models.IntegerField(db_column='Last_180Days_Orders_JH', blank=True, null=True)  # Field name made lowercase.
    firstorderid_cruise = models.IntegerField(db_column='FirstOrderID_Cruise', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_cruise = models.DateTimeField(db_column='FirstOrderIDOrderDate_Cruise', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_cruise = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_Cruise', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_cruise = models.DateTimeField(db_column='FirstOrderIDReturnDate_Cruise', blank=True, null=True)  # Field name made lowercase.
    lastorderid_cruise = models.IntegerField(db_column='LastOrderID_Cruise', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_cruise = models.DateTimeField(db_column='LastOrderIDOrderDate_Cruise', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_cruise = models.DateTimeField(db_column='LastOrderIDTakeoffDate_Cruise', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_cruise = models.DateTimeField(db_column='LastOrderIDReturnDate_Cruise', blank=True, null=True)  # Field name made lowercase.
    totaladult_cruise = models.IntegerField(db_column='TotalAdult_Cruise', blank=True, null=True)  # Field name made lowercase.
    totalchild_cruise = models.IntegerField(db_column='TotalChild_Cruise', blank=True, null=True)  # Field name made lowercase.
    totalbaby_cruise = models.IntegerField(db_column='TotalBaby_Cruise', blank=True, null=True)  # Field name made lowercase.
    totalorders_cruise = models.IntegerField(db_column='TotalOrders_Cruise', blank=True, null=True)  # Field name made lowercase.
    totalamout_cruise = models.FloatField(db_column='TotalAmout_Cruise', blank=True, null=True)  # Field name made lowercase.
    totalprofit_cruise = models.FloatField(db_column='TotalProfit_Cruise', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_cruise = models.FloatField(db_column='TotalTMpay_Cruise', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_cruise = models.IntegerField(db_column='Last_15Days_Orders_Cruise', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_cruise = models.IntegerField(db_column='Last_30Days_Orders_Cruise', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_cruise = models.IntegerField(db_column='Last_60Days_Orders_Cruise', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_cruise = models.IntegerField(db_column='Last_90Days_Orders_Cruise', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_cruise = models.IntegerField(db_column='Last_120Days_Orders_Cruise', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_cruise = models.IntegerField(db_column='Last_180Days_Orders_Cruise', blank=True, null=True)  # Field name made lowercase.
    firstorderid_ticket = models.IntegerField(db_column='FirstOrderID_Ticket', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_ticket = models.DateTimeField(db_column='FirstOrderIDOrderDate_Ticket', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_ticket = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_Ticket', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_ticket = models.DateTimeField(db_column='FirstOrderIDReturnDate_Ticket', blank=True, null=True)  # Field name made lowercase.
    lastorderid_ticket = models.IntegerField(db_column='LastOrderID_Ticket', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_ticket = models.DateTimeField(db_column='LastOrderIDOrderDate_Ticket', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_ticket = models.DateTimeField(db_column='LastOrderIDTakeoffDate_Ticket', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_ticket = models.DateTimeField(db_column='LastOrderIDReturnDate_Ticket', blank=True, null=True)  # Field name made lowercase.
    totaladult_ticket = models.IntegerField(db_column='TotalAdult_Ticket', blank=True, null=True)  # Field name made lowercase.
    totalchild_ticket = models.IntegerField(db_column='TotalChild_Ticket', blank=True, null=True)  # Field name made lowercase.
    totalbaby_ticket = models.IntegerField(db_column='TotalBaby_Ticket', blank=True, null=True)  # Field name made lowercase.
    totalorders_ticket = models.IntegerField(db_column='TotalOrders_Ticket', blank=True, null=True)  # Field name made lowercase.
    totalamout_ticket = models.FloatField(db_column='TotalAmout_Ticket', blank=True, null=True)  # Field name made lowercase.
    totalprofit_ticket = models.FloatField(db_column='TotalProfit_Ticket', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_ticket = models.FloatField(db_column='TotalTMpay_Ticket', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_ticket = models.IntegerField(db_column='Last_15Days_Orders_Ticket', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_ticket = models.IntegerField(db_column='Last_30Days_Orders_Ticket', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_ticket = models.IntegerField(db_column='Last_60Days_Orders_Ticket', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_ticket = models.IntegerField(db_column='Last_90Days_Orders_Ticket', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_ticket = models.IntegerField(db_column='Last_120Days_Orders_Ticket', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_ticket = models.IntegerField(db_column='Last_180Days_Orders_Ticket', blank=True, null=True)  # Field name made lowercase.
    firstorderid_ttd = models.IntegerField(db_column='FirstOrderID_TTD', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_ttd = models.DateTimeField(db_column='FirstOrderIDOrderDate_TTD', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_ttd = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_TTD', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_ttd = models.DateTimeField(db_column='FirstOrderIDReturnDate_TTD', blank=True, null=True)  # Field name made lowercase.
    lastorderid_ttd = models.IntegerField(db_column='LastOrderID_TTD', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_ttd = models.DateTimeField(db_column='LastOrderIDOrderDate_TTD', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_ttd = models.DateTimeField(db_column='LastOrderIDTakeoffDate_TTD', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_ttd = models.DateTimeField(db_column='LastOrderIDReturnDate_TTD', blank=True, null=True)  # Field name made lowercase.
    totaladult_ttd = models.IntegerField(db_column='TotalAdult_TTD', blank=True, null=True)  # Field name made lowercase.
    totalchild_ttd = models.IntegerField(db_column='TotalChild_TTD', blank=True, null=True)  # Field name made lowercase.
    totalbaby_ttd = models.IntegerField(db_column='TotalBaby_TTD', blank=True, null=True)  # Field name made lowercase.
    totalorders_ttd = models.IntegerField(db_column='TotalOrders_TTD', blank=True, null=True)  # Field name made lowercase.
    totalamout_ttd = models.FloatField(db_column='TotalAmout_TTD', blank=True, null=True)  # Field name made lowercase.
    totalprofit_ttd = models.FloatField(db_column='TotalProfit_TTD', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_ttd = models.FloatField(db_column='TotalTMpay_TTD', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_ttd = models.IntegerField(db_column='Last_15Days_Orders_TTD', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_ttd = models.IntegerField(db_column='Last_30Days_Orders_TTD', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_ttd = models.IntegerField(db_column='Last_60Days_Orders_TTD', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_ttd = models.IntegerField(db_column='Last_90Days_Orders_TTD', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_ttd = models.IntegerField(db_column='Last_120Days_Orders_TTD', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_ttd = models.IntegerField(db_column='Last_180Days_Orders_TTD', blank=True, null=True)  # Field name made lowercase.
    firstorderid_airplane = models.IntegerField(db_column='FirstOrderID_Airplane', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_airplane = models.DateTimeField(db_column='FirstOrderIDOrderDate_Airplane', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_airplane = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_Airplane', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_airplane = models.DateTimeField(db_column='FirstOrderIDReturnDate_Airplane', blank=True, null=True)  # Field name made lowercase.
    lastorderid_airplane = models.IntegerField(db_column='LastOrderID_Airplane', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_airplane = models.DateTimeField(db_column='LastOrderIDOrderDate_Airplane', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_airplane = models.DateTimeField(db_column='LastOrderIDTakeoffDate_Airplane', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_airplane = models.DateTimeField(db_column='LastOrderIDReturnDate_Airplane', blank=True, null=True)  # Field name made lowercase.
    totaladult_airplane = models.IntegerField(db_column='TotalAdult_Airplane', blank=True, null=True)  # Field name made lowercase.
    totalchild_airplane = models.IntegerField(db_column='TotalChild_Airplane', blank=True, null=True)  # Field name made lowercase.
    totalbaby_airplane = models.IntegerField(db_column='TotalBaby_Airplane', blank=True, null=True)  # Field name made lowercase.
    totalorders_airplane = models.IntegerField(db_column='TotalOrders_Airplane', blank=True, null=True)  # Field name made lowercase.
    totalamout_airplane = models.FloatField(db_column='TotalAmout_Airplane', blank=True, null=True)  # Field name made lowercase.
    totalprofit_airplane = models.FloatField(db_column='TotalProfit_Airplane', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_airplane = models.FloatField(db_column='TotalTMpay_Airplane', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_airplane = models.IntegerField(db_column='Last_15Days_Orders_Airplane', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_airplane = models.IntegerField(db_column='Last_30Days_Orders_Airplane', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_airplane = models.IntegerField(db_column='Last_60Days_Orders_Airplane', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_airplane = models.IntegerField(db_column='Last_90Days_Orders_Airplane', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_airplane = models.IntegerField(db_column='Last_120Days_Orders_Airplane', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_airplane = models.IntegerField(db_column='Last_180Days_Orders_Airplane', blank=True, null=True)  # Field name made lowercase.
    firstorderid_hotel = models.IntegerField(db_column='FirstOrderID_Hotel', blank=True, null=True)  # Field name made lowercase.
    firstorderidorderdate_hotel = models.DateTimeField(db_column='FirstOrderIDOrderDate_Hotel', blank=True, null=True)  # Field name made lowercase.
    firstorderidtakeoffdate_hotel = models.DateTimeField(db_column='FirstOrderIDTakeoffDate_Hotel', blank=True, null=True)  # Field name made lowercase.
    firstorderidreturndate_hotel = models.DateTimeField(db_column='FirstOrderIDReturnDate_Hotel', blank=True, null=True)  # Field name made lowercase.
    lastorderid_hotel = models.IntegerField(db_column='LastOrderID_Hotel', blank=True, null=True)  # Field name made lowercase.
    lastorderidorderdate_hotel = models.DateTimeField(db_column='LastOrderIDOrderDate_Hotel', blank=True, null=True)  # Field name made lowercase.
    lastorderidtakeoffdate_hotel = models.DateTimeField(db_column='LastOrderIDTakeoffDate_Hotel', blank=True, null=True)  # Field name made lowercase.
    lastorderidreturndate_hotel = models.DateTimeField(db_column='LastOrderIDReturnDate_Hotel', blank=True, null=True)  # Field name made lowercase.
    totaladult_hotel = models.IntegerField(db_column='TotalAdult_Hotel', blank=True, null=True)  # Field name made lowercase.
    totalchild_hotel = models.IntegerField(db_column='TotalChild_Hotel', blank=True, null=True)  # Field name made lowercase.
    totalbaby_hotel = models.IntegerField(db_column='TotalBaby_Hotel', blank=True, null=True)  # Field name made lowercase.
    totalorders_hotel = models.IntegerField(db_column='TotalOrders_Hotel', blank=True, null=True)  # Field name made lowercase.
    totalamout_hotel = models.FloatField(db_column='TotalAmout_Hotel', blank=True, null=True)  # Field name made lowercase.
    totalprofit_hotel = models.FloatField(db_column='TotalProfit_Hotel', blank=True, null=True)  # Field name made lowercase.
    totaltmpay_hotel = models.FloatField(db_column='TotalTMpay_Hotel', blank=True, null=True)  # Field name made lowercase.
    last_15days_orders_hotel = models.IntegerField(db_column='Last_15Days_Orders_Hotel', blank=True, null=True)  # Field name made lowercase.
    last_30days_orders_hotel = models.IntegerField(db_column='Last_30Days_Orders_Hotel', blank=True, null=True)  # Field name made lowercase.
    last_60days_orders_hotel = models.IntegerField(db_column='Last_60Days_Orders_Hotel', blank=True, null=True)  # Field name made lowercase.
    last_90days_orders_hotel = models.IntegerField(db_column='Last_90Days_Orders_Hotel', blank=True, null=True)  # Field name made lowercase.
    last_120days_orders_hotel = models.IntegerField(db_column='Last_120Days_Orders_Hotel', blank=True, null=True)  # Field name made lowercase.
    last_180days_orders_hotel = models.IntegerField(db_column='Last_180Days_Orders_Hotel', blank=True, null=True)  # Field name made lowercase.
    updatetime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Fact_Ctrip_Uid'


class FactDiyPassengers(models.Model):
    passengerid = models.IntegerField(db_column='PassengerID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    rph = models.IntegerField(db_column='RPH', blank=True, null=True)  # Field name made lowercase.
    engname = models.CharField(db_column='EngName', max_length=200, blank=True)  # Field name made lowercase.
    gender = models.SmallIntegerField(db_column='Gender', blank=True, null=True)  # Field name made lowercase.
    passengertype = models.SmallIntegerField(db_column='PassengerType', blank=True, null=True)  # Field name made lowercase.
    certificate = models.SmallIntegerField(db_column='Certificate', blank=True, null=True)  # Field name made lowercase.
    certificateno = models.CharField(db_column='CertificateNo', max_length=50, blank=True)  # Field name made lowercase.
    nationnality = models.CharField(db_column='Nationnality', max_length=100, blank=True)  # Field name made lowercase.
    birthdate = models.DateTimeField(db_column='BirthDate', blank=True, null=True)  # Field name made lowercase.
    expiredate = models.DateTimeField(db_column='ExpireDate', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    cnnname = models.CharField(db_column='CnnName', max_length=200, blank=True)  # Field name made lowercase.
    mobile = models.CharField(db_column='Mobile', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Fact_DIY_Passengers'


class FactDiySuborder(models.Model):
    suborderid = models.IntegerField(db_column='SubOrderID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    subordertype = models.IntegerField(db_column='SubOrderType')  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    quantity = models.IntegerField(db_column='Quantity')  # Field name made lowercase.
    startcity = models.CharField(db_column='StartCity', max_length=3)  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate')  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=3)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=200)  # Field name made lowercase.
    passengertype = models.CharField(db_column='PassengerType', max_length=20)  # Field name made lowercase.
    passengeridlist = models.CharField(db_column='PassengerIDList', max_length=50)  # Field name made lowercase.
    arrivedate = models.DateTimeField(db_column='ArriveDate')  # Field name made lowercase.
    sendticketcity = models.IntegerField(db_column='SendTicketCity')  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    realamount = models.DecimalField(db_column='RealAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20)  # Field name made lowercase.
    realpay = models.DecimalField(db_column='RealPay', max_digits=19, decimal_places=4)  # Field name made lowercase.
    isconfirm = models.BooleanField(db_column='IsConfirm')  # Field name made lowercase.
    issettlement = models.BooleanField(db_column='IsSettlement')  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=20)  # Field name made lowercase.
    isdelete = models.BooleanField(db_column='IsDelete')  # Field name made lowercase.
    isnew = models.BooleanField(db_column='IsNew')  # Field name made lowercase.
    sendstatus = models.CharField(db_column='SendStatus', max_length=20, blank=True)  # Field name made lowercase.
    notifystatus = models.CharField(db_column='NotifyStatus', max_length=20, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    isintl = models.BooleanField(db_column='IsIntl')  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=20)  # Field name made lowercase.
    costexchange = models.DecimalField(db_column='CostExchange', max_digits=18, decimal_places=2)  # Field name made lowercase.
    confirminterval = models.IntegerField(db_column='ConfirmInterval')  # Field name made lowercase.
    sourcetype = models.SmallIntegerField(db_column='SourceType')  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    suborderorderstatus = models.SmallIntegerField(db_column='SubOrderOrderStatus', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Fact_DIY_SubOrder'


class FactDiySuborderNew(models.Model):
    suborderid = models.IntegerField(db_column='SubOrderID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    subordertype = models.IntegerField(db_column='SubOrderType')  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    quantity = models.IntegerField(db_column='Quantity')  # Field name made lowercase.
    startcity = models.CharField(db_column='StartCity', max_length=3)  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate')  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=3)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=200)  # Field name made lowercase.
    passengertype = models.CharField(db_column='PassengerType', max_length=20)  # Field name made lowercase.
    passengeridlist = models.CharField(db_column='PassengerIDList', max_length=50)  # Field name made lowercase.
    arrivedate = models.DateTimeField(db_column='ArriveDate')  # Field name made lowercase.
    sendticketcity = models.IntegerField(db_column='SendTicketCity')  # Field name made lowercase.
    currentamount = models.DecimalField(db_column='CurrentAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    realamount = models.DecimalField(db_column='RealAmount', max_digits=19, decimal_places=4)  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20)  # Field name made lowercase.
    realpay = models.DecimalField(db_column='RealPay', max_digits=19, decimal_places=4)  # Field name made lowercase.
    isconfirm = models.BooleanField(db_column='IsConfirm')  # Field name made lowercase.
    issettlement = models.BooleanField(db_column='IsSettlement')  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=20)  # Field name made lowercase.
    isdelete = models.BooleanField(db_column='IsDelete')  # Field name made lowercase.
    isnew = models.BooleanField(db_column='IsNew')  # Field name made lowercase.
    sendstatus = models.CharField(db_column='SendStatus', max_length=20, blank=True)  # Field name made lowercase.
    notifystatus = models.CharField(db_column='NotifyStatus', max_length=20, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    isintl = models.BooleanField(db_column='IsIntl')  # Field name made lowercase.
    cost = models.DecimalField(db_column='Cost', max_digits=19, decimal_places=4)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=20)  # Field name made lowercase.
    costexchange = models.DecimalField(db_column='CostExchange', max_digits=18, decimal_places=2)  # Field name made lowercase.
    confirminterval = models.IntegerField(db_column='ConfirmInterval')  # Field name made lowercase.
    sourcetype = models.SmallIntegerField(db_column='SourceType')  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    suborderorderstatus = models.SmallIntegerField(db_column='SubOrderOrderStatus', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Fact_DIY_SubOrder_new'


class NfNormalfare(models.Model):
    normalfareid = models.BigIntegerField(db_column='NormalFareID')  # Field name made lowercase.
    source = models.SmallIntegerField(db_column='Source')  # Field name made lowercase.
    policyno = models.CharField(db_column='PolicyNo', max_length=50, blank=True)  # Field name made lowercase.
    triptype = models.CharField(db_column='TripType', max_length=2)  # Field name made lowercase.
    segmentnum = models.SmallIntegerField(db_column='SegmentNum', blank=True, null=True)  # Field name made lowercase.
    departcityzone = models.CharField(db_column='DepartCityZone', max_length=20, blank=True)  # Field name made lowercase.
    arrivecityzone = models.CharField(db_column='ArriveCityZone', max_length=20, blank=True)  # Field name made lowercase.
    flightwayid = models.IntegerField(db_column='FlightWayID', blank=True, null=True)  # Field name made lowercase.
    isrouting = models.NullBooleanField(db_column='IsRouting')  # Field name made lowercase.
    routing = models.CharField(db_column='Routing', max_length=100)  # Field name made lowercase.
    eligibilitytype = models.CharField(db_column='EligibilityType', max_length=20, blank=True)  # Field name made lowercase.
    eligibility = models.CharField(db_column='Eligibility', max_length=50)  # Field name made lowercase.
    eligibilityremark = models.CharField(db_column='EligibilityRemark', max_length=500, blank=True)  # Field name made lowercase.
    minpax = models.SmallIntegerField(db_column='MinPax', blank=True, null=True)  # Field name made lowercase.
    isallowtransfer = models.NullBooleanField(db_column='IsAllowTransfer')  # Field name made lowercase.
    isallowoj = models.NullBooleanField(db_column='IsAllowOJ')  # Field name made lowercase.
    isallowct = models.NullBooleanField(db_column='IsAllowCT')  # Field name made lowercase.
    ei = models.CharField(db_column='EI', max_length=300, blank=True)  # Field name made lowercase.
    cnremark = models.CharField(db_column='CNRemark', max_length=500, blank=True)  # Field name made lowercase.
    enremark = models.CharField(db_column='ENRemark', max_length=500, blank=True)  # Field name made lowercase.
    tourcode = models.CharField(db_column='TourCode', max_length=500, blank=True)  # Field name made lowercase.
    farebasis = models.CharField(db_column='FareBasis', max_length=50, blank=True)  # Field name made lowercase.
    tariffcode = models.CharField(db_column='TariffCode', max_length=50, blank=True)  # Field name made lowercase.
    rulenumber = models.CharField(db_column='RuleNumber', max_length=50, blank=True)  # Field name made lowercase.
    faretype = models.CharField(db_column='FareType', max_length=800, blank=True)  # Field name made lowercase.
    fareclass = models.CharField(db_column='FareClass', max_length=50, blank=True)  # Field name made lowercase.
    negotiatedfares = models.CharField(db_column='NegotiatedFares', max_length=10, blank=True)  # Field name made lowercase.
    priceparameter = models.CharField(db_column='PriceParameter', max_length=4, blank=True)  # Field name made lowercase.
    gdssource = models.CharField(db_column='GDSSource', max_length=10, blank=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True)  # Field name made lowercase.
    saleprice = models.DecimalField(db_column='SalePrice', max_digits=10, decimal_places=2)  # Field name made lowercase.
    pricerate = models.DecimalField(db_column='PriceRate', max_digits=7, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    accountprice = models.DecimalField(db_column='AccountPrice', max_digits=10, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    isallowaddon = models.BooleanField(db_column='IsAllowAddOn')  # Field name made lowercase.
    addonpolicyno = models.CharField(db_column='AddOnPolicyNo', max_length=50, blank=True)  # Field name made lowercase.
    saleseffectdate = models.DateTimeField(db_column='SalesEffectDate', blank=True, null=True)  # Field name made lowercase.
    salesexpirydate = models.DateTimeField(db_column='SalesExpiryDate', blank=True, null=True)  # Field name made lowercase.
    agentid = models.CharField(db_column='AgentID', max_length=50, blank=True)  # Field name made lowercase.
    owner = models.CharField(db_column='Owner', max_length=2)  # Field name made lowercase.
    isenglishsale = models.NullBooleanField(db_column='IsEnglishSale')  # Field name made lowercase.
    airlinecode = models.CharField(db_column='AirlineCode', max_length=30)  # Field name made lowercase.
    ptcmd = models.CharField(db_column='Ptcmd', max_length=200, blank=True)  # Field name made lowercase.
    issuedeadline = models.CharField(db_column='IssueDeadLine', max_length=500, blank=True)  # Field name made lowercase.
    cnrefundremark = models.CharField(db_column='CNRefundRemark', max_length=500, blank=True)  # Field name made lowercase.
    enrefundremark = models.CharField(db_column='ENRefundRemark', max_length=500, blank=True)  # Field name made lowercase.
    cnrebookingremark = models.CharField(db_column='CNRebookingRemark', max_length=1000, blank=True)  # Field name made lowercase.
    enrebookingremark = models.CharField(db_column='ENRebookingRemark', max_length=1000, blank=True)  # Field name made lowercase.
    cnnoshowremark = models.CharField(db_column='CNNoshowRemark', max_length=500, blank=True)  # Field name made lowercase.
    ennoshowremark = models.CharField(db_column='ENNoshowRemark', max_length=500, blank=True)  # Field name made lowercase.
    tickettype = models.CharField(db_column='TicketType', max_length=4, blank=True)  # Field name made lowercase.
    seatclasses = models.CharField(db_column='SeatClasses', max_length=50)  # Field name made lowercase.
    seatgrade = models.CharField(db_column='SeatGrade', max_length=1, blank=True)  # Field name made lowercase.
    primaryseatclass = models.CharField(db_column='PrimarySeatClass', max_length=50, blank=True)  # Field name made lowercase.
    isimmediateissue = models.NullBooleanField(db_column='IsImmediateIssue')  # Field name made lowercase.
    allowopen = models.NullBooleanField(db_column='AllowOpen')  # Field name made lowercase.
    cnbaggageremark = models.CharField(db_column='CNBaggageRemark', max_length=500, blank=True)  # Field name made lowercase.
    enbaggageremark = models.CharField(db_column='ENBaggageRemark', max_length=500, blank=True)  # Field name made lowercase.
    cnrtbaggageremark = models.CharField(db_column='CNRTBaggageRemark', max_length=500, blank=True)  # Field name made lowercase.
    enrtbaggageremark = models.CharField(db_column='ENRTBaggageRemark', max_length=500, blank=True)  # Field name made lowercase.
    isallowstopover = models.NullBooleanField(db_column='IsAllowStopOver')  # Field name made lowercase.
    stopovernums = models.SmallIntegerField(db_column='StopoverNums', blank=True, null=True)  # Field name made lowercase.
    outboundstopnum = models.SmallIntegerField(db_column='OutBoundStopNum', blank=True, null=True)  # Field name made lowercase.
    inboundstopnum = models.SmallIntegerField(db_column='InBoundStopNum', blank=True, null=True)  # Field name made lowercase.
    limittype = models.SmallIntegerField(db_column='LimitType', blank=True, null=True)  # Field name made lowercase.
    applyzone = models.SmallIntegerField(db_column='ApplyZone', blank=True, null=True)  # Field name made lowercase.
    applyzonecode = models.CharField(db_column='ApplyZoneCode', max_length=50, blank=True)  # Field name made lowercase.
    chddiscountrate = models.DecimalField(db_column='ChdDiscountRate', max_digits=7, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    chdfixedprice = models.DecimalField(db_column='ChdFixedPrice', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    chdadditionalcharge = models.DecimalField(db_column='ChdAdditionalCharge', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    chdfixedpersonlimit = models.SmallIntegerField(db_column='ChdFixedPersonLimit', blank=True, null=True)  # Field name made lowercase.
    chdpersonlimit = models.SmallIntegerField(db_column='ChdPersonLimit', blank=True, null=True)  # Field name made lowercase.
    chdfixedagerange = models.CharField(db_column='ChdFixedAgeRange', max_length=50, blank=True)  # Field name made lowercase.
    chdagerange = models.CharField(db_column='ChdAgeRange', max_length=50, blank=True)  # Field name made lowercase.
    infseatdiscountrate = models.DecimalField(db_column='InfSeatDiscountRate', max_digits=7, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    infseatpersonlimit = models.SmallIntegerField(db_column='InfSeatPersonLimit', blank=True, null=True)  # Field name made lowercase.
    infseatagerange = models.CharField(db_column='InfSeatAgeRange', max_length=50, blank=True)  # Field name made lowercase.
    infseatlessdiscountrate = models.DecimalField(db_column='InfSeatLessDiscountRate', max_digits=7, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    infseatlesspersonlimit = models.SmallIntegerField(db_column='InfSeatLessPersonLimit', blank=True, null=True)  # Field name made lowercase.
    infseatlessagerange = models.CharField(db_column='InfSeatLessAgeRange', max_length=50, blank=True)  # Field name made lowercase.
    isactivated = models.BooleanField(db_column='IsActivated')  # Field name made lowercase.
    createtime = models.DateTimeField(db_column='CreateTime', blank=True, null=True)  # Field name made lowercase.
    createuser = models.CharField(db_column='CreateUser', max_length=20, blank=True)  # Field name made lowercase.
    modifytime = models.DateTimeField(db_column='ModifyTime', blank=True, null=True)  # Field name made lowercase.
    modifyuser = models.CharField(db_column='ModifyUser', max_length=20, blank=True)  # Field name made lowercase.
    inboundforbiddendate = models.CharField(db_column='InBoundForbiddenDate', max_length=1000, blank=True)  # Field name made lowercase.
    inboundforbiddenapptsi = models.CharField(db_column='InBoundForbiddenAppTSI', max_length=500, blank=True)  # Field name made lowercase.
    inboundforbiddenappzone = models.CharField(db_column='InBoundForbiddenAppZone', max_length=10, blank=True)  # Field name made lowercase.
    traveldate = models.CharField(db_column='TravelDate', max_length=1000, blank=True)  # Field name made lowercase.
    travelapptsi = models.CharField(db_column='TravelAppTSI', max_length=500, blank=True)  # Field name made lowercase.
    travelappzone = models.CharField(db_column='TravelAppZone', max_length=10, blank=True)  # Field name made lowercase.
    allowcombination = models.NullBooleanField(db_column='AllowCombination')  # Field name made lowercase.
    ticketstag = models.IntegerField(db_column='TicketsTag', blank=True, null=True)  # Field name made lowercase.
    departairport = models.CharField(db_column='DepartAirport', max_length=3, blank=True)  # Field name made lowercase.
    arrivalairport = models.CharField(db_column='ArrivalAirport', max_length=3, blank=True)  # Field name made lowercase.
    direction = models.CharField(db_column='Direction', max_length=2, blank=True)  # Field name made lowercase.
    oldnormalfareid = models.IntegerField(db_column='OldNormalFareID', blank=True, null=True)  # Field name made lowercase.
    realrouting = models.CharField(db_column='RealRouting', max_length=100)  # Field name made lowercase.
    maxpax = models.SmallIntegerField(db_column='MaxPax', blank=True, null=True)  # Field name made lowercase.
    isrebooking = models.NullBooleanField(db_column='IsRebooking')  # Field name made lowercase.
    isrtrebooking = models.NullBooleanField(db_column='IsRTRebooking')  # Field name made lowercase.
    cnrtrebookingremark = models.CharField(db_column='CNRTRebookingRemark', max_length=500, blank=True)  # Field name made lowercase.
    enrtrebookingremark = models.CharField(db_column='ENRTRebookingRemark', max_length=500, blank=True)  # Field name made lowercase.
    isalluserefund = models.NullBooleanField(db_column='IsAllUseRefund')  # Field name made lowercase.
    ispartuserefund = models.NullBooleanField(db_column='IsPartUseRefund')  # Field name made lowercase.
    cnalluserefund = models.CharField(db_column='CNAllUseRefund', max_length=500, blank=True)  # Field name made lowercase.
    enalluserefund = models.CharField(db_column='ENAllUseRefund', max_length=500, blank=True)  # Field name made lowercase.
    cnpartuserefund = models.CharField(db_column='CNPartUseRefund', max_length=500, blank=True)  # Field name made lowercase.
    enpartuserefund = models.CharField(db_column='ENPartUseRefund', max_length=500, blank=True)  # Field name made lowercase.
    cnrtrefundremark = models.CharField(db_column='CNRTRefundRemark', max_length=500, blank=True)  # Field name made lowercase.
    enrtrefundremark = models.CharField(db_column='ENRTRefundRemark', max_length=500, blank=True)  # Field name made lowercase.
    nonref = models.CharField(db_column='NonRef', max_length=1, blank=True)  # Field name made lowercase.
    nonend = models.CharField(db_column='NonEnd', max_length=1, blank=True)  # Field name made lowercase.
    nonrer = models.CharField(db_column='NonRer', max_length=1, blank=True)  # Field name made lowercase.
    number_3002id = models.CharField(db_column='3002ID', max_length=50, blank=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier.
    eneligibilityremark = models.CharField(db_column='ENEligibilityRemark', max_length=500, blank=True)  # Field name made lowercase.
    traveldatedirection = models.CharField(db_column='TravelDateDirection', max_length=3, blank=True)  # Field name made lowercase.
    bnonref = models.CharField(db_column='BNonRef', max_length=1, blank=True)  # Field name made lowercase.
    bnonrer = models.CharField(db_column='BNonRer', max_length=1, blank=True)  # Field name made lowercase.
    bnonend = models.CharField(db_column='BNonEnd', max_length=1, blank=True)  # Field name made lowercase.
    primarysegment = models.CharField(db_column='PrimarySegment', max_length=30, blank=True)  # Field name made lowercase.
    salerate = models.DecimalField(db_column='SaleRate', max_digits=7, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    oilfee = models.DecimalField(db_column='OilFee', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    taxfee = models.DecimalField(db_column='TaxFee', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    zrate = models.DecimalField(db_column='Zrate', max_digits=8, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
    recommend = models.SmallIntegerField(db_column='Recommend', blank=True, null=True)  # Field name made lowercase.
    appscope = models.CharField(db_column='AppScope', max_length=150, blank=True)  # Field name made lowercase.
    appscopetype = models.IntegerField(db_column='AppScopeType', blank=True, null=True)  # Field name made lowercase.
    flightlimittype = models.CharField(db_column='FlightLimitType', max_length=1, blank=True)  # Field name made lowercase.
    flightscope = models.CharField(db_column='FlightScope', max_length=800, blank=True)  # Field name made lowercase.
    maxtransfernum = models.IntegerField(db_column='MaxTransferNum', blank=True, null=True)  # Field name made lowercase.
    mintransfernum = models.IntegerField(db_column='MinTransferNum', blank=True, null=True)  # Field name made lowercase.
    isspecial = models.BooleanField(db_column='IsSpecial')  # Field name made lowercase.
    matchedticketairline = models.CharField(db_column='MatchedTicketAirline', max_length=500, blank=True)  # Field name made lowercase.
    iscontainoil = models.NullBooleanField(db_column='IsContainOil')  # Field name made lowercase.
    ctcustomercode = models.CharField(db_column='CTCustomerCode', max_length=100, blank=True)  # Field name made lowercase.
    outboundrebookingfee = models.DecimalField(db_column='OutboundRebookingFee', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    outboundrebookingcurrency = models.CharField(db_column='OutboundRebookingCurrency', max_length=3, blank=True)  # Field name made lowercase.
    inboundrebookingfee = models.DecimalField(db_column='InboundRebookingFee', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    inboundrebookingcurrency = models.CharField(db_column='InboundRebookingCurrency', max_length=3, blank=True)  # Field name made lowercase.
    unusedrefundfee = models.DecimalField(db_column='UnusedRefundFee', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    unusedrefundcurrency = models.CharField(db_column='UnusedRefundCurrency', max_length=3, blank=True)  # Field name made lowercase.
    usedpartialrefundfee = models.DecimalField(db_column='UsedPartialRefundFee', max_digits=8, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    usedpartialrefundcurrency = models.CharField(db_column='UsedPartialRefundCurrency', max_length=3, blank=True)  # Field name made lowercase.
    openjawcitypair1 = models.CharField(db_column='OpenJawCityPair1', max_length=50, blank=True)  # Field name made lowercase.
    openjawcitypair2 = models.CharField(db_column='OpenJawCityPair2', max_length=50, blank=True)  # Field name made lowercase.
    openjawcitypair3 = models.CharField(db_column='OpenJawCityPair3', max_length=50, blank=True)  # Field name made lowercase.
    openjawsurcharge1 = models.DecimalField(db_column='OpenJawSurcharge1', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    openjawsurcharge2 = models.DecimalField(db_column='OpenJawSurcharge2', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    openjawsurcharge3 = models.DecimalField(db_column='OpenJawSurcharge3', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    openjawsurchargecurrency1 = models.CharField(db_column='OpenJawSurchargeCurrency1', max_length=3, blank=True)  # Field name made lowercase.
    openjawsurchargecurrency2 = models.CharField(db_column='OpenJawSurchargeCurrency2', max_length=3, blank=True)  # Field name made lowercase.
    openjawsurchargecurrency3 = models.CharField(db_column='OpenJawSurchargeCurrency3', max_length=3, blank=True)  # Field name made lowercase.
    returnpoint = models.CharField(db_column='ReturnPoint', max_length=50, blank=True)  # Field name made lowercase.
    puinboundtraveldate = models.CharField(db_column='PUInboundTravelDate', max_length=1000, blank=True)  # Field name made lowercase.
    puoutboundtraveldate = models.CharField(db_column='PUOutboundTravelDate', max_length=1000, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'NF_NormalFare'


class NfNormalfaredetail(models.Model):
    normalfareid = models.BigIntegerField(db_column='NormalFareID')  # Field name made lowercase.
    ctcompanyid = models.CharField(db_column='CTCompanyID', max_length=20)  # Field name made lowercase.
    ctrebate = models.CharField(db_column='CTRebate', max_length=10)  # Field name made lowercase.
    isnewclass = models.BooleanField(db_column='IsNewClass')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    channel = models.CharField(db_column='Channel', max_length=50, blank=True)  # Field name made lowercase.
    isprivate = models.NullBooleanField(db_column='IsPrivate')  # Field name made lowercase.
    accountcode = models.CharField(db_column='AccountCode', max_length=20, blank=True)  # Field name made lowercase.
    fcmaxsegs = models.SmallIntegerField(db_column='FCMaxSegs', blank=True, null=True)  # Field name made lowercase.
    travelwholewithintype = models.CharField(db_column='TravelWholeWithinType', max_length=8, blank=True)  # Field name made lowercase.
    travelwholewithinlocation = models.CharField(db_column='TravelWholeWithinLocation', max_length=8, blank=True)  # Field name made lowercase.
    jointcarrier = models.CharField(db_column='JointCarrier', max_length=10, blank=True)  # Field name made lowercase.
    fbrfltrestriction = models.CharField(db_column='FBRFltRestriction', max_length=500, blank=True)  # Field name made lowercase.
    sametariffrule = models.CharField(db_column='SameTariffRule', max_length=1, blank=True)  # Field name made lowercase.
    ticketcode = models.CharField(db_column='TicketCode', max_length=20, blank=True)  # Field name made lowercase.
    tickettype = models.SmallIntegerField(db_column='TicketType', blank=True, null=True)  # Field name made lowercase.
    table989rbd2 = models.CharField(db_column='Table989RBD2', max_length=10, blank=True)  # Field name made lowercase.
    isactivated = models.NullBooleanField(db_column='IsActivated')  # Field name made lowercase.
    modifyuser = models.CharField(db_column='ModifyUser', max_length=20, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    issuedeadline = models.CharField(db_column='IssueDeadLine', max_length=500, blank=True)  # Field name made lowercase.
    rulenumber = models.CharField(db_column='RuleNumber', max_length=50, blank=True)  # Field name made lowercase.
    tariffcode = models.CharField(db_column='TariffCode', max_length=50, blank=True)  # Field name made lowercase.
    fareclass = models.CharField(db_column='FareClass', max_length=50, blank=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'NF_NormalFareDetail'


class OPkgordertracklog(models.Model):
    o_pkgordertracklogid = models.BigIntegerField(db_column='O_PkgOrderTrackLogID')  # Field name made lowercase.
    o_pkgordertrackid = models.BigIntegerField(db_column='O_PkgOrderTrackId')  # Field name made lowercase.
    eid = models.CharField(db_column='Eid', max_length=20, blank=True)  # Field name made lowercase.
    operatordesc = models.CharField(db_column='OperatorDesc', max_length=500, blank=True)  # Field name made lowercase.
    operatortype = models.SmallIntegerField(db_column='OperatorType', blank=True, null=True)  # Field name made lowercase.
    oreratortime = models.DateTimeField(db_column='OreratorTime', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'O_PkgOrderTrackLog'


class PageviewRuleid(models.Model):
    d = models.CharField(max_length=10, blank=True)
    subchannelname = models.CharField(db_column='Subchannelname', max_length=20, blank=True)  # Field name made lowercase.
    uv = models.IntegerField(db_column='UV', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)
    c_type = models.CharField(max_length=10, blank=True)

    class Meta:
        managed = False
        db_table = 'Pageview_RuleID'


class Pkgminprice(models.Model):
    pkg = models.IntegerField(db_column='Pkg')  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate')  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity')  # Field name made lowercase.
    minprice = models.DecimalField(db_column='MinPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    minpriceremark = models.CharField(db_column='MinPriceRemark', max_length=2000, blank=True)  # Field name made lowercase.
    calcdatetime = models.DateTimeField(db_column='CalcDateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'PkgMinPrice'


class Pkgminpriceplus(models.Model):
    pkg = models.IntegerField(db_column='Pkg')  # Field name made lowercase.
    startcity = models.IntegerField(db_column='StartCity')  # Field name made lowercase.
    minprice = models.DecimalField(db_column='MinPrice', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    minpriceremark = models.CharField(db_column='MinPriceRemark', max_length=2000, blank=True)  # Field name made lowercase.
    modifytime = models.DateTimeField(db_column='ModifyTime', blank=True, null=True)  # Field name made lowercase.
    cashbackamount = models.DecimalField(db_column='CashBackAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    discount = models.DecimalField(db_column='Discount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cancashback = models.CharField(db_column='CanCashBack', max_length=1, blank=True)  # Field name made lowercase.
    discountremark = models.CharField(db_column='DiscountRemark', max_length=1000, blank=True)  # Field name made lowercase.
    marketprice = models.DecimalField(db_column='MarketPrice', max_digits=19, decimal_places=4)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    costprice = models.DecimalField(db_column='CostPrice', max_digits=19, decimal_places=4)  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'PkgMinPricePlus'


class PkgWebOnlineRiskItemMonitor(models.Model):
    start_city = models.CharField(max_length=64, blank=True)
    dest_city = models.CharField(max_length=64, blank=True)
    flight_code = models.CharField(db_column='Flight_code', max_length=32, blank=True)  # Field name made lowercase.
    item_id = models.IntegerField(blank=True, null=True)
    item_name = models.CharField(max_length=100, blank=True)
    start_date = models.DateField(blank=True, null=True)
    resource_manager = models.CharField(max_length=100, blank=True)
    resource_assistant = models.CharField(max_length=100, blank=True)
    purchase_group = models.CharField(max_length=100, blank=True)
    trip_days = models.IntegerField(blank=True, null=True)
    stock = models.IntegerField(blank=True, null=True)
    risk_owner = models.CharField(max_length=100, blank=True)
    risk_manager = models.CharField(max_length=100, blank=True)
    supply_code = models.IntegerField(blank=True, null=True)
    supply_name = models.CharField(max_length=100, blank=True)
    pay_id = models.CharField(max_length=100, blank=True)
    achieved_rate = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    back_num = models.IntegerField(blank=True, null=True)
    sold_num = models.IntegerField(blank=True, null=True)
    sold_percent = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    left_sell_days = models.IntegerField(blank=True, null=True)
    start_sell_date = models.DateField(blank=True, null=True)
    possible_lose_money = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    not_in_tour_num = models.IntegerField(blank=True, null=True)
    priceadult = models.DecimalField(db_column='priceAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costadult = models.DecimalField(db_column='costAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    pricechd = models.DecimalField(db_column='priceChd', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costchd = models.DecimalField(db_column='costChd', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    adultpriceadj = models.DecimalField(db_column='adultPriceAdj', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    chdpriceadj = models.IntegerField(db_column='chdPriceAdj', blank=True, null=True)  # Field name made lowercase.
    break_even = models.IntegerField(blank=True, null=True)
    district = models.CharField(max_length=8, blank=True)
    profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    deposit = models.IntegerField(blank=True, null=True)
    policycode = models.CharField(max_length=64, blank=True)
    last_opt_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'Pkg_Web_Online_Risk_Item_Monitor'


class PkgWebOnlineRiskItemMonitorLog(models.Model):
    proc_name = models.CharField(max_length=64, blank=True)
    desc_text = models.CharField(max_length=128, blank=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)
    is_error = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Pkg_Web_Online_Risk_Item_Monitor_log'


class PkgWebOnlineRiskItemMonitorStatus(models.Model):
    date = models.DateField(primary_key=True)
    status = models.IntegerField(blank=True, null=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Pkg_Web_Online_Risk_Item_Monitor_status'


class Promotion(models.Model):
    promotionid = models.IntegerField(db_column='PromotionID')  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=64, blank=True)  # Field name made lowercase.
    displayname = models.CharField(db_column='DisplayName', max_length=256, blank=True)  # Field name made lowercase.
    costtypeid = models.IntegerField(db_column='CostTypeID', blank=True, null=True)  # Field name made lowercase.
    promotionmethodid = models.IntegerField(db_column='PromotionMethodID', blank=True, null=True)  # Field name made lowercase.
    budget = models.DecimalField(db_column='Budget', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    promotiontypeid = models.CharField(db_column='PromotionTypeID', max_length=128, blank=True)  # Field name made lowercase.
    unittypeid = models.IntegerField(db_column='UnitTypeID', blank=True, null=True)  # Field name made lowercase.
    limittypeid = models.IntegerField(db_column='LimitTypeID', blank=True, null=True)  # Field name made lowercase.
    amountlimit = models.DecimalField(db_column='AmountLimit', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    countlimit = models.IntegerField(db_column='CountLimit', blank=True, null=True)  # Field name made lowercase.
    countleft = models.IntegerField(db_column='CountLeft', blank=True, null=True)  # Field name made lowercase.
    amountleft = models.DecimalField(db_column='AmountLeft', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    coupontypeid = models.IntegerField(db_column='CouponTypeID', blank=True, null=True)  # Field name made lowercase.
    couponcode = models.CharField(db_column='CouponCode', max_length=32, blank=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateTimeField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    disabledate = models.DateTimeField(db_column='DisableDate', blank=True, null=True)  # Field name made lowercase.
    changedata_lasttime = models.DateTimeField(db_column='ChangeData_LastTime', blank=True, null=True)  # Field name made lowercase.
    claimleft = models.IntegerField(db_column='ClaimLeft', blank=True, null=True)  # Field name made lowercase.
    claimlimit = models.IntegerField(db_column='ClaimLimit', blank=True, null=True)  # Field name made lowercase.
    costaccountingtypeid = models.IntegerField(db_column='CostAccountingTypeID', blank=True, null=True)  # Field name made lowercase.
    costerproductlinechildid = models.IntegerField(db_column='CosterProductLineChildID', blank=True, null=True)  # Field name made lowercase.
    costerproductlineid = models.IntegerField(db_column='CosterProductLineID', blank=True, null=True)  # Field name made lowercase.
    createdate = models.DateTimeField(db_column='CreateDate', blank=True, null=True)  # Field name made lowercase.
    createrproductlineid = models.IntegerField(db_column='CreaterProductLineID', blank=True, null=True)  # Field name made lowercase.
    createuser = models.CharField(db_column='CreateUser', max_length=50, blank=True)  # Field name made lowercase.
    deductionstrategytypeid = models.IntegerField(db_column='DeductionStrategyTypeID', blank=True, null=True)  # Field name made lowercase.
    isgenerationcouponcode = models.NullBooleanField(db_column='IsGenerationCouponCode')  # Field name made lowercase.
    issendemail = models.NullBooleanField(db_column='IsSendEmail')  # Field name made lowercase.
    promotionstatus = models.SmallIntegerField(db_column='PromotionStatus', blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=256, blank=True)  # Field name made lowercase.
    userproductlineids = models.CharField(db_column='UserProductLineIDs', max_length=256, blank=True)  # Field name made lowercase.
    accountproductlineid = models.IntegerField(db_column='AccountProductLineID', blank=True, null=True)  # Field name made lowercase.
    costpercent = models.CharField(db_column='CostPercent', max_length=50, blank=True)  # Field name made lowercase.
    costinfotype = models.SmallIntegerField(db_column='CostInfoType', blank=True, null=True)  # Field name made lowercase.
    externalassume = models.DecimalField(db_column='ExternalAssume', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    internalassume = models.DecimalField(db_column='InternalAssume', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    profitsagainst = models.DecimalField(db_column='ProfitsAgainst', max_digits=18, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costcenterdescription = models.CharField(db_column='CostCenterDescription', max_length=255, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Promotion'


class PubPkgt3ItempriceLog(models.Model):
    pkid = models.IntegerField(db_column='PKID')  # Field name made lowercase.
    item = models.IntegerField(blank=True, null=True)
    effectdate = models.DateTimeField(db_column='effectDate', blank=True, null=True)  # Field name made lowercase.
    expiredate = models.DateTimeField(db_column='expireDate', blank=True, null=True)  # Field name made lowercase.
    priceadult = models.DecimalField(db_column='priceAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costadult = models.DecimalField(db_column='costAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    pricechild = models.DecimalField(db_column='priceChild', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costchild = models.DecimalField(db_column='costChild', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    pricebaby = models.DecimalField(db_column='priceBaby', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costbaby = models.DecimalField(db_column='costBaby', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    active = models.CharField(max_length=1, blank=True)
    currency = models.CharField(max_length=1, blank=True)
    costexchange = models.FloatField(db_column='costExchange', blank=True, null=True)  # Field name made lowercase.
    costadultfc = models.DecimalField(db_column='costAdultFC', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costchildfc = models.DecimalField(db_column='costChildFC', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costbabyfc = models.DecimalField(db_column='costBabyFC', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    itempriceadj = models.DecimalField(db_column='itemPriceAdj', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    itemchdpriceadj = models.DecimalField(db_column='itemchdPriceAdj', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    priceadultdiff = models.DecimalField(db_column='PriceAdultDiff', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    costadultdiff = models.DecimalField(db_column='CostAdultDiff', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    modifier = models.CharField(db_column='Modifier', max_length=100, blank=True)  # Field name made lowercase.
    modifytime = models.DateTimeField(db_column='ModifyTime', blank=True, null=True)  # Field name made lowercase.
    modifytype = models.CharField(db_column='ModifyType', max_length=1, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Pub_PkgT3ItemPrice_Log'


class SbuDiyKpiIi(models.Model):
    d = models.CharField(max_length=10, blank=True)
    visits = models.IntegerField(blank=True, null=True)
    conversions = models.IntegerField(blank=True, null=True)
    conversiontype = models.CharField(max_length=50, blank=True)

    class Meta:
        managed = False
        db_table = 'SBU_DIY_KPI_II'


class SdpHotelroomCalendarprice(models.Model):
    hcalendarid = models.BigIntegerField(db_column='HCalendarId')  # Field name made lowercase.
    roomid = models.BigIntegerField(db_column='RoomId')  # Field name made lowercase.
    hotelid = models.BigIntegerField(db_column='HotelId', blank=True, null=True)  # Field name made lowercase.
    begindate = models.DateTimeField(db_column='BeginDate', blank=True, null=True)  # Field name made lowercase.
    d1 = models.DecimalField(db_column='D1', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d2 = models.DecimalField(db_column='D2', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d3 = models.DecimalField(db_column='D3', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d4 = models.DecimalField(db_column='D4', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d5 = models.DecimalField(db_column='D5', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d6 = models.DecimalField(db_column='D6', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d7 = models.DecimalField(db_column='D7', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d8 = models.DecimalField(db_column='D8', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d9 = models.DecimalField(db_column='D9', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d10 = models.DecimalField(db_column='D10', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d11 = models.DecimalField(db_column='D11', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d12 = models.DecimalField(db_column='D12', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d13 = models.DecimalField(db_column='D13', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d14 = models.DecimalField(db_column='D14', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d15 = models.DecimalField(db_column='D15', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d16 = models.DecimalField(db_column='D16', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d17 = models.DecimalField(db_column='D17', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d18 = models.DecimalField(db_column='D18', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d19 = models.DecimalField(db_column='D19', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d20 = models.DecimalField(db_column='D20', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d21 = models.DecimalField(db_column='D21', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d22 = models.DecimalField(db_column='D22', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d23 = models.DecimalField(db_column='D23', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d24 = models.DecimalField(db_column='D24', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d25 = models.DecimalField(db_column='D25', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d26 = models.DecimalField(db_column='D26', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d27 = models.DecimalField(db_column='D27', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d28 = models.DecimalField(db_column='D28', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d29 = models.DecimalField(db_column='D29', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d30 = models.DecimalField(db_column='D30', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d31 = models.DecimalField(db_column='D31', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d32 = models.DecimalField(db_column='D32', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d33 = models.DecimalField(db_column='D33', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d34 = models.DecimalField(db_column='D34', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d35 = models.DecimalField(db_column='D35', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d36 = models.DecimalField(db_column='D36', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.
    nights = models.CharField(db_column='Nights', max_length=512, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SDP_HotelRoom_CalendarPrice'


class SdpTicketsCalendarprice(models.Model):
    tcalendarid = models.BigIntegerField(db_column='TCalendarId')  # Field name made lowercase.
    resourceid = models.BigIntegerField(db_column='ResourceId')  # Field name made lowercase.
    productid = models.BigIntegerField(db_column='ProductId', blank=True, null=True)  # Field name made lowercase.
    begindate = models.DateTimeField(db_column='BeginDate', blank=True, null=True)  # Field name made lowercase.
    d1 = models.DecimalField(db_column='D1', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d2 = models.DecimalField(db_column='D2', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d3 = models.DecimalField(db_column='D3', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d4 = models.DecimalField(db_column='D4', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d5 = models.DecimalField(db_column='D5', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d6 = models.DecimalField(db_column='D6', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d7 = models.DecimalField(db_column='D7', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d8 = models.DecimalField(db_column='D8', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d9 = models.DecimalField(db_column='D9', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d10 = models.DecimalField(db_column='D10', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d11 = models.DecimalField(db_column='D11', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d12 = models.DecimalField(db_column='D12', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d13 = models.DecimalField(db_column='D13', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d14 = models.DecimalField(db_column='D14', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d15 = models.DecimalField(db_column='D15', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d16 = models.DecimalField(db_column='D16', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d17 = models.DecimalField(db_column='D17', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d18 = models.DecimalField(db_column='D18', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d19 = models.DecimalField(db_column='D19', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d20 = models.DecimalField(db_column='D20', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d21 = models.DecimalField(db_column='D21', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d22 = models.DecimalField(db_column='D22', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d23 = models.DecimalField(db_column='D23', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d24 = models.DecimalField(db_column='D24', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d25 = models.DecimalField(db_column='D25', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d26 = models.DecimalField(db_column='D26', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d27 = models.DecimalField(db_column='D27', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d28 = models.DecimalField(db_column='D28', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d29 = models.DecimalField(db_column='D29', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d30 = models.DecimalField(db_column='D30', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d31 = models.DecimalField(db_column='D31', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d32 = models.DecimalField(db_column='D32', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d33 = models.DecimalField(db_column='D33', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d34 = models.DecimalField(db_column='D34', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d35 = models.DecimalField(db_column='D35', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    d36 = models.DecimalField(db_column='D36', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.
    nights = models.CharField(db_column='Nights', max_length=512, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SDP_Tickets_CalendarPrice'


class TianmaHotel(models.Model):
    hotelseqid = models.BigIntegerField(db_column='HotelSeqID')  # Field name made lowercase.
    hotel = models.IntegerField(db_column='Hotel', blank=True, null=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=200, blank=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=200, blank=True)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=50, blank=True)  # Field name made lowercase.
    star = models.SmallIntegerField(db_column='Star', blank=True, null=True)  # Field name made lowercase.
    zone = models.IntegerField(db_column='Zone', blank=True, null=True)  # Field name made lowercase.
    zonename = models.CharField(db_column='ZoneName', max_length=100, blank=True)  # Field name made lowercase.
    mgrgroup = models.IntegerField(db_column='MgrGroup', blank=True, null=True)  # Field name made lowercase.
    mgrgroupname = models.CharField(db_column='MgrGroupName', max_length=500, blank=True)  # Field name made lowercase.
    hotelbelongto = models.CharField(db_column='HotelBelongTo', max_length=3, blank=True)  # Field name made lowercase.
    masterhotelid = models.IntegerField(db_column='MasterHotelID', blank=True, null=True)  # Field name made lowercase.
    bookable = models.CharField(db_column='Bookable', max_length=1, blank=True)  # Field name made lowercase.
    ismaskedhotel = models.CharField(db_column='IsMaskedHotel', max_length=1, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    city = models.IntegerField(db_column='City', blank=True, null=True)  # Field name made lowercase.
    cprflag = models.SmallIntegerField(db_column='CPRFlag', blank=True, null=True)  # Field name made lowercase.
    ctripstar = models.SmallIntegerField(db_column='CtripStar', blank=True, null=True)  # Field name made lowercase.
    fax = models.CharField(db_column='Fax', max_length=50, blank=True)  # Field name made lowercase.
    gdlat = models.FloatField(db_column='GDLAT', blank=True, null=True)  # Field name made lowercase.
    gdlon = models.FloatField(db_column='GDLON', blank=True, null=True)  # Field name made lowercase.
    supplierid = models.IntegerField(db_column='SupplierID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Hotel'


class TianmaHotelmappingrelation(models.Model):
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID')  # Field name made lowercase.
    mapstatus = models.IntegerField(db_column='MapStatus', blank=True, null=True)  # Field name made lowercase.
    ctriphotelid = models.IntegerField(db_column='CtripHotelID', blank=True, null=True)  # Field name made lowercase.
    ctriphotelname = models.CharField(db_column='CtripHotelName', max_length=1024, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    hotelid = models.CharField(db_column='HotelID', max_length=50, blank=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=1024, blank=True)  # Field name made lowercase.
    websiteid = models.IntegerField(db_column='WebSiteID', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    href = models.CharField(db_column='Href', max_length=100, blank=True)  # Field name made lowercase.
    cityid = models.IntegerField(db_column='CityID', blank=True, null=True)  # Field name made lowercase.
    datachange_ctriplasttime = models.DateTimeField(db_column='DataChange_CtripLastTime', blank=True, null=True)  # Field name made lowercase.
    datachange_vendorlasttime = models.DateTimeField(db_column='DataChange_VendorLastTime', blank=True, null=True)  # Field name made lowercase.
    vendorcityname = models.CharField(db_column='VendorCityName', max_length=200, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_HotelMappingRelation'


class TianmaIntlCtriphotel(models.Model):
    hotelseqid = models.BigIntegerField(db_column='HotelSeqID')  # Field name made lowercase.
    ctriphotelid = models.IntegerField(db_column='CtripHotelID', blank=True, null=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=200, blank=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=200, blank=True)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=50, blank=True)  # Field name made lowercase.
    star = models.SmallIntegerField(db_column='Star', blank=True, null=True)  # Field name made lowercase.
    zone = models.IntegerField(db_column='Zone', blank=True, null=True)  # Field name made lowercase.
    zonename = models.CharField(db_column='ZoneName', max_length=100, blank=True)  # Field name made lowercase.
    mgrgroup = models.IntegerField(db_column='MgrGroup', blank=True, null=True)  # Field name made lowercase.
    mgrgroupname = models.CharField(db_column='MgrGroupName', max_length=500, blank=True)  # Field name made lowercase.
    hotelbelongto = models.CharField(db_column='HotelBelongTo', max_length=3, blank=True)  # Field name made lowercase.
    masterhotelid = models.IntegerField(db_column='MasterHotelID', blank=True, null=True)  # Field name made lowercase.
    bookable = models.CharField(db_column='Bookable', max_length=1, blank=True)  # Field name made lowercase.
    ismaskedhotel = models.CharField(db_column='IsMaskedHotel', max_length=1, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    city = models.IntegerField(db_column='City', blank=True, null=True)  # Field name made lowercase.
    cityname = models.CharField(db_column='CityName', max_length=50, blank=True)  # Field name made lowercase.
    province = models.IntegerField(db_column='Province', blank=True, null=True)  # Field name made lowercase.
    provincename = models.CharField(db_column='ProvinceName', max_length=50, blank=True)  # Field name made lowercase.
    cprflag = models.SmallIntegerField(db_column='CPRFlag', blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True)  # Field name made lowercase.
    gdlat = models.FloatField(db_column='GDLAT', blank=True, null=True)  # Field name made lowercase.
    gdlon = models.FloatField(db_column='GDLON', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_CtripHotel'


class TianmaIntlHotelmappingrelation(models.Model):
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID')  # Field name made lowercase.
    mapstatus = models.IntegerField(db_column='MapStatus', blank=True, null=True)  # Field name made lowercase.
    ctriphotelid = models.IntegerField(db_column='CtripHotelID', blank=True, null=True)  # Field name made lowercase.
    ctriphotelname = models.CharField(db_column='CtripHotelName', max_length=1024, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    hotelid = models.CharField(db_column='HotelID', max_length=50, blank=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=1024, blank=True)  # Field name made lowercase.
    websiteid = models.IntegerField(db_column='WebSiteID', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    href = models.CharField(db_column='Href', max_length=100, blank=True)  # Field name made lowercase.
    cityid = models.IntegerField(db_column='CityID', blank=True, null=True)  # Field name made lowercase.
    datachange_ctriplasttime = models.DateTimeField(db_column='DataChange_CtripLastTime', blank=True, null=True)  # Field name made lowercase.
    datachange_vendorlasttime = models.DateTimeField(db_column='DataChange_VendorLastTime', blank=True, null=True)  # Field name made lowercase.
    vendorcityname = models.CharField(db_column='VendorCityName', max_length=200, blank=True)  # Field name made lowercase.
    vendorcountryname = models.CharField(db_column='VendorCountryName', max_length=200, blank=True)  # Field name made lowercase.
    vendorprovincename = models.CharField(db_column='VendorProvinceName', max_length=200, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_HotelMappingRelation'


class TianmaIntlRatenparity(models.Model):
    ratenparityid = models.BigIntegerField(db_column='RateNparityID')  # Field name made lowercase.
    ctriproomid = models.IntegerField(db_column='CtripRoomID', blank=True, null=True)  # Field name made lowercase.
    ctripbaseroomid = models.IntegerField(db_column='CtripBaseRoomID', blank=True, null=True)  # Field name made lowercase.
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    roommappingrelationid = models.BigIntegerField(db_column='RoomMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    vendordealprice = models.DecimalField(db_column='VendorDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorresprice = models.DecimalField(db_column='VendorResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripdealprice = models.DecimalField(db_column='CtripDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripresprice = models.DecimalField(db_column='CtripResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    deltaprice = models.DecimalField(db_column='DeltaPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorroompriceid = models.BigIntegerField(db_column='VendorRoomPriceID', blank=True, null=True)  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    checkindate = models.DateTimeField(db_column='CheckInDate', blank=True, null=True)  # Field name made lowercase.
    checkoutdate = models.DateTimeField(db_column='CheckOutDate', blank=True, null=True)  # Field name made lowercase.
    ctripbreakfast = models.SmallIntegerField(db_column='CtripBreakfast', blank=True, null=True)  # Field name made lowercase.
    vendorbreakfast = models.SmallIntegerField(db_column='VendorBreakfast', blank=True, null=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=100, blank=True)  # Field name made lowercase.
    other1 = models.CharField(db_column='Other1', max_length=50, blank=True)  # Field name made lowercase.
    needprepay = models.SmallIntegerField(db_column='NeedPrePay', blank=True, null=True)  # Field name made lowercase.
    ctripchildhotelid = models.IntegerField(db_column='CtripChildHotelID', blank=True, null=True)  # Field name made lowercase.
    ctripneedprepay = models.SmallIntegerField(db_column='CtripNeedPrePay', blank=True, null=True)  # Field name made lowercase.
    websitehref = models.CharField(db_column='WebsiteHref', max_length=800, blank=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=10, blank=True)  # Field name made lowercase.
    paytype = models.SmallIntegerField(db_column='PayType', blank=True, null=True)  # Field name made lowercase.
    deltapricepct = models.DecimalField(db_column='DeltaPricePct', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    ctriproomname = models.CharField(db_column='CtripRoomName', max_length=400, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_RateNparity'


class TianmaIntlRatenparitydealpros(models.Model):
    ratenparityid = models.BigIntegerField(db_column='RateNparityID')  # Field name made lowercase.
    ctriproomid = models.IntegerField(db_column='CtripRoomID', blank=True, null=True)  # Field name made lowercase.
    ctripbaseroomid = models.IntegerField(db_column='CtripBaseRoomID', blank=True, null=True)  # Field name made lowercase.
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    roommappingrelationid = models.BigIntegerField(db_column='RoomMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    vendordealprice = models.DecimalField(db_column='VendorDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorresprice = models.DecimalField(db_column='VendorResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripdealprice = models.DecimalField(db_column='CtripDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripresprice = models.DecimalField(db_column='CtripResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    deltaprice = models.DecimalField(db_column='DeltaPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorroompriceid = models.BigIntegerField(db_column='VendorRoomPriceID', blank=True, null=True)  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    checkindate = models.DateTimeField(db_column='CheckInDate', blank=True, null=True)  # Field name made lowercase.
    checkoutdate = models.DateTimeField(db_column='CheckOutDate', blank=True, null=True)  # Field name made lowercase.
    ctripbreakfast = models.SmallIntegerField(db_column='CtripBreakfast', blank=True, null=True)  # Field name made lowercase.
    vendorbreakfast = models.SmallIntegerField(db_column='VendorBreakfast', blank=True, null=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=100, blank=True)  # Field name made lowercase.
    other1 = models.CharField(db_column='Other1', max_length=50, blank=True)  # Field name made lowercase.
    needprepay = models.SmallIntegerField(db_column='NeedPrePay', blank=True, null=True)  # Field name made lowercase.
    ctripchildhotelid = models.IntegerField(db_column='CtripChildHotelID', blank=True, null=True)  # Field name made lowercase.
    ctripneedprepay = models.SmallIntegerField(db_column='CtripNeedPrePay', blank=True, null=True)  # Field name made lowercase.
    websitehref = models.CharField(db_column='WebsiteHref', max_length=800, blank=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=800, blank=True)  # Field name made lowercase.
    paytype = models.SmallIntegerField(db_column='PayType', blank=True, null=True)  # Field name made lowercase.
    deltapricepct = models.DecimalField(db_column='DeltaPricePct', max_digits=5, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    ctriproomname = models.CharField(db_column='CtripRoomName', max_length=400, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_RateNparityDealPros'


class TianmaIntlRoommappingrelation(models.Model):
    roommappingrelationid = models.BigIntegerField(db_column='RoomMappingRelationID')  # Field name made lowercase.
    mapstatus = models.IntegerField(db_column='MapStatus', blank=True, null=True)  # Field name made lowercase.
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    ctriproomid = models.IntegerField(db_column='CtripRoomID', blank=True, null=True)  # Field name made lowercase.
    ctriproomname = models.CharField(db_column='CtripRoomName', max_length=1600, blank=True)  # Field name made lowercase.
    ctripbaseroomid = models.IntegerField(db_column='CtripBaseRoomID', blank=True, null=True)  # Field name made lowercase.
    ctripbaseroomname = models.CharField(db_column='CtripBaseRoomName', max_length=100, blank=True)  # Field name made lowercase.
    roomid = models.CharField(db_column='RoomID', max_length=20, blank=True)  # Field name made lowercase.
    roomname = models.CharField(db_column='RoomName', max_length=200, blank=True)  # Field name made lowercase.
    baseroomid = models.CharField(db_column='BaseRoomID', max_length=20, blank=True)  # Field name made lowercase.
    baseroomname = models.CharField(db_column='BaseRoomName', max_length=1000, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_RoomMappingRelation'


class TianmaIntlVendorhotelstaticinfo(models.Model):
    vendorhotelstaticinfoid = models.IntegerField(db_column='VendorHotelStaticInfoID')  # Field name made lowercase.
    hotelid = models.CharField(db_column='HotelID', max_length=50, blank=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=1024, blank=True)  # Field name made lowercase.
    websiteid = models.IntegerField(db_column='WebSiteID', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=1024, blank=True)  # Field name made lowercase.
    schemaversion = models.IntegerField(db_column='SchemaVersion', blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=50, blank=True)  # Field name made lowercase.
    fax = models.CharField(db_column='Fax', max_length=50, blank=True)  # Field name made lowercase.
    openyear = models.DateTimeField(db_column='OpenYear', blank=True, null=True)  # Field name made lowercase.
    fitmentyear = models.DateTimeField(db_column='FitmentYear', blank=True, null=True)  # Field name made lowercase.
    hotelename = models.CharField(db_column='HotelEName', max_length=1024, blank=True)  # Field name made lowercase.
    brandname = models.CharField(db_column='BrandName', max_length=100, blank=True)  # Field name made lowercase.
    star = models.DecimalField(db_column='Star', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    diamond = models.DecimalField(db_column='Diamond', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    vendorlongitude = models.FloatField(db_column='Vendorlongitude', blank=True, null=True)  # Field name made lowercase.
    vendorlatitude = models.FloatField(db_column='Vendorlatitude', blank=True, null=True)  # Field name made lowercase.
    vendorgpstype = models.CharField(db_column='VendorGPSType', max_length=1, blank=True)  # Field name made lowercase.
    ctriplongitude = models.FloatField(db_column='Ctriplongitude', blank=True, null=True)  # Field name made lowercase.
    ctriplatitude = models.FloatField(db_column='Ctriplatitude', blank=True, null=True)  # Field name made lowercase.
    ctripgpstype = models.CharField(db_column='CtripGPSType', max_length=1, blank=True)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=1024, blank=True)  # Field name made lowercase.
    vendorfacilityxmlnode = models.TextField(db_column='VendorFacilityXMLNode', blank=True)  # Field name made lowercase. This field type is a guess.
    district = models.CharField(db_column='District', max_length=100, blank=True)  # Field name made lowercase.
    zone = models.CharField(db_column='Zone', max_length=100, blank=True)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=300, blank=True)  # Field name made lowercase.
    ctripdistrictid = models.IntegerField(db_column='CtripDistrictID', blank=True, null=True)  # Field name made lowercase.
    ctripzoneid = models.IntegerField(db_column='CtripZoneID', blank=True, null=True)  # Field name made lowercase.
    ctripcityid = models.IntegerField(db_column='CtripCityID', blank=True, null=True)  # Field name made lowercase.
    bookable = models.CharField(db_column='Bookable', max_length=1, blank=True)  # Field name made lowercase.
    roomquantity = models.IntegerField(db_column='RoomQuantity', blank=True, null=True)  # Field name made lowercase.
    hotelcategory = models.CharField(db_column='HotelCategory', max_length=40, blank=True)  # Field name made lowercase.
    hotelheight = models.CharField(db_column='HotelHeight', max_length=20, blank=True)  # Field name made lowercase.
    matchstatus = models.SmallIntegerField(db_column='MatchStatus', blank=True, null=True)  # Field name made lowercase.
    md5 = models.CharField(db_column='MD5', max_length=32, blank=True)  # Field name made lowercase.
    iscrown = models.CharField(db_column='IsCrown', max_length=1, blank=True)  # Field name made lowercase.
    hotelstatus = models.SmallIntegerField(db_column='HotelStatus', blank=True, null=True)  # Field name made lowercase.
    hoteltype = models.SmallIntegerField(db_column='HotelType', blank=True, null=True)  # Field name made lowercase.
    url = models.CharField(db_column='URL', max_length=1600, blank=True)  # Field name made lowercase.
    country = models.CharField(db_column='Country', max_length=300, blank=True)  # Field name made lowercase.
    province = models.CharField(db_column='Province', max_length=300, blank=True)  # Field name made lowercase.
    vendorcityename = models.CharField(db_column='VendorCityEName', max_length=300, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_VendorHotelStaticInfo'


class TianmaIntlVendorroomprice(models.Model):
    vendorroompriceid = models.BigIntegerField(db_column='VendorRoomPriceID')  # Field name made lowercase.
    hotelid = models.CharField(db_column='HotelID', max_length=50, blank=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=1024, blank=True)  # Field name made lowercase.
    roomid = models.CharField(db_column='RoomID', max_length=20, blank=True)  # Field name made lowercase.
    roomname = models.CharField(db_column='RoomName', max_length=1024, blank=True)  # Field name made lowercase.
    baseroomid = models.CharField(db_column='BaseRoomID', max_length=20, blank=True)  # Field name made lowercase.
    baseroomname = models.CharField(db_column='BaseRoomName', max_length=1000, blank=True)  # Field name made lowercase.
    href = models.CharField(db_column='Href', max_length=800, blank=True)  # Field name made lowercase.
    price = models.DecimalField(db_column='Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=100, blank=True)  # Field name made lowercase.
    inventory = models.IntegerField(db_column='Inventory', blank=True, null=True)  # Field name made lowercase.
    checkindate = models.DateTimeField(db_column='CheckInDate', blank=True, null=True)  # Field name made lowercase.
    checkoutdate = models.DateTimeField(db_column='CheckOutDate', blank=True, null=True)  # Field name made lowercase.
    needprepay = models.SmallIntegerField(db_column='NeedPrePay', blank=True, null=True)  # Field name made lowercase.
    promotiontype = models.SmallIntegerField(db_column='PromotionType', blank=True, null=True)  # Field name made lowercase.
    promotion = models.DecimalField(db_column='Promotion', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    area = models.CharField(db_column='Area', max_length=100, blank=True)  # Field name made lowercase.
    floor = models.CharField(db_column='Floor', max_length=100, blank=True)  # Field name made lowercase.
    bedtype = models.CharField(db_column='BedType', max_length=100, blank=True)  # Field name made lowercase.
    breakfast = models.SmallIntegerField(db_column='Breakfast', blank=True, null=True)  # Field name made lowercase.
    guestcount = models.SmallIntegerField(db_column='GuestCount', blank=True, null=True)  # Field name made lowercase.
    pricemd5 = models.CharField(db_column='PriceMD5', max_length=32, blank=True)  # Field name made lowercase.
    websiteid = models.IntegerField(db_column='WebSiteID', blank=True, null=True)  # Field name made lowercase.
    other1 = models.CharField(db_column='Other1', max_length=50, blank=True)  # Field name made lowercase.
    other2 = models.CharField(db_column='Other2', max_length=20, blank=True)  # Field name made lowercase.
    servicefee = models.DecimalField(db_column='ServiceFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tax = models.DecimalField(db_column='Tax', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=1024, blank=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=100, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    other3 = models.CharField(db_column='Other3', max_length=20, blank=True)  # Field name made lowercase.
    other4 = models.CharField(db_column='Other4', max_length=20, blank=True)  # Field name made lowercase.
    other5 = models.CharField(db_column='Other5', max_length=20, blank=True)  # Field name made lowercase.
    vendorcityname = models.CharField(db_column='VendorCityName', max_length=200, blank=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=200, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_Intl_VendorRoomPrice'


class TianmaRatenparity(models.Model):
    ratenparityid = models.BigIntegerField(db_column='RateNparityID')  # Field name made lowercase.
    ctriproomid = models.IntegerField(db_column='CtripRoomID', blank=True, null=True)  # Field name made lowercase.
    ctripbaseroomid = models.IntegerField(db_column='CtripBaseRoomID', blank=True, null=True)  # Field name made lowercase.
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    roommappingrelationid = models.BigIntegerField(db_column='RoomMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    vendordealprice = models.DecimalField(db_column='VendorDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorresprice = models.DecimalField(db_column='VendorResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripdealprice = models.DecimalField(db_column='CtripDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripresprice = models.DecimalField(db_column='CtripResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    deltaprice = models.DecimalField(db_column='DeltaPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorroompriceid = models.BigIntegerField(db_column='VendorRoomPriceID', blank=True, null=True)  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    checkindate = models.DateTimeField(db_column='CheckInDate', blank=True, null=True)  # Field name made lowercase.
    checkoutdate = models.DateTimeField(db_column='CheckOutDate', blank=True, null=True)  # Field name made lowercase.
    ctripbreakfast = models.SmallIntegerField(db_column='CtripBreakfast', blank=True, null=True)  # Field name made lowercase.
    vendorbreakfast = models.SmallIntegerField(db_column='VendorBreakfast', blank=True, null=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=100, blank=True)  # Field name made lowercase.
    other1 = models.CharField(db_column='Other1', max_length=50, blank=True)  # Field name made lowercase.
    needprepay = models.SmallIntegerField(db_column='NeedPrePay', blank=True, null=True)  # Field name made lowercase.
    ctripchildhotelid = models.IntegerField(db_column='CtripChildHotelID', blank=True, null=True)  # Field name made lowercase.
    ctripneedprepay = models.SmallIntegerField(db_column='CtripNeedPrePay', blank=True, null=True)  # Field name made lowercase.
    websitehref = models.CharField(db_column='WebsiteHref', max_length=800, blank=True)  # Field name made lowercase.
    paytype = models.SmallIntegerField(db_column='PayType', blank=True, null=True)  # Field name made lowercase.
    deltapricepct = models.DecimalField(db_column='DeltaPricePct', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    hasgift = models.SmallIntegerField(db_column='HasGift', blank=True, null=True)  # Field name made lowercase.
    ctriphasgift = models.SmallIntegerField(db_column='CtripHasGift', blank=True, null=True)  # Field name made lowercase.
    ctriproomname = models.CharField(db_column='CtripRoomName', max_length=400, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_RateNparity'


class TianmaRatenparitydealpros(models.Model):
    ratenparityid = models.BigIntegerField(db_column='RateNparityID')  # Field name made lowercase.
    ctriproomid = models.IntegerField(db_column='CtripRoomID', blank=True, null=True)  # Field name made lowercase.
    ctripbaseroomid = models.IntegerField(db_column='CtripBaseRoomID', blank=True, null=True)  # Field name made lowercase.
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    roommappingrelationid = models.BigIntegerField(db_column='RoomMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    vendordealprice = models.DecimalField(db_column='VendorDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorresprice = models.DecimalField(db_column='VendorResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripdealprice = models.DecimalField(db_column='CtripDealPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    ctripresprice = models.DecimalField(db_column='CtripResPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    deltaprice = models.DecimalField(db_column='DeltaPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    vendorroompriceid = models.BigIntegerField(db_column='VendorRoomPriceID', blank=True, null=True)  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    checkindate = models.DateTimeField(db_column='CheckInDate', blank=True, null=True)  # Field name made lowercase.
    checkoutdate = models.DateTimeField(db_column='CheckOutDate', blank=True, null=True)  # Field name made lowercase.
    ctripbreakfast = models.SmallIntegerField(db_column='CtripBreakfast', blank=True, null=True)  # Field name made lowercase.
    vendorbreakfast = models.SmallIntegerField(db_column='VendorBreakfast', blank=True, null=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=100, blank=True)  # Field name made lowercase.
    other1 = models.CharField(db_column='Other1', max_length=50, blank=True)  # Field name made lowercase.
    needprepay = models.SmallIntegerField(db_column='NeedPrePay', blank=True, null=True)  # Field name made lowercase.
    ctripchildhotelid = models.IntegerField(db_column='CtripChildHotelID', blank=True, null=True)  # Field name made lowercase.
    ctripneedprepay = models.SmallIntegerField(db_column='CtripNeedPrePay', blank=True, null=True)  # Field name made lowercase.
    websitehref = models.CharField(db_column='WebsiteHref', max_length=800, blank=True)  # Field name made lowercase.
    paytype = models.SmallIntegerField(db_column='PayType', blank=True, null=True)  # Field name made lowercase.
    deltapricepct = models.DecimalField(db_column='DeltaPricePct', max_digits=5, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    hasgift = models.SmallIntegerField(db_column='HasGift', blank=True, null=True)  # Field name made lowercase.
    ctriphasgift = models.SmallIntegerField(db_column='CtripHasGift', blank=True, null=True)  # Field name made lowercase.
    ctriproomname = models.CharField(db_column='CtripRoomName', max_length=400, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_RateNparityDealPros'


class TianmaRoommappingrelation(models.Model):
    roommappingrelationid = models.BigIntegerField(db_column='RoomMappingRelationID')  # Field name made lowercase.
    mapstatus = models.IntegerField(db_column='MapStatus', blank=True, null=True)  # Field name made lowercase.
    hotelmappingrelationid = models.IntegerField(db_column='HotelMappingRelationID', blank=True, null=True)  # Field name made lowercase.
    ctriproomid = models.IntegerField(db_column='CtripRoomID', blank=True, null=True)  # Field name made lowercase.
    ctriproomname = models.CharField(db_column='CtripRoomName', max_length=1600, blank=True)  # Field name made lowercase.
    ctripbaseroomid = models.IntegerField(db_column='CtripBaseRoomID', blank=True, null=True)  # Field name made lowercase.
    ctripbaseroomname = models.CharField(db_column='CtripBaseRoomName', max_length=100, blank=True)  # Field name made lowercase.
    roomid = models.CharField(db_column='RoomID', max_length=20, blank=True)  # Field name made lowercase.
    roomname = models.CharField(db_column='RoomName', max_length=200, blank=True)  # Field name made lowercase.
    baseroomid = models.CharField(db_column='BaseRoomID', max_length=20, blank=True)  # Field name made lowercase.
    baseroomname = models.CharField(db_column='BaseRoomName', max_length=1000, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=40, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_RoomMappingRelation'


class TianmaVendorhotelstaticinfo(models.Model):
    vendorhotelstaticinfoid = models.IntegerField(db_column='VendorHotelStaticInfoID')  # Field name made lowercase.
    hotelid = models.CharField(db_column='HotelID', max_length=50, blank=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=1024, blank=True)  # Field name made lowercase.
    websiteid = models.IntegerField(db_column='WebSiteID', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=1024, blank=True)  # Field name made lowercase.
    schemaversion = models.IntegerField(db_column='SchemaVersion', blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=50, blank=True)  # Field name made lowercase.
    fax = models.CharField(db_column='Fax', max_length=50, blank=True)  # Field name made lowercase.
    openyear = models.DateTimeField(db_column='OpenYear', blank=True, null=True)  # Field name made lowercase.
    fitmentyear = models.DateTimeField(db_column='FitmentYear', blank=True, null=True)  # Field name made lowercase.
    hotelename = models.CharField(db_column='HotelEName', max_length=1024, blank=True)  # Field name made lowercase.
    brandname = models.CharField(db_column='BrandName', max_length=100, blank=True)  # Field name made lowercase.
    star = models.DecimalField(db_column='Star', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    diamond = models.DecimalField(db_column='Diamond', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    vendorlongitude = models.FloatField(db_column='Vendorlongitude', blank=True, null=True)  # Field name made lowercase.
    vendorlatitude = models.FloatField(db_column='Vendorlatitude', blank=True, null=True)  # Field name made lowercase.
    vendorgpstype = models.CharField(db_column='VendorGPSType', max_length=1, blank=True)  # Field name made lowercase.
    ctriplongitude = models.FloatField(db_column='Ctriplongitude', blank=True, null=True)  # Field name made lowercase.
    ctriplatitude = models.FloatField(db_column='Ctriplatitude', blank=True, null=True)  # Field name made lowercase.
    ctripgpstype = models.CharField(db_column='CtripGPSType', max_length=1, blank=True)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=1024, blank=True)  # Field name made lowercase.
    vendorfacilityxmlnode = models.TextField(db_column='VendorFacilityXMLNode', blank=True)  # Field name made lowercase. This field type is a guess.
    district = models.CharField(db_column='District', max_length=100, blank=True)  # Field name made lowercase.
    zone = models.CharField(db_column='Zone', max_length=100, blank=True)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=300, blank=True)  # Field name made lowercase.
    ctripdistrictid = models.IntegerField(db_column='CtripDistrictID', blank=True, null=True)  # Field name made lowercase.
    ctripzoneid = models.IntegerField(db_column='CtripZoneID', blank=True, null=True)  # Field name made lowercase.
    ctripcityid = models.IntegerField(db_column='CtripCityID', blank=True, null=True)  # Field name made lowercase.
    bookable = models.CharField(db_column='Bookable', max_length=1, blank=True)  # Field name made lowercase.
    roomquantity = models.IntegerField(db_column='RoomQuantity', blank=True, null=True)  # Field name made lowercase.
    hotelcategory = models.CharField(db_column='HotelCategory', max_length=40, blank=True)  # Field name made lowercase.
    hotelheight = models.CharField(db_column='HotelHeight', max_length=20, blank=True)  # Field name made lowercase.
    matchstatus = models.SmallIntegerField(db_column='MatchStatus', blank=True, null=True)  # Field name made lowercase.
    md5 = models.CharField(db_column='MD5', max_length=32, blank=True)  # Field name made lowercase.
    iscrown = models.CharField(db_column='IsCrown', max_length=1, blank=True)  # Field name made lowercase.
    hotelstatus = models.SmallIntegerField(db_column='HotelStatus', blank=True, null=True)  # Field name made lowercase.
    hoteltype = models.SmallIntegerField(db_column='HotelType', blank=True, null=True)  # Field name made lowercase.
    url = models.CharField(db_column='URL', max_length=1600, blank=True)  # Field name made lowercase.
    lastpricedate = models.DateTimeField(db_column='LastPriceDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_VendorHotelStaticInfo'


class TianmaVendorroomprice(models.Model):
    vendorroompriceid = models.BigIntegerField(db_column='VendorRoomPriceID')  # Field name made lowercase.
    hotelid = models.CharField(db_column='HotelID', max_length=50, blank=True)  # Field name made lowercase.
    hotelname = models.CharField(db_column='HotelName', max_length=1024, blank=True)  # Field name made lowercase.
    roomid = models.CharField(db_column='RoomID', max_length=20, blank=True)  # Field name made lowercase.
    roomname = models.CharField(db_column='RoomName', max_length=1024, blank=True)  # Field name made lowercase.
    baseroomid = models.CharField(db_column='BaseRoomID', max_length=20, blank=True)  # Field name made lowercase.
    baseroomname = models.CharField(db_column='BaseRoomName', max_length=1000, blank=True)  # Field name made lowercase.
    href = models.CharField(db_column='Href', max_length=800, blank=True)  # Field name made lowercase.
    price = models.DecimalField(db_column='Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=100, blank=True)  # Field name made lowercase.
    inventory = models.IntegerField(db_column='Inventory', blank=True, null=True)  # Field name made lowercase.
    checkindate = models.DateTimeField(db_column='CheckInDate', blank=True, null=True)  # Field name made lowercase.
    checkoutdate = models.DateTimeField(db_column='CheckOutDate', blank=True, null=True)  # Field name made lowercase.
    needprepay = models.SmallIntegerField(db_column='NeedPrePay', blank=True, null=True)  # Field name made lowercase.
    promotiontype = models.SmallIntegerField(db_column='PromotionType', blank=True, null=True)  # Field name made lowercase.
    promotion = models.DecimalField(db_column='Promotion', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    area = models.CharField(db_column='Area', max_length=100, blank=True)  # Field name made lowercase.
    floor = models.CharField(db_column='Floor', max_length=100, blank=True)  # Field name made lowercase.
    bedtype = models.CharField(db_column='BedType', max_length=100, blank=True)  # Field name made lowercase.
    breakfast = models.SmallIntegerField(db_column='Breakfast', blank=True, null=True)  # Field name made lowercase.
    guestcount = models.SmallIntegerField(db_column='GuestCount', blank=True, null=True)  # Field name made lowercase.
    pricemd5 = models.CharField(db_column='PriceMD5', max_length=32, blank=True)  # Field name made lowercase.
    websiteid = models.IntegerField(db_column='WebSiteID', blank=True, null=True)  # Field name made lowercase.
    other1 = models.CharField(db_column='Other1', max_length=50, blank=True)  # Field name made lowercase.
    other2 = models.CharField(db_column='Other2', max_length=20, blank=True)  # Field name made lowercase.
    servicefee = models.DecimalField(db_column='ServiceFee', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tax = models.DecimalField(db_column='Tax', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=1024, blank=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=100, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    other3 = models.CharField(db_column='Other3', max_length=20, blank=True)  # Field name made lowercase.
    other4 = models.CharField(db_column='Other4', max_length=20, blank=True)  # Field name made lowercase.
    other5 = models.CharField(db_column='Other5', max_length=20, blank=True)  # Field name made lowercase.
    vendorcityname = models.CharField(db_column='VendorCityName', max_length=200, blank=True)  # Field name made lowercase.
    hasgift = models.SmallIntegerField(db_column='HasGift', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tianma_VendorRoomPrice'


class UrmpCallinDay(models.Model):
    callindayid = models.BigIntegerField(db_column='CallInDayID')  # Field name made lowercase.
    organizationid = models.IntegerField(db_column='OrganizationID', blank=True, null=True)  # Field name made lowercase.
    organizationname = models.CharField(db_column='OrganizationName', max_length=200, blank=True)  # Field name made lowercase.
    operatorno = models.CharField(db_column='OperatorNo', max_length=40, blank=True)  # Field name made lowercase.
    operatorname = models.CharField(db_column='OperatorName', max_length=100, blank=True)  # Field name made lowercase.
    serialnumber = models.CharField(db_column='SerialNumber', max_length=40, blank=True)  # Field name made lowercase.
    year = models.IntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.
    month = models.IntegerField(db_column='Month', blank=True, null=True)  # Field name made lowercase.
    day = models.IntegerField(db_column='Day', blank=True, null=True)  # Field name made lowercase.
    hour = models.IntegerField(db_column='Hour', blank=True, null=True)  # Field name made lowercase.
    totalconnectedcount = models.IntegerField(db_column='TotalConnectedCount', blank=True, null=True)  # Field name made lowercase.
    totalcalllength = models.IntegerField(db_column='TotalCallLength', blank=True, null=True)  # Field name made lowercase.
    averagecalllength = models.IntegerField(db_column='AverageCallLength', blank=True, null=True)  # Field name made lowercase.
    maxcalllength = models.IntegerField(db_column='MaxCallLength', blank=True, null=True)  # Field name made lowercase.
    averagealertlength = models.IntegerField(db_column='AverageAlertLength', blank=True, null=True)  # Field name made lowercase.
    maxalertlength = models.IntegerField(db_column='MaxAlertLength', blank=True, null=True)  # Field name made lowercase.
    manpowerutilizationrate = models.FloatField(db_column='ManpowerUtilizationRate', blank=True, null=True)  # Field name made lowercase.
    calltransferedrate = models.FloatField(db_column='CallTransferedRate', blank=True, null=True)  # Field name made lowercase.
    calltransferedcount = models.IntegerField(db_column='CallTransferedCount', blank=True, null=True)  # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=10, blank=True)  # Field name made lowercase.
    totalacwlength = models.IntegerField(db_column='TotalACWLength', blank=True, null=True)  # Field name made lowercase.
    totalloginlength = models.IntegerField(db_column='TotalLoginLength', blank=True, null=True)  # Field name made lowercase.
    totalworklength = models.IntegerField(db_column='TotalWorkLength', blank=True, null=True)  # Field name made lowercase.
    totalalertlength = models.IntegerField(db_column='TotalAlertLength', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'URMP_CallIn_Day'


class UrmpCalloutDay(models.Model):
    calloutdayid = models.BigIntegerField(db_column='CallOutDayID')  # Field name made lowercase.
    organizationid = models.IntegerField(db_column='OrganizationID', blank=True, null=True)  # Field name made lowercase.
    organizationname = models.CharField(db_column='OrganizationName', max_length=100, blank=True)  # Field name made lowercase.
    operatorno = models.CharField(db_column='OperatorNo', max_length=40, blank=True)  # Field name made lowercase.
    operatorname = models.CharField(db_column='OperatorName', max_length=100, blank=True)  # Field name made lowercase.
    serialnumber = models.CharField(db_column='SerialNumber', max_length=40, blank=True)  # Field name made lowercase.
    year = models.IntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.
    month = models.IntegerField(db_column='Month', blank=True, null=True)  # Field name made lowercase.
    day = models.IntegerField(db_column='Day', blank=True, null=True)  # Field name made lowercase.
    hour = models.IntegerField(db_column='Hour', blank=True, null=True)  # Field name made lowercase.
    totalcalloutcount = models.IntegerField(db_column='TotalCallOutCount', blank=True, null=True)  # Field name made lowercase.
    totalconnectedcount = models.IntegerField(db_column='TotalConnectedCount', blank=True, null=True)  # Field name made lowercase.
    totalcalllength = models.IntegerField(db_column='TotalCallLength', blank=True, null=True)  # Field name made lowercase.
    averagecalllength = models.IntegerField(db_column='AverageCallLength', blank=True, null=True)  # Field name made lowercase.
    maxcalllength = models.IntegerField(db_column='MaxCallLength', blank=True, null=True)  # Field name made lowercase.
    connectedrate = models.FloatField(db_column='ConnectedRate', blank=True, null=True)  # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=10, blank=True)  # Field name made lowercase.
    totalacwlength = models.IntegerField(db_column='TotalACWLength', blank=True, null=True)  # Field name made lowercase.
    totalloginlength = models.IntegerField(db_column='TotalLoginLength', blank=True, null=True)  # Field name made lowercase.
    totalworklength = models.IntegerField(db_column='TotalWorkLength', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'URMP_CallOut_Day'


class VPkgorderFh(models.Model):
    orderid = models.BigIntegerField(db_column='OrderID')  # Field name made lowercase.
    butype = models.CharField(db_column='BUType', max_length=8, blank=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=10, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(blank=True, null=True)
    pkgname = models.CharField(max_length=300)
    bookingtype = models.CharField(db_column='BookingType', max_length=3)  # Field name made lowercase.
    sourcetype = models.CharField(db_column='SourceType', max_length=8)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=20, blank=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    returndate = models.DateTimeField(db_column='ReturnDate', blank=True, null=True)  # Field name made lowercase.
    pkgregion = models.CharField(db_column='PkgRegion', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    salescity = models.CharField(db_column='SalesCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    destprovince = models.CharField(db_column='DestProvince', max_length=400, blank=True)  # Field name made lowercase.
    destcountry = models.CharField(db_column='DestCountry', max_length=20, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=50, blank=True)  # Field name made lowercase.
    salemode = models.CharField(db_column='SaleMode', max_length=8)  # Field name made lowercase.
    persons = models.IntegerField(db_column='Persons', blank=True, null=True)  # Field name made lowercase.
    p_receivable = models.DecimalField(db_column='P_Receivable', max_digits=19, decimal_places=4)  # Field name made lowercase.
    adjustamount_acc = models.DecimalField(db_column='AdjustAmount_Acc', max_digits=19, decimal_places=4)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=38, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    profit = models.DecimalField(max_digits=38, decimal_places=4, blank=True, null=True)
    internalassume = models.DecimalField(db_column='InternalAssume', max_digits=38, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=38, decimal_places=8, blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=16, blank=True)  # Field name made lowercase.
    updatetime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'V_Pkgorder_FH'


class VPkgorderSh(models.Model):
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.
    butype = models.CharField(db_column='BUType', max_length=8, blank=True)  # Field name made lowercase.
    serverfrom = models.CharField(db_column='ServerFrom', max_length=10, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(blank=True, null=True)
    pkgname = models.CharField(max_length=300, blank=True)
    bookingtype = models.CharField(db_column='BookingType', max_length=3)  # Field name made lowercase.
    sourcetype = models.CharField(db_column='SourceType', max_length=8)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=20, blank=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    returndate = models.DateTimeField(db_column='ReturnDate', blank=True, null=True)  # Field name made lowercase.
    pkgregion = models.CharField(db_column='PkgRegion', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    salescity = models.CharField(db_column='SalesCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    destprovince = models.CharField(db_column='DestProvince', max_length=400, blank=True)  # Field name made lowercase.
    destcountry = models.CharField(db_column='DestCountry', max_length=20, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=100, blank=True)  # Field name made lowercase.
    salemode = models.CharField(db_column='SaleMode', max_length=8)  # Field name made lowercase.
    persons = models.IntegerField(db_column='Persons', blank=True, null=True)  # Field name made lowercase.
    p_receivable = models.DecimalField(db_column='P_Receivable', max_digits=19, decimal_places=4)  # Field name made lowercase.
    adjustamount_acc = models.DecimalField(db_column='AdjustAmount_Acc', max_digits=19, decimal_places=4)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=38, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    tmoney = models.DecimalField(db_column='TMoney', max_digits=38, decimal_places=8, blank=True, null=True)  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=16, blank=True)  # Field name made lowercase.
    updatetime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'V_Pkgorder_SH'


class BookingCommit(models.Model):
    masterorderid = models.BigIntegerField(db_column='MasterOrderID')  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status')  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0)  # Field name made lowercase.
    lastamount = models.DecimalField(db_column='LastAmount', max_digits=18, decimal_places=0)  # Field name made lowercase.
    masterorderinfo = models.CharField(db_column='MasterOrderInfo', max_length=2000, blank=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    salemode = models.SmallIntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    departurecity = models.IntegerField(db_column='DepartureCity', blank=True, null=True)  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    serverfromurl = models.CharField(db_column='ServerFromUrl', max_length=255, blank=True)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20, blank=True)  # Field name made lowercase.
    productid = models.IntegerField(db_column='ProductID', blank=True, null=True)  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    shoppingid = models.BigIntegerField(db_column='ShoppingID', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateTimeField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    newshoppingid = models.CharField(db_column='NewShoppingID', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'booking_commit'


class BookingOrder(models.Model):
    masterorderid = models.BigIntegerField(db_column='MasterOrderID')  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    lastamount = models.DecimalField(db_column='LastAmount', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    commitrq = models.CharField(db_column='CommitRQ', max_length=2000, blank=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    salemode = models.SmallIntegerField(db_column='SaleMode', blank=True, null=True)  # Field name made lowercase.
    destcity = models.IntegerField(db_column='DestCity', blank=True, null=True)  # Field name made lowercase.
    departurecity = models.IntegerField(db_column='DepartureCity', blank=True, null=True)  # Field name made lowercase.
    salescity = models.IntegerField(db_column='SalesCity', blank=True, null=True)  # Field name made lowercase.
    vipgrade = models.IntegerField(db_column='VipGrade', blank=True, null=True)  # Field name made lowercase.
    serverfromtype = models.IntegerField(db_column='ServerFromType', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='UID', max_length=20, blank=True)  # Field name made lowercase.
    productid = models.IntegerField(db_column='ProductID', blank=True, null=True)  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl', blank=True, null=True)  # Field name made lowercase.
    diytype = models.SmallIntegerField(db_column='DIYType', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.CharField(db_column='EndDate', max_length=50, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    shoppingid = models.BigIntegerField(db_column='ShoppingID', blank=True, null=True)  # Field name made lowercase.
    newshoppingid = models.CharField(db_column='NewShoppingID', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'booking_order'


class BookingTracelog(models.Model):
    logid = models.BigIntegerField(db_column='LogID')  # Field name made lowercase.
    shoppingid = models.BigIntegerField(db_column='ShoppingID')  # Field name made lowercase.
    bookingrequestsource = models.SmallIntegerField(db_column='BookingRequestSource')  # Field name made lowercase.
    masterorderid = models.BigIntegerField(db_column='MasterOrderID')  # Field name made lowercase.
    resourcecategory = models.SmallIntegerField(db_column='ResourceCategory')  # Field name made lowercase.
    suborderid = models.BigIntegerField(db_column='SubOrderID')  # Field name made lowercase.
    actiontype = models.IntegerField(db_column='ActionType', blank=True, null=True)  # Field name made lowercase.
    actiondesc = models.CharField(db_column='ActionDesc', max_length=100, blank=True)  # Field name made lowercase.
    actiontime = models.DateTimeField(db_column='ActionTime', blank=True, null=True)  # Field name made lowercase.
    actionresult = models.SmallIntegerField(db_column='ActionResult', blank=True, null=True)  # Field name made lowercase.
    executionduration = models.IntegerField(db_column='ExecutionDuration', blank=True, null=True)  # Field name made lowercase.
    datagram = models.CharField(db_column='Datagram', max_length=2000, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    logmessage = models.CharField(db_column='LogMessage', max_length=300, blank=True)  # Field name made lowercase.
    errorcode = models.IntegerField(db_column='ErrorCode', blank=True, null=True)  # Field name made lowercase.
    newshoppingid = models.CharField(db_column='NewShoppingID', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'booking_tracelog'


class BuyoutFltorders(models.Model):
    orderid = models.IntegerField(primary_key=True)
    flightclass = models.CharField(max_length=10, blank=True)
    dcity = models.IntegerField(blank=True, null=True)
    dcityname = models.CharField(max_length=100, blank=True)
    acity = models.IntegerField(blank=True, null=True)
    acityname = models.CharField(max_length=100, blank=True)
    frompackageorder = models.CharField(max_length=10, blank=True)
    serverfrom = models.CharField(max_length=10, blank=True)
    orderdate = models.CharField(max_length=10, blank=True)
    ahead = models.IntegerField(blank=True, null=True)
    intervalday = models.IntegerField(blank=True, null=True)
    dflight = models.CharField(max_length=100, blank=True)
    aflight = models.CharField(max_length=100, blank=True)
    dairline = models.CharField(max_length=100, blank=True)
    aairline = models.CharField(max_length=100, blank=True)
    dclass = models.CharField(max_length=100, blank=True)
    aclass = models.CharField(max_length=100, blank=True)
    transit1 = models.IntegerField(blank=True, null=True)
    transit2 = models.IntegerField(blank=True, null=True)
    dtakeofftime = models.DateTimeField(blank=True, null=True)
    darrivaltime = models.DateTimeField(blank=True, null=True)
    dflightlong = models.FloatField(blank=True, null=True)
    atakeofftime = models.DateTimeField(blank=True, null=True)
    aarrivaltime = models.DateTimeField(blank=True, null=True)
    aflightlong = models.FloatField(blank=True, null=True)
    order_submit = models.IntegerField(blank=True, null=True)
    order_success = models.IntegerField(blank=True, null=True)
    order_refund = models.IntegerField(blank=True, null=True)
    person_submit = models.IntegerField(blank=True, null=True)
    person_success = models.IntegerField(blank=True, null=True)
    person_refund = models.IntegerField(blank=True, null=True)
    quantity_submit = models.IntegerField(blank=True, null=True)
    quantity_success = models.IntegerField(blank=True, null=True)
    quantity_refund = models.IntegerField(blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    cost = models.FloatField(blank=True, null=True)
    tax = models.FloatField(blank=True, null=True)
    oilfee = models.FloatField(blank=True, null=True)
    agetype = models.CharField(db_column='ageType', max_length=16, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'buyout_fltorders'


class ChrisFactticketpurchaseDiysoldanalysisBak(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='suborderID', max_length=500, blank=True)  # Field name made lowercase.
    startcity = models.CharField(db_column='startCity', max_length=100, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='destCity', max_length=100, blank=True)  # Field name made lowercase.
    interval_day = models.IntegerField(blank=True, null=True)
    takeoffdate = models.DateField(db_column='takeoffDate', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=500, blank=True)  # Field name made lowercase.
    item = models.CharField(max_length=500, blank=True)
    costadult = models.DecimalField(db_column='costAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    priceadult = models.DecimalField(db_column='priceAdult', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    sys_flt_price_pat = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity_pat = models.IntegerField(blank=True, null=True)
    item_num_pat = models.IntegerField(blank=True, null=True)
    sys_flt_quantity_child_pat = models.IntegerField(blank=True, null=True)
    sys_flt_quantity_baby_pat = models.IntegerField(blank=True, null=True)
    reason = models.CharField(max_length=500, blank=True)
    last_opt_time = models.DateTimeField(blank=True, null=True)
    dp_sdp = models.CharField(max_length=16, blank=True)
    flightno_s = models.CharField(db_column='flightNO_s', max_length=500, blank=True)  # Field name made lowercase.
    firsttabkeofftime = models.DateTimeField(db_column='FirstTabkeOffTime', blank=True, null=True)  # Field name made lowercase.
    lasttakeofftime = models.DateTimeField(db_column='LastTakeOffTime', blank=True, null=True)  # Field name made lowercase.
    time_s = models.CharField(db_column='Time_s', max_length=500, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'chris_FactTicketPurchase_diySoldAnalysis_bak'


class Diypkgconversionrate(models.Model):
    pkgid = models.IntegerField(blank=True, null=True)
    serverfrom = models.CharField(max_length=10, blank=True)
    ordernum = models.IntegerField(blank=True, null=True)
    uv = models.IntegerField(blank=True, null=True)
    conversionrate = models.DateTimeField(db_column='conversionRate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'diyPkgConversionRate'


class DiyPageviewRealtime(models.Model):
    id = sqlserver_ado.fields.BigAutoField(primary_key=True)
    pageid = models.IntegerField(blank=True, null=True)
    vid = models.CharField(max_length=128, blank=True)
    ts = models.DateTimeField(blank=True, null=True)
    orderid = models.CharField(max_length=128, blank=True)
    url = models.CharField(max_length=1024, blank=True)
    datacreate_lasttime = models.DateTimeField(db_column='DataCreate_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'diy_pageview_realtime'


class DiyPageviewStatisticRealtime(models.Model):
    id = sqlserver_ado.fields.BigAutoField(primary_key=True)
    pageid = models.IntegerField(blank=True, null=True)
    statistic_date = models.DateField(blank=True, null=True)
    pv = models.IntegerField(blank=True, null=True)
    uv = models.IntegerField(blank=True, null=True)
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'diy_pageview_statistic_realtime'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class FactsdpTongcheng(models.Model):
    destcity = models.CharField(max_length=20, blank=True)
    scenicdetail = models.CharField(max_length=1000, blank=True)
    roomid = models.BigIntegerField(blank=True, null=True)
    hotelname = models.CharField(max_length=1000, blank=True)
    ctriplowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ctriplowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ctripnextmonthlowestprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    ctripnextmonthlowestweekendprice = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    tclowestprice = models.CharField(max_length=20, blank=True)
    tclowestweekendprice = models.CharField(max_length=20, blank=True)
    tcnextmonthlowestprice = models.CharField(max_length=20, blank=True)
    tcnextmonthlowestweekendprice = models.CharField(max_length=20, blank=True)
    ctripticketid = models.FloatField(db_column='CtripTicketID', blank=True, null=True)  # Field name made lowercase.
    city = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'factSDP_TongCheng'


class FrtordereventdbToDwDiydbFrtEvent(models.Model):
    eventid = models.BigIntegerField(db_column='EventID')  # Field name made lowercase.
    eventcategory = models.SmallIntegerField(db_column='EventCategory', blank=True, null=True)  # Field name made lowercase.
    informid = models.BigIntegerField(db_column='InformID', blank=True, null=True)  # Field name made lowercase.
    orderid = models.BigIntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    suborderid = models.BigIntegerField(db_column='SubOrderID', blank=True, null=True)  # Field name made lowercase.
    orderlabel = models.CharField(db_column='OrderLabel', max_length=20, blank=True)  # Field name made lowercase.
    eventgrade = models.SmallIntegerField(db_column='EventGrade', blank=True, null=True)  # Field name made lowercase.
    sender = models.CharField(db_column='Sender', max_length=20, blank=True)  # Field name made lowercase.
    processor = models.CharField(db_column='Processor', max_length=20, blank=True)  # Field name made lowercase.
    eventtypeid = models.IntegerField(db_column='EventTypeID', blank=True, null=True)  # Field name made lowercase.
    receiverid = models.IntegerField(db_column='ReceiverID', blank=True, null=True)  # Field name made lowercase.
    isneedreply = models.NullBooleanField(db_column='IsNeedReply')  # Field name made lowercase.
    isalreadyreply = models.NullBooleanField(db_column='IsAlreadyReply')  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    content = models.CharField(db_column='Content', max_length=2000, blank=True)  # Field name made lowercase.
    senddate = models.DateTimeField(db_column='SendDate', blank=True, null=True)  # Field name made lowercase.
    distributedate = models.DateTimeField(db_column='DistributeDate', blank=True, null=True)  # Field name made lowercase.
    beginoperatedate = models.DateTimeField(db_column='BeginOperateDate', blank=True, null=True)  # Field name made lowercase.
    suspendenddate = models.DateTimeField(db_column='SuspendEndDate', blank=True, null=True)  # Field name made lowercase.
    issuspendedabnormal = models.NullBooleanField(db_column='IsSuspendedAbnormal')  # Field name made lowercase.
    completedate = models.DateTimeField(db_column='CompleteDate', blank=True, null=True)  # Field name made lowercase.
    istop = models.NullBooleanField(db_column='IsTop')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    relationeventid = models.BigIntegerField(db_column='RelationEventID', blank=True, null=True)  # Field name made lowercase.
    isintl = models.SmallIntegerField(db_column='IsIntl', blank=True, null=True)  # Field name made lowercase.
    relationsender = models.CharField(db_column='RelationSender', max_length=20, blank=True)  # Field name made lowercase.
    islock = models.NullBooleanField(db_column='IsLock')  # Field name made lowercase.
    lockdate = models.DateTimeField(db_column='LockDate', blank=True, null=True)  # Field name made lowercase.
    isreassign = models.NullBooleanField(db_column='IsReassign')  # Field name made lowercase.
    pkgmessagereceiver = models.CharField(db_column='PkgMessageReceiver', max_length=45, blank=True)  # Field name made lowercase.
    candidatereceivers = models.CharField(db_column='CandidateReceivers', max_length=200, blank=True)  # Field name made lowercase.
    servicedate = models.DateTimeField(db_column='ServiceDate', blank=True, null=True)  # Field name made lowercase.
    eventcount = models.IntegerField(db_column='EventCount', blank=True, null=True)  # Field name made lowercase.
    informtype = models.SmallIntegerField(db_column='InformType', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_event'


class FrtordereventdbToDwDiydbFrtEventcategory(models.Model):
    eventcategoryid = models.IntegerField(db_column='EventCategoryID')  # Field name made lowercase.
    eventcategorytype = models.SmallIntegerField(db_column='EventCategoryType', blank=True, null=True)  # Field name made lowercase.
    categoryname = models.CharField(db_column='CategoryName', max_length=45, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_eventcategory'


class FrtordereventdbToDwDiydbFrtEventprocesslog(models.Model):
    eventprocesslogid = models.BigIntegerField(db_column='EventProcessLogID')  # Field name made lowercase.
    eventid = models.BigIntegerField(db_column='EventID', blank=True, null=True)  # Field name made lowercase.
    orderid = models.BigIntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    eventprocessor = models.CharField(db_column='EventProcessor', max_length=20, blank=True)  # Field name made lowercase.
    operator = models.CharField(db_column='Operator', max_length=20, blank=True)  # Field name made lowercase.
    operatedate = models.DateTimeField(db_column='OperateDate', blank=True, null=True)  # Field name made lowercase.
    remark = models.CharField(db_column='Remark', max_length=1000, blank=True)  # Field name made lowercase.
    operatecontent = models.CharField(db_column='OperateContent', max_length=500, blank=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    operatetype = models.IntegerField(db_column='OperateType', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_eventprocesslog'


class FrtordereventdbToDwDiydbFrtEventsuspendrecord(models.Model):
    eventsuspendid = models.BigIntegerField(db_column='EventSuspendID')  # Field name made lowercase.
    eventid = models.BigIntegerField(db_column='EventID', blank=True, null=True)  # Field name made lowercase.
    suspendbegindate = models.DateTimeField(db_column='SuspendBeginDate', blank=True, null=True)  # Field name made lowercase.
    suspendenddate = models.DateTimeField(db_column='SuspendEndDate', blank=True, null=True)  # Field name made lowercase.
    suspendreason = models.CharField(db_column='SuspendReason', max_length=500, blank=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    isactive = models.NullBooleanField(db_column='IsActive')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_eventsuspendrecord'


class FrtordereventdbToDwDiydbFrtEventtype(models.Model):
    eventtypeid = models.IntegerField(db_column='EventTypeID')  # Field name made lowercase.
    eventcategory = models.SmallIntegerField(db_column='EventCategory', blank=True, null=True)  # Field name made lowercase.
    eventtypename = models.CharField(db_column='EventTypeName', max_length=45, blank=True)  # Field name made lowercase.
    eventtypevalue = models.IntegerField(db_column='EventTypeValue', blank=True, null=True)  # Field name made lowercase.
    parentid = models.IntegerField(db_column='ParentID', blank=True, null=True)  # Field name made lowercase.
    priority = models.SmallIntegerField(blank=True, null=True)
    islinked = models.NullBooleanField(db_column='IsLinked')  # Field name made lowercase.
    isdeleted = models.NullBooleanField(db_column='IsDeleted')  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    issuspend = models.NullBooleanField(db_column='IsSuspend')  # Field name made lowercase.
    canreply = models.NullBooleanField(db_column='CanReply')  # Field name made lowercase.
    serviceindex = models.DecimalField(db_column='ServiceIndex', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    isurgent = models.NullBooleanField(db_column='IsUrgent')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_eventtype'


class FrtordereventdbToDwDiydbFrtOpinformationop(models.Model):
    operatorid = models.IntegerField(db_column='OperatorID')  # Field name made lowercase.
    operatoreid = models.CharField(db_column='OperatorEID', max_length=20, blank=True)  # Field name made lowercase.
    operatorname = models.CharField(db_column='OperatorName', max_length=20, blank=True)  # Field name made lowercase.
    operatorgroup = models.CharField(db_column='OperatorGroup', max_length=20, blank=True)  # Field name made lowercase.
    status = models.SmallIntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    operatorgroupcode = models.CharField(db_column='OperatorGroupCode', max_length=4, blank=True)  # Field name made lowercase.
    ismonitor = models.NullBooleanField(db_column='IsMonitor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_opinformationOP'


class FrtordereventdbToDwDiydbFrtOpstatisticsop(models.Model):
    opstatisticsid = models.BigIntegerField(db_column='OPStatisticsID')  # Field name made lowercase.
    createdate = models.DateTimeField(db_column='CreateDate', blank=True, null=True)  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    suspendduration = models.IntegerField(db_column='SuspendDuration', blank=True, null=True)  # Field name made lowercase.
    suspendcount = models.IntegerField(db_column='SuspendCount', blank=True, null=True)  # Field name made lowercase.
    firstonlinedate = models.DateTimeField(db_column='FirstOnlineDate', blank=True, null=True)  # Field name made lowercase.
    lastofflinedate = models.DateTimeField(db_column='LastOfflineDate', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    offlineduration = models.IntegerField(db_column='OfflineDuration', blank=True, null=True)  # Field name made lowercase.
    offlinecount = models.IntegerField(db_column='OfflineCount', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_opstatisticsOP'


class FrtordereventdbToDwDiydbFrtPkgmessagereceiver(models.Model):
    pkgmessagereceiverid = models.IntegerField(db_column='PkgMessageReceiverID')  # Field name made lowercase.
    receivername = models.CharField(db_column='ReceiverName', max_length=40, blank=True)  # Field name made lowercase.
    receivervalue = models.IntegerField(db_column='ReceiverValue', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    type = models.SmallIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_pkgmessagereceiver'


class FrtordereventdbToDwDiydbFrtReceiver(models.Model):
    receiverid = models.IntegerField(db_column='ReceiverID')  # Field name made lowercase.
    receivername = models.CharField(db_column='ReceiverName', max_length=50, blank=True)  # Field name made lowercase.
    isintl = models.NullBooleanField(db_column='IsIntl')  # Field name made lowercase.
    priority = models.SmallIntegerField(db_column='Priority', blank=True, null=True)  # Field name made lowercase.
    operatenumber = models.IntegerField(db_column='OperateNumber', blank=True, null=True)  # Field name made lowercase.
    editor = models.CharField(db_column='Editor', max_length=20, blank=True)  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.NullBooleanField(db_column='IsDeleted')  # Field name made lowercase.
    starttime = models.CharField(db_column='StartTime', max_length=8, blank=True)  # Field name made lowercase.
    endtime = models.CharField(db_column='EndTime', max_length=8, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_receiver'


class FrtordereventdbToDwDiydbFrtReceiverEventtype(models.Model):
    receivereventtypeid = models.IntegerField(db_column='ReceiverEventTypeID')  # Field name made lowercase.
    receiverid = models.IntegerField(db_column='ReceiverID', blank=True, null=True)  # Field name made lowercase.
    eventtypeid = models.IntegerField(db_column='EventTypeID', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.NullBooleanField(db_column='IsDeleted')  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_receiver_eventtype'


class FrtordereventdbToDwDiydbFrtReceiverOpinformation(models.Model):
    receiveropinformationid = models.IntegerField(db_column='ReceiverOpInformationID')  # Field name made lowercase.
    eid = models.CharField(db_column='EID', max_length=20, blank=True)  # Field name made lowercase.
    receiverid = models.IntegerField(db_column='ReceiverID', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.NullBooleanField(db_column='IsDeleted')  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_receiver_opinformation'


class FrtordereventdbToDwDiydbFrtReceiverPkgmessagereceiver(models.Model):
    id = models.IntegerField(db_column='ID')  # Field name made lowercase.
    receiverid = models.IntegerField(db_column='ReceiverID', blank=True, null=True)  # Field name made lowercase.
    pkgmessagereceiverid = models.IntegerField(db_column='PkgMessageReceiverID', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.NullBooleanField(db_column='IsDeleted')  # Field name made lowercase.
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_receiver_pkgmessagereceiver'


class FrtordereventdbToDwDiydbFrtSyncinform(models.Model):
    syncinformid = models.IntegerField(primary_key=True)
    datachange_createtime = models.DateTimeField(db_column='DataChange_CreateTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'frtordereventdb_TO_dw_diydb_frt_syncinform'


class FxOctopusResultDetailPkgGroupProductInfoTuniu(models.Model):
    id = models.AutoField()
    productid = models.CharField(db_column='productId', max_length=20, blank=True)  # Field name made lowercase.
    searchcityname = models.CharField(db_column='searchCityName', max_length=100, blank=True)  # Field name made lowercase.
    startcityname = models.CharField(db_column='startCityName', max_length=100, blank=True)  # Field name made lowercase.
    destinationname = models.CharField(db_column='destinationName', max_length=100, blank=True)  # Field name made lowercase.
    productname = models.CharField(db_column='productName', max_length=200, blank=True)  # Field name made lowercase.
    productsubname = models.CharField(db_column='productSubName', max_length=200, blank=True)  # Field name made lowercase.
    vendorname = models.CharField(db_column='vendorName', max_length=200, blank=True)  # Field name made lowercase.
    days = models.CharField(max_length=20, blank=True)
    nights = models.CharField(max_length=20, blank=True)
    includedetail = models.CharField(db_column='includeDetail', max_length=500, blank=True)  # Field name made lowercase.
    excludedetail = models.CharField(db_column='excludeDetail', max_length=500, blank=True)  # Field name made lowercase.
    tripsnum = models.CharField(db_column='tripsNum', max_length=20, blank=True)  # Field name made lowercase.
    discountamount = models.CharField(db_column='discountAmount', max_length=20, blank=True)  # Field name made lowercase.
    discountdesc = models.CharField(db_column='discountDesc', max_length=200, blank=True)  # Field name made lowercase.
    timetablelist = models.CharField(db_column='timetableList', max_length=2000, blank=True)  # Field name made lowercase.
    itinerarylist = models.CharField(db_column='itineraryList', max_length=2000, blank=True)  # Field name made lowercase.
    taskbuildtime = models.IntegerField(db_column='taskBuildTime')  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='dataChange_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fx_octopus_result_detail_pkg_group_product_info_tuniu'


class FxOctopusResultDetailPkgHotelDescTongcheng(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = False
        db_table = 'fx_octopus_result_detail_pkg_hotel_desc_tongcheng'


class FxOctopusResultDetailPkgProductInfoTongcheng(models.Model):
    id = models.BigIntegerField(primary_key=True)
    productid = models.CharField(db_column='productId', max_length=20, blank=True)  # Field name made lowercase.
    productname = models.CharField(db_column='productName', max_length=200, blank=True)  # Field name made lowercase.
    destinationcode = models.CharField(db_column='destinationCode', max_length=50, blank=True)  # Field name made lowercase.
    destinationname = models.CharField(db_column='destinationName', max_length=100, blank=True)  # Field name made lowercase.
    days = models.CharField(max_length=10, blank=True)
    commentscore = models.CharField(db_column='commentScore', max_length=10, blank=True)  # Field name made lowercase.
    commentcount = models.IntegerField(db_column='commentCount', blank=True, null=True)  # Field name made lowercase.
    packagecount = models.IntegerField(db_column='packageCount', blank=True, null=True)  # Field name made lowercase.
    price = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    cashback = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    pageindex = models.IntegerField(db_column='pageIndex', blank=True, null=True)  # Field name made lowercase.
    rowindex = models.IntegerField(db_column='rowIndex', blank=True, null=True)  # Field name made lowercase.
    scenic1 = models.CharField(max_length=500, blank=True)
    scenic2 = models.CharField(max_length=500, blank=True)
    scenic3 = models.CharField(max_length=500, blank=True)
    scenic4 = models.CharField(max_length=500, blank=True)
    scenic5 = models.CharField(max_length=500, blank=True)
    scenic6 = models.CharField(max_length=500, blank=True)
    scenic7 = models.CharField(max_length=500, blank=True)
    hotel1 = models.CharField(max_length=500, blank=True)
    hotel2 = models.CharField(max_length=500, blank=True)
    hotel3 = models.CharField(max_length=500, blank=True)
    hotel4 = models.CharField(max_length=500, blank=True)
    hotel5 = models.CharField(max_length=500, blank=True)
    taskbuildtime = models.BigIntegerField(db_column='taskBuildTime', blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(blank=True, null=True)
    updatedt = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fx_octopus_result_detail_pkg_product_info_tongcheng'


class FxOctopusResultDetailPkgProductPeriodTongcheng(models.Model):
    id = models.BigIntegerField(primary_key=True)
    productinfoiid = models.BigIntegerField(db_column='productInfoiId', blank=True, null=True)  # Field name made lowercase.
    productid = models.CharField(db_column='productId', max_length=20, blank=True)  # Field name made lowercase.
    packagecode = models.CharField(db_column='packageCode', max_length=20, blank=True)  # Field name made lowercase.
    packagetype = models.CharField(db_column='packageType', max_length=20, blank=True)  # Field name made lowercase.
    packagename = models.CharField(db_column='packageName', max_length=100, blank=True)  # Field name made lowercase.
    scenicdetail = models.CharField(db_column='scenicDetail', max_length=500, blank=True)  # Field name made lowercase.
    ticketdetail = models.CharField(db_column='ticketDetail', max_length=500, blank=True)  # Field name made lowercase.
    hoteldetail = models.CharField(db_column='hotelDetail', max_length=500, blank=True)  # Field name made lowercase.
    roomdetail = models.CharField(db_column='roomDetail', max_length=500, blank=True)  # Field name made lowercase.
    breakfast = models.CharField(max_length=20, blank=True)
    peoplecount = models.IntegerField(db_column='peopleCount', blank=True, null=True)  # Field name made lowercase.
    lowestprice = models.DecimalField(db_column='lowestPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    lowestdate = models.CharField(db_column='lowestDate', max_length=20, blank=True)  # Field name made lowercase.
    lowestweekendprice = models.DecimalField(db_column='lowestWeekendPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    lowestweekenddate = models.CharField(db_column='lowestWeekendDate', max_length=20, blank=True)  # Field name made lowercase.
    nextmonthlowestprice = models.DecimalField(db_column='nextMonthLowestPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    nextmonthlowestdate = models.CharField(db_column='nextMonthLowestDate', max_length=20, blank=True)  # Field name made lowercase.
    nextmonthlowestweekendprice = models.DecimalField(db_column='nextMonthLowestWeekendPrice', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    nextmonthlowestweekenddate = models.CharField(db_column='nextMonthLowestWeekendDate', max_length=20, blank=True)  # Field name made lowercase.
    periodcount = models.IntegerField(db_column='periodCount', blank=True, null=True)  # Field name made lowercase.
    periodjson = models.CharField(db_column='periodJson', max_length=1000, blank=True)  # Field name made lowercase.
    nextmonthperiodjson = models.CharField(db_column='nextMonthPeriodJson', max_length=1000, blank=True)  # Field name made lowercase.
    taskbuildtime = models.BigIntegerField(db_column='taskBuildTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fx_octopus_result_detail_pkg_product_period_tongcheng'


class FxOctopusResultDetailPkgScenicDescTongcheng(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = False
        db_table = 'fx_octopus_result_detail_pkg_scenic_desc_tongcheng'


class Hopper(models.Model):
    id = sqlserver_ado.fields.BigAutoField(primary_key=True)
    hoppergroup = models.CharField(max_length=50, blank=True)
    groupitemidx = models.IntegerField(blank=True, null=True)
    groupitemcaption = models.CharField(max_length=50, blank=True)
    groupitemcount = models.IntegerField(blank=True, null=True)
    datatime = models.DateTimeField(blank=True, null=True)
    createtime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hopper'


class Hopperbak(models.Model):
    id = models.AutoField()
    hoppergroup = models.CharField(max_length=50, blank=True)
    groupitemidx = models.IntegerField(blank=True, null=True)
    groupitemcaption = models.CharField(max_length=50, blank=True)
    groupitemcount = models.IntegerField(blank=True, null=True)
    datatime = models.DateTimeField(blank=True, null=True)
    createtime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hopperBak'


class Hopper4126(models.Model):
    orderid = models.BigIntegerField(blank=True, null=True)
    预订日期 = models.DateTimeField(blank=True, null=True)
    产品系统 = models.CharField(max_length=50, blank=True)
    订单来源 = models.CharField(max_length=50, blank=True)
    区域 = models.CharField(max_length=50, blank=True)
    出行人数 = models.IntegerField(blank=True, null=True)
    城市名称 = models.CharField(max_length=20, blank=True)

    class Meta:
        managed = False
        db_table = 'hopper_4126'


class HopperSales(models.Model):
    id = models.AutoField()
    hoppergroup = models.CharField(max_length=50, blank=True)
    groupitemidx = models.IntegerField(blank=True, null=True)
    groupitemcaption = models.CharField(max_length=50, blank=True)
    groupitemcount = models.IntegerField(blank=True, null=True)
    salescity = models.CharField(db_column='salesCity', max_length=50, blank=True)  # Field name made lowercase.
    datatime = models.DateTimeField(blank=True, null=True)
    createtime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hopper_sales'


class LitBuyoutfltcomputecheckdaytime1(models.Model):
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(db_column='StockDate', blank=True, null=True)  # Field name made lowercase.
    checktime1 = models.DateTimeField(db_column='CheckTime1', blank=True, null=True)  # Field name made lowercase.
    checktime2 = models.DateTimeField(db_column='CheckTime2', blank=True, null=True)  # Field name made lowercase.
    checktime3 = models.DateTimeField(db_column='CheckTime3', blank=True, null=True)  # Field name made lowercase.
    checktime4 = models.DateTimeField(db_column='CheckTime4', blank=True, null=True)  # Field name made lowercase.
    checktime5 = models.DateTimeField(db_column='CheckTime5', blank=True, null=True)  # Field name made lowercase.
    checktime6 = models.DateTimeField(db_column='CheckTime6', blank=True, null=True)  # Field name made lowercase.
    checktime7 = models.DateTimeField(db_column='CheckTime7', blank=True, null=True)  # Field name made lowercase.
    checktime8 = models.DateTimeField(db_column='CheckTime8', blank=True, null=True)  # Field name made lowercase.
    checktime9 = models.DateTimeField(db_column='CheckTime9', blank=True, null=True)  # Field name made lowercase.
    checktime10 = models.DateTimeField(db_column='CheckTime10', blank=True, null=True)  # Field name made lowercase.
    checktime11 = models.DateTimeField(db_column='CheckTime11', blank=True, null=True)  # Field name made lowercase.
    checktime12 = models.DateTimeField(db_column='CheckTime12', blank=True, null=True)  # Field name made lowercase.
    checktime13 = models.DateTimeField(db_column='CheckTime13', blank=True, null=True)  # Field name made lowercase.
    checktime14 = models.DateTimeField(db_column='CheckTime14', blank=True, null=True)  # Field name made lowercase.
    checktime15 = models.DateTimeField(db_column='CheckTime15', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'lit_BuyOutFltComputeCheckDayTime1'


class LitBuyoutfltpriceadjusthistoryItemandfltchannel(models.Model):
    judgedate = models.DateTimeField(db_column='JudgeDate', blank=True, null=True)  # Field name made lowercase.
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(db_column='StockDate', blank=True, null=True)  # Field name made lowercase.
    successfulquantity = models.FloatField(db_column='SuccessfulQuantity', blank=True, null=True)  # Field name made lowercase.
    inventory = models.FloatField(db_column='Inventory', blank=True, null=True)  # Field name made lowercase.
    lastchangepricetime = models.DateTimeField(db_column='LastChangePriceTime', blank=True, null=True)  # Field name made lowercase.
    lastchangepricetimequantity = models.FloatField(db_column='LastChangePriceTimeQuantity', blank=True, null=True)  # Field name made lowercase.
    lastchangepricetimeexpectedprop = models.FloatField(db_column='LastChangePriceTimeExpectedProp', blank=True, null=True)  # Field name made lowercase.
    lamda = models.FloatField(blank=True, null=True)
    lastpriceunchangedintervalexpectedquantity = models.FloatField(db_column='LastPriceUnChangedIntervalExpectedQuantity', blank=True, null=True)  # Field name made lowercase.
    lastpriceunchangedintervalrealquantity = models.FloatField(db_column='LastPriceUnChangedIntervalRealQuantity', blank=True, null=True)  # Field name made lowercase.
    maintaininventory = models.FloatField(db_column='MaintainInventory', blank=True, null=True)  # Field name made lowercase.
    maintainexpectedquantity = models.FloatField(db_column='MaintainExpectedQuantity', blank=True, null=True)  # Field name made lowercase.
    pricechangepercent = models.FloatField(db_column='PriceChangePercent', blank=True, null=True)  # Field name made lowercase.
    probabilityofok = models.FloatField(db_column='ProbabilityOfOK', blank=True, null=True)  # Field name made lowercase.
    pricechangereason = models.CharField(db_column='PriceChangeReason', max_length=200, blank=True)  # Field name made lowercase.
    insertdate = models.DateTimeField(db_column='InsertDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'lit_BuyOutFltPriceAdjustHistory_ItemAndFltChannel'


class LitBuyoutfltfaresalecurveTwochannelTimeinterval(models.Model):
    fareid = models.IntegerField(db_column='FareID', blank=True, null=True)  # Field name made lowercase.
    farename = models.CharField(db_column='FareName', max_length=500, blank=True)  # Field name made lowercase.
    enablestartdate = models.DateTimeField(db_column='EnableStartDate', blank=True, null=True)  # Field name made lowercase.
    minadvancedays = models.IntegerField(db_column='MinAdvanceDays', blank=True, null=True)  # Field name made lowercase.
    airline = models.CharField(db_column='Airline', max_length=200, blank=True)  # Field name made lowercase.
    dcitycode = models.CharField(db_column='DcityCode', max_length=10, blank=True)  # Field name made lowercase.
    acitycode = models.CharField(db_column='Acitycode', max_length=10, blank=True)  # Field name made lowercase.
    pricingmechanism = models.CharField(db_column='PricingMechanism', max_length=1, blank=True)  # Field name made lowercase.
    pricingstrategy = models.IntegerField(db_column='PricingStrategy', blank=True, null=True)  # Field name made lowercase.
    totalstores = models.IntegerField(db_column='TotalStores', blank=True, null=True)  # Field name made lowercase.
    itemtotalstores = models.IntegerField(db_column='ItemtotalStores', blank=True, null=True)  # Field name made lowercase.
    stockdate = models.DateTimeField(db_column='StockDate', blank=True, null=True)  # Field name made lowercase.
    orderdate = models.DateField(db_column='orderDate', blank=True, null=True)  # Field name made lowercase.
    actualsales = models.IntegerField(db_column='ActualSales', blank=True, null=True)  # Field name made lowercase.
    cumactualsales = models.IntegerField(db_column='CumActualSales', blank=True, null=True)  # Field name made lowercase.
    actualsalecurve = models.FloatField(db_column='ActualSaleCurve', blank=True, null=True)  # Field name made lowercase.
    actualitemsales = models.IntegerField(db_column='ActualItemSales', blank=True, null=True)  # Field name made lowercase.
    cumactualitemsales = models.IntegerField(db_column='CumActualItemSales', blank=True, null=True)  # Field name made lowercase.
    ahead = models.IntegerField(blank=True, null=True)
    expectedsalecurve = models.FloatField(db_column='ExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totairlinepersonssubmit = models.IntegerField(db_column='totAirlinePersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    airlineexpectedsalecurve = models.FloatField(db_column='AirlineExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    totcitypersonssubmit = models.IntegerField(db_column='totCityPersonsSubmit', blank=True, null=True)  # Field name made lowercase.
    cityexpectedsalecurve = models.FloatField(db_column='CityExpectedSaleCurve', blank=True, null=True)  # Field name made lowercase.
    insertdate = models.DateTimeField(db_column='InsertDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'lit_BuyoutFltFareSaleCurve_TwoChannel_TimeInterval'


class LitExpectedsalecurveconfigurationTimeinterval(models.Model):
    dcitycode = models.CharField(db_column='DCityCode', max_length=255, blank=True)  # Field name made lowercase.
    acitycode = models.CharField(db_column='ACityCode', max_length=255, blank=True)  # Field name made lowercase.
    enabledate = models.DateTimeField(db_column='EnableDate', blank=True, null=True)  # Field name made lowercase.
    disabledate = models.DateTimeField(db_column='DisableDate', blank=True, null=True)  # Field name made lowercase.
    channeltype = models.FloatField(db_column='ChannelType', blank=True, null=True)  # Field name made lowercase.
    ahead = models.FloatField(db_column='Ahead', blank=True, null=True)  # Field name made lowercase.
    percent = models.FloatField(db_column='Percent', blank=True, null=True)  # Field name made lowercase.
    begahead = models.FloatField(db_column='begAhead', blank=True, null=True)  # Field name made lowercase.
    endahead = models.FloatField(db_column='endAhead', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'lit_ExpectedSaleCurveConfiguration_TimeInterval'


class LitExpectedsalecurveconfigurationTimeintervalBak(models.Model):
    dcitycode = models.CharField(db_column='DCityCode', max_length=255, blank=True)  # Field name made lowercase.
    acitycode = models.CharField(db_column='ACityCode', max_length=255, blank=True)  # Field name made lowercase.
    enabledate = models.DateTimeField(db_column='EnableDate', blank=True, null=True)  # Field name made lowercase.
    disabledate = models.DateTimeField(db_column='DisableDate', blank=True, null=True)  # Field name made lowercase.
    channeltype = models.FloatField(db_column='ChannelType', blank=True, null=True)  # Field name made lowercase.
    ahead = models.FloatField(db_column='Ahead', blank=True, null=True)  # Field name made lowercase.
    percent = models.FloatField(db_column='Percent', blank=True, null=True)  # Field name made lowercase.
    begahead = models.FloatField(db_column='begAhead', blank=True, null=True)  # Field name made lowercase.
    endahead = models.FloatField(db_column='endAhead', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'lit_ExpectedSaleCurveConfiguration_TimeInterval_bak'


class LitSimulatepricepolicy1(models.Model):
    fareid = models.IntegerField(db_column='FareID')  # Field name made lowercase.
    policynum = models.IntegerField(db_column='PolicyNum', blank=True, null=True)  # Field name made lowercase.
    policy1 = models.CharField(db_column='Policy1', max_length=10, blank=True)  # Field name made lowercase.
    policy2 = models.CharField(db_column='Policy2', max_length=10, blank=True)  # Field name made lowercase.
    policy3 = models.CharField(db_column='Policy3', max_length=10, blank=True)  # Field name made lowercase.
    policy4 = models.CharField(db_column='Policy4', max_length=10, blank=True)  # Field name made lowercase.
    policy5 = models.CharField(db_column='Policy5', max_length=10, blank=True)  # Field name made lowercase.
    policy6 = models.CharField(db_column='Policy6', max_length=10, blank=True)  # Field name made lowercase.
    policy7 = models.CharField(db_column='Policy7', max_length=10, blank=True)  # Field name made lowercase.
    policy8 = models.CharField(db_column='Policy8', max_length=10, blank=True)  # Field name made lowercase.
    policy9 = models.CharField(db_column='Policy9', max_length=10, blank=True)  # Field name made lowercase.
    policy10 = models.CharField(db_column='Policy10', max_length=10, blank=True)  # Field name made lowercase.
    policy11 = models.CharField(db_column='Policy11', max_length=10, blank=True)  # Field name made lowercase.
    policy12 = models.CharField(db_column='Policy12', max_length=10, blank=True)  # Field name made lowercase.
    policy13 = models.CharField(db_column='Policy13', max_length=10, blank=True)  # Field name made lowercase.
    policy14 = models.CharField(db_column='Policy14', max_length=10, blank=True)  # Field name made lowercase.
    policy15 = models.CharField(db_column='Policy15', max_length=10, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'lit_SimulatePricePolicy1'


class RptSmallflightMain(models.Model):
    orderid = models.IntegerField(db_column='orderID', blank=True, null=True)  # Field name made lowercase.
    uid = models.CharField(db_column='Uid', max_length=50, blank=True)  # Field name made lowercase.
    resourcefrom = models.IntegerField(db_column='ResourceFrom', blank=True, null=True)  # Field name made lowercase.
    saleschannel = models.IntegerField(db_column='salesChannel', blank=True, null=True)  # Field name made lowercase.
    butype = models.IntegerField(db_column='BUType', blank=True, null=True)  # Field name made lowercase.
    productcategoryname = models.CharField(db_column='ProductCategoryName', max_length=50, blank=True)  # Field name made lowercase.
    productpatternname = models.CharField(db_column='ProductPatternName', max_length=50, blank=True)  # Field name made lowercase.
    pkg = models.IntegerField(db_column='Pkg', blank=True, null=True)  # Field name made lowercase.
    pkgname = models.CharField(db_column='PkgName', max_length=200, blank=True)  # Field name made lowercase.
    pm_eid = models.CharField(db_column='PM_Eid', max_length=50, blank=True)  # Field name made lowercase.
    purchase_manager = models.CharField(db_column='Purchase_manager', max_length=100, blank=True)  # Field name made lowercase.
    operater_manager = models.CharField(max_length=100, blank=True)
    startcity = models.CharField(db_column='StartCity', max_length=50, blank=True)  # Field name made lowercase.
    destcity = models.CharField(db_column='DestCity', max_length=50, blank=True)  # Field name made lowercase.
    start_region = models.CharField(max_length=50, blank=True)
    dest_region = models.CharField(max_length=50, blank=True)
    ordertype = models.CharField(db_column='OrderType', max_length=50, blank=True)  # Field name made lowercase.
    orderdate = models.DateTimeField(db_column='OrderDate', blank=True, null=True)  # Field name made lowercase.
    takeoffdate = models.DateTimeField(db_column='TakeOffDate', blank=True, null=True)  # Field name made lowercase.
    order_ahead_num = models.IntegerField(blank=True, null=True)
    interval_day = models.IntegerField(blank=True, null=True)
    flight = models.CharField(db_column='Flight', max_length=100, blank=True)  # Field name made lowercase.
    flightno = models.CharField(db_column='FlightNo', max_length=200, blank=True)  # Field name made lowercase.
    resourcetype = models.IntegerField(db_column='ResourceType', blank=True, null=True)  # Field name made lowercase.
    itemid = models.CharField(db_column='ItemId', max_length=100, blank=True)  # Field name made lowercase.
    tourid = models.IntegerField(db_column='tourId', blank=True, null=True)  # Field name made lowercase.
    tourstatus = models.CharField(db_column='TourStatus', max_length=16, blank=True)  # Field name made lowercase.
    use_flt = models.CharField(max_length=8, blank=True)
    use_sys_flt = models.CharField(max_length=8, blank=True)
    item_have_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_have_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_have_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_quantity = models.IntegerField(blank=True, null=True)
    item_no_suborder_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    item_no_suborder_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_quantity = models.IntegerField(blank=True, null=True)
    sys_flt_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    sys_flt_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_persons = models.IntegerField(blank=True, null=True)
    total_amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    total_profit = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    child_persons = models.IntegerField(blank=True, null=True)
    baby_persons = models.IntegerField(blank=True, null=True)
    statusname = models.CharField(db_column='StatusName', max_length=100, blank=True)  # Field name made lowercase.
    flightagencyname = models.CharField(db_column='FlightAgencyName', max_length=500, blank=True)  # Field name made lowercase.
    suborderid = models.CharField(db_column='SubOrderID', max_length=500, blank=True)  # Field name made lowercase.
    last_opt_time = models.DateTimeField(blank=True, null=True)
    confirmhour = models.IntegerField(db_column='ConfirmHour', blank=True, null=True)  # Field name made lowercase.
    firsttakeoffdate = models.DateTimeField(db_column='FirstTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    lasttakeoffdate = models.DateTimeField(db_column='LastTakeoffDate', blank=True, null=True)  # Field name made lowercase.
    isopen = models.IntegerField(db_column='IsOpen', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'rpt_smallflight_main'


class Src5(models.Model):
    nid = sqlserver_ado.fields.BigAutoField(primary_key=True)
    billid = models.IntegerField(db_column='BillID', blank=True, null=True)  # Field name made lowercase.
    billno = models.BigIntegerField(db_column='BillNo', blank=True, null=True)  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    dealstatus = models.IntegerField(db_column='DealStatus', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=200, blank=True)  # Field name made lowercase.
    gatheringtype = models.CharField(db_column='GatheringType', max_length=1, blank=True)  # Field name made lowercase.
    pathtype = models.CharField(db_column='PathType', max_length=10, blank=True)  # Field name made lowercase.
    willcancel = models.CharField(db_column='WillCancel', max_length=1, blank=True)  # Field name made lowercase.
    referenceno = models.CharField(db_column='ReferenceNo', max_length=50, blank=True)  # Field name made lowercase.
    merchantid = models.IntegerField(db_column='MerchantID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    returnamount = models.DecimalField(db_column='ReturnAmount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    exchangerate = models.DecimalField(db_column='ExchangeRate', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=20, blank=True)  # Field name made lowercase.
    paymentuid = models.CharField(db_column='PaymentUid', max_length=20, blank=True)  # Field name made lowercase.
    lastnotifytime = models.DateTimeField(db_column='LastNotifyTime', blank=True, null=True)  # Field name made lowercase.
    requesttime = models.DateTimeField(db_column='RequestTime', blank=True, null=True)  # Field name made lowercase.
    responsetime = models.DateTimeField(db_column='ResponseTime', blank=True, null=True)  # Field name made lowercase.
    datachange_lasttime = models.DateTimeField(db_column='DataChange_LastTime', blank=True, null=True)  # Field name made lowercase.
    oldbillno = models.BigIntegerField(db_column='OldBillNo', blank=True, null=True)  # Field name made lowercase.
    modifyccardbillno = models.BigIntegerField(db_column='ModifyCCardBillNO', blank=True, null=True)  # Field name made lowercase.
    isprocessing = models.NullBooleanField(db_column='IsProcessing')  # Field name made lowercase.
    paydeadline = models.DateTimeField(db_column='PayDeadLine', blank=True, null=True)  # Field name made lowercase.
    isenabled = models.NullBooleanField(db_column='IsEnabled')  # Field name made lowercase.
    realget = models.DecimalField(db_column='RealGet', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    insertdt = models.DateTimeField(db_column='InsertDT', blank=True, null=True)  # Field name made lowercase.
    updatedt = models.DateTimeField(db_column='UpdateDT', blank=True, null=True)  # Field name made lowercase.
    datacreate_lasttime = models.DateTimeField(db_column='DataCreate_LastTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'src5'


class TestPython(models.Model):
    fmin = models.DateTimeField(db_column='Fmin', blank=True, null=True)  # Field name made lowercase.
    num = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'test_Python'


class TmpBuyoutinventorydetail(models.Model):
    inventoryid = models.IntegerField(blank=True, null=True)
    room = models.IntegerField(blank=True, null=True)
    roomname = models.CharField(max_length=200, blank=True)
    hotel = models.IntegerField(blank=True, null=True)
    resourcename = models.CharField(max_length=200, blank=True)
    city = models.IntegerField(blank=True, null=True)
    cityname = models.CharField(max_length=50, blank=True)
    provincename = models.CharField(max_length=200, blank=True)
    effectdate = models.DateTimeField(blank=True, null=True)
    limitrooms = models.IntegerField(blank=True, null=True)
    leftrooms = models.IntegerField(blank=True, null=True)
    recommend = models.IntegerField(blank=True, null=True)
    freesale = models.CharField(max_length=1, blank=True)

    class Meta:
        managed = False
        db_table = 'tmp_buyoutinventorydetail'


class TmpRoomstatusdetail(models.Model):
    roomclass = models.IntegerField(blank=True, null=True)
    room = models.IntegerField(blank=True, null=True)
    roomname = models.CharField(max_length=500, blank=True)
    hotel = models.IntegerField(blank=True, null=True)
    resourcename = models.CharField(max_length=500, blank=True)
    city = models.IntegerField(blank=True, null=True)
    cityname = models.CharField(max_length=500, blank=True)
    provincename = models.CharField(max_length=500, blank=True)
    effectdate = models.DateTimeField(blank=True, null=True)
    totalrooms = models.IntegerField(blank=True, null=True)
    leftrooms = models.IntegerField(blank=True, null=True)
    roomstatus = models.CharField(max_length=10, blank=True)
    recommend = models.IntegerField(blank=True, null=True)
    freesale = models.CharField(max_length=10, blank=True)

    class Meta:
        managed = False
        db_table = 'tmp_roomstatusdetail'
