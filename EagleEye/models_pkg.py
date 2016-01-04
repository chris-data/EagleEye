# Created by wang.zy at 2015/11/26

from django.db import models


class pkgorder(models.Model):
    n_id = models.AutoField(primary_key=True)
    orderid = models.BigIntegerField(blank=True)
    pkg = models.IntegerField(blank=True, null=True)
    orderdate = models.DateField(blank=True, null=True)
    orderstatus = models.CharField(max_length=5, null=True)
    processstatus = models.CharField(max_length=5, null=True)
    serverfrom = models.CharField(max_length=100, null=True)
    isonline = models.CharField(max_length=5, null=True)
    cancelreason = models.CharField(max_length=100, null=True)
    pkgtype = models.CharField(max_length=50, null=True)
    datachange_lasttime = models.DateTimeField(null=True)
    bookingchannel = models.CharField(max_length=100, null=True)
    datacreate_lasttime = models.DateTimeField(null=True)

    def __str__(self):
        return self.orderid

    class Meta:
        managed = False
        db_table = 'v_Pkg_Order'
