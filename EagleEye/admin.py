from django.contrib import admin

# Register your models here.
from EagleEye.models import DiyPageviewStatisticRealtime,predictedorders,DiyOrderRealtime,CommitOrder,BookingOrder

admin.site.register(DiyPageviewStatisticRealtime)
admin.site.register(predictedorders)
admin.site.register(DiyOrderRealtime)
admin.site.register(CommitOrder)
admin.site.register(BookingOrder)