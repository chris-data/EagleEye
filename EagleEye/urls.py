from django.conf.urls import url

from . import views_base, views_ext, views_pkg, views_check, views_services, views_cruise, views_metrix

# yyyy-mm-dd  checkhistory
regex_date = '[0-9]{4}-[0-9]{2}-[0-9]{2}'
pageurl = [
    # dashboard page
    # url(r'^dashboard/$', views.dashboard, name='dashboard'),

    url(r'^$', views_base.home, name='dashboard'),

    # url(r'^home/$', views.home, name='home'),
    # traffic page
    url(r'^realtime/traffic/$', views_base.get_traffic_detail, name='pv_detail'),
    # order page
    url(r'^realtime/order/$', views_base.get_order_detail, name='order_detail'),
    # pageid list
    url(r'^ajax/pageid/$', views_base.get_pageid, name='pageid_list'),

    url(r'^uaanalysis/$', views_base.get_ua_analysis, name='ua_analysis'),

    url(r'^check/$', views_check.get_check, name='check'),
    url(r'^checkhistory/$', views_check.get_CheckHistory, name='check_history'),
    url(r'^services/$', views_services.get_services_page, name='services'),
    url(r'^appcr/$', views_base.get_app_CR, name='appCR'),
    url(r'^apporder/$', views_base.get_app_Order, name='appOrder'),
    url(r'^cruise/$', views_cruise.get_cruise, name='cruise'),
    url(r'^vacationbookcommit/$', views_base.get_vacation_bookcommit, name='vacbookcommit'),
    url(r'^diyserviceinvoke/$', views_base.get_diy_serviceinvoke, name='diyserviceinvoke'),
    url(r'^handler/$', views_base.get_diy_handler, name='diyhandler'),
    url(r'^soa/$', views_base.get_vac_soa, name='vacsoa'),
    url(r'^newcheckhistory/$', views_base.get_new_checkhistory, name='newcheckhistory'),  ##自由行新可订检查
    url(r'^pkgcheckhistory/$', views_base.get_pkg_checkhistory, name='pkgcheckhistory'),  ##团队游新可订检查
    url(r'^tourblock/$', views_base.get_tour_block, name='tourblock'),  ##度假页面阻断
]
orderurl = [
    # 订单sdt,edt,channel,product,interval5个维度
    url(
        r'^ajax/init/order2/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_orders_interval),
    url(r'^ajax/init/order4/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<producttype>[0-9]+)$',
        views_base.get_predicate_order, name='predicate_order'),
    url(r'^ajax/init/order7/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<producttype>[0-9]+)$',
        views_base.get_predicate_order_aggregate, name='predicate_order_aggregate'),
    url(r'^ajax/update/order2/$', views_base.get_append_order, name='update_order2'),
    url(r'^ajax/update/order2/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)$',
        views_base.get_append_order, name='update_order2_plus'),
    url(
        r'^ajax/init/order5/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_orders_aggregate),
    # 度假app转化率
    url(r'^ajax/appvacr/(?P<dimsdt>' + regex_date + ')/(?P<dimedt>' + regex_date + ')/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_APPCR),
    # 度假总订单 含app online 等
    url(r'^ajax/appvaallorder/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_VacAllOrder),
    # 度假app订单
    url(r'^ajax/appvaorder/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_APPOrder),
    # 度假分版本转化率 含android、ios个版本
    url(r'^ajax/tourappor/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_tourapporderrate),
    # 度假金额
    url(r'^ajax/appvaamount/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_VacAmount),
     # 度假订单版本饼形图
    url(r'^ajax/pieOrder/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_VacPieOrder),


]
trafficurl = [
    # 流量 dt,pageid,interval
    url(r'^ajax/init/traffic/$', views_base.get_init_traffic, name='init-traffic'),
    url(r'^ajax/init/traffic/(?P<dt>' + regex_date + ')/(?P<pageid>-?[0-9]+)/(?P<interval>[0-9]+)$',
        views_base.get_init_traffic, name='double_span'),
    url(r'^ajax/history/traffic/(?P<dt>' + regex_date + ')/(?P<pageid>-?[0-9]+)/(?P<interval>[0-9]+)$',
        views_base.get_history_traffic, name='history_traffic'),

    url(r'^ajax/update/traffic/$', views_base.get_update_traffic, name='update-triffic'),
    url(r'^ajax/update/traffic/(?P<dt>' + regex_date + ')/(?P<pageid>-?[0-9]+)/(?P<interval>[0-9]+)$',
        views_base.get_update_traffic),
    url(
        r'^ajax/init/traffic2/(?P<dt>' + regex_date + ')/(?P<pageid>-?[0-9]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_traffic_aggregate, name='double_span'),
]
detailurl = [
    # 流量 dt,pageid,interval
    url(r'^ajax/init/detail/$', views_base.get_init_traffic, name='init-traffic'),
]
bookingurl = [
    url(
        r'^ajax/init/booking/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_booking_interval, name='booking_interval'),
    url(r'^ajax/update/booking/$', views_base.get_append_booking, name='update-booking'),
    url(r'^ajax/update/booking/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)$',
        views_base.get_append_booking, name='update-booking-plus'),
    url(
        r'^ajax/init/booking2/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_booking_aggregate, name='booking_aggregate'),
    ## 自由行bookcommit
    url(r'^ajax/diybookcommit/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_diyBookCommit),
    ## 团队游bookcommit
    url(r'^ajax/pkgbookcommit/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_pkgBookCommit),
    ## 签证commit
    url(r'^ajax/visacommit/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_visaBookCommit),
    url(
        r'^ajax/diybookcommitnew/(?P<dimsdt>' + regex_date + ')/(?P<dimedt>' + regex_date + ')/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_diybookcommitnew),
    url(
        r'^ajax/pkgbookcommitnew/(?P<dimsdt>' + regex_date + ')/(?P<dimedt>' + regex_date + ')/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_pkgbookcommitnew),
    url(
        r'^ajax/visacommitnew/(?P<dimsdt>' + regex_date + ')/(?P<dimedt>' + regex_date + ')/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_visacommitnew),

]
commiturl = [
    url(
        r'^ajax/init/commit/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_commit_interval, name='init-commit-plus'),
    url(r'^ajax/update/commit/$', views_base.get_append_commit, name='update-commit'),
    url(r'^ajax/update/commit/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)$',
        views_base.get_append_commit, name='update-commit-plus'),
    url(
        r'^ajax/init/commit2/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)$',
        views_base.get_commit_aggregate, name='commit_aggregate'),
]

cancelurl = [
    url(r'^ajax/cancel/$', views_ext.get_cancelorders, name='cancelorder'),
    url(r'^ajax/cancelrate/$', views_ext.get_cancelrate, name='cancelrate'),
    url(r'^ajax/autocancelrate/$', views_ext.get_autocancelrate, name='autocancelrate'),
    url(r'^ajax/cancelrate/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<interval>[0-9]+)$',
        views_ext.get_cancelrate, name='cancelrate'),
    url(r'^ajax/autocancelrate/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<interval>[0-9]+)$',
        views_ext.get_autocancelrate, name='autocancelrate'),
]

uaurl = [
    url(r'^ajax/ua/platform/$', views_ext.get_platform, name='platform'),
    url(r'^ajax/ua/device/$', views_ext.get_device, name='device'),
    url(r'^ajax/ua/device/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_ext.get_device,
        name='device'),
    url(r'^ajax/ua/operationsystem/$', views_ext.get_operationsystem, name='operationsystem'),
    url(r'^ajax/ua/browser/$', views_ext.get_browser, name='browser'),
    url(r'^ajax/ua/edition/$', views_ext.get_edition, name='edition'),
    url(r'^ajax/ua/operationsystem/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_ext.get_operationsystem, name='operationsystem'),
    url(r'^ajax/ua/browser/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_ext.get_browser,
        name='browser'),
    url(r'^ajax/ua/edition/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_ext.get_edition,
        name='edition'),
    url(r'^download/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_ext.download_ua_excel),
    # 页面性能
    url(r'^ajax/pagehandler/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_pageHandler),
    # 接口性能
    url(r'^ajax/soaperform/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_interfacePerforms),
    # 度假页面性能（除团队游，只包含自由行和保险）
    url(r'^ajax/tourhandler/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_tourhandler),
     # 度假页面阻断
    url(r'^ajax/tourblock/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_base.get_tourblock),

]

# -------------------------------------pkg start----------------------------------------------------
pkgorderurl = [
    # param:sdt/edt/channel/product/interval/history/whole/update
    url(
        r'^ajax/pkgorder/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)/(?P<whole>False|True)/(?P<update>False|True)$',
        views_pkg.get_order),
    url(
        r'^ajax/pkgcreate/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)/(?P<whole>False|True)/(?P<update>False|True)$',
        views_pkg.get_create),
    url(
        r'^ajax/pkgcommit/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[a-z]+[0-9]?)/(?P<product>[a-z]+)/(?P<interval>[0-9]+)/(?P<history>False|True)/(?P<whole>False|True)/(?P<update>False|True)$',
        views_pkg.get_commit)
]

checkurl = [
    # sdt, edt, interval, sourcetype, result, isintl, channelid
    # CheckAvailableLog
    # CheckAvailableID	自增主键
    # SourceType	类型	1：SDP  2：DP
    # Result	是否成功	1：成功 0：失败
    # ChannelID	来源	1：Online  2：Offline 3：无线  4：国际英文网站
    # CreateDate	创建时间
    # IsIntl	是否国际	1：国际 2：国内

    url(
        r'^ajax/check/(?P<params>([0-9]{4}-[0-9]{2}-[0-9]{2}|&)+((-|[0-9]|&)+))/(?P<history>False|True)/(?P<whole>False|True)/(?P<update>False|True)$',
        views_check.get_CheckAvailable,
        name='CheckAvailable'),
    url(
        r'^ajax/check2/(?P<params>([0-9]{4}-[0-9]{2}-[0-9]{2}|&)+((-|[0-9]|&)+))/(?P<history>False|True)/(?P<update>False|True)$',
        views_check.get_CheckAvailable_ratio,
        name='CheckAvailable_ratio'),
    # -- CheckAvailableLogDetail
    # -- CheckAvailableLogDetailID	自增主键
    # -- CheckAvailableID	主表Id
    # -- ProductType	资源类型	1：Flight  2：Hotel  3：X资源  4：单选项
    # -- 5：火车票 6：TTD
    # -- Result	是否成功	1：成功 0：失败
    # -- FlightNo	航班号
    # -- RouteToken	Token
    # -- HotelID	酒店ID
    # -- RoomID	房型ID
    # -- ResourcesID	资源ID
    # -- Message	备注
    # -- FailCodes	失败Code
    # -- FlightType	机票类型	1：国际  2：大系统  3度假
    url(
        r'^ajax/checkresource/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<params>(-|[0-9]|&)+)/(?P<interval>[0-9]+)/(?P<history>False|True)/(?P<whole>False|True)/(?P<update>False|True)$',
        views_check.get_checkresource,
        name='checkresource'),
    url(
        r'^ajax/checkresourceratio/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<params>(-|[0-9]|&)+)/(?P<interval>[0-9]+)/(?P<history>False|True)/(?P<update>False|True)$',
        views_check.get_resource_ratio,
        name='checkresourceratio'),
    ##可订检查 离线数据url  全部/分渠道
    url(r'^ajax/allCheck/$', views_check.get_AllCheckHistory),
    url(r'^ajax/allCheck/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$', views_check.get_AllCheckHistory),
    url(
        r'^ajax/channelCheck/(?P<dimsdt>' + regex_date + ')/(?P<dimedt>' + regex_date + ')/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<channel>[0-9])$',
        views_check.get_channelCheckHistory),
    ## 分资源
    url(r'^ajax/fhCheckHistory/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_check.get_flightCheckHistory),  ##机票
    url(
        r'^ajax/htCheckHistory/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_check.get_hotelCheckHistory),  ##酒店及其他资源
    ##新的自由行SDP可订
    url(r'^ajax/newcheckhis/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_check.get_newcheckhis),
    ##新的团队游可订
    url(r'^ajax/pkgcheckhis/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_check.get_pkgcheckhis),
    ##老的自由行DP可订
    url(r'^ajax/olddpcheckhis/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_check.get_olddpcheckhis),
]

recommend = [
    url(
        r'^ajax/service/times/(?P<params>([0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]+&(-|[0-9]+)&(-|[0-9]+)&(-|[0-9]+)&(Hybrid|Online|H5|EnglishSite)))$',
        views_services.get_serviceinvoke_times,
        name='serviceinvoke_times'),
    url(
        r'^ajax/service/failures/(?P<params>([0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]+&(-|[0-9]+)&(-|[0-9]+)&(-|[0-9]+)&(Hybrid|Online|H5|EnglishSite)))$',
        views_services.get_serviceinvoke_failures,
        name='failure_times'),
    url(
        r'^ajax/service/elapsed/(?P<params>([0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]+&(-|[0-9]+)&(-|[0-9]+)&(-|[0-9]+)&(Hybrid|Online|H5|EnglishSite)))$',
        views_services.get_serviceinvoke_elapsed,
        name='elapsed'),
    url(
        r'^ajax/service/ratio/(?P<params>([0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]{4}-[0-9]{2}-[0-9]{2}&[0-9]+&(-|[0-9]+)&(-|[0-9]+)&(-|[0-9]+)&(Hybrid|Online|H5|EnglishSite)))$',
        views_services.get_serviceinvoke_failureratio,
        name='failureratio'),
    ## 自由行查询为空
    url(r'^ajax/diyservicehis/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/$',
        views_base.get_diyserviceinvoke),
]

cruise = [
    url(
        r'^ajax/cruise/order/(?P<sdt>' + regex_date + ')/(?P<edt>' + regex_date + ')/(?P<interval>[0-9]+)/(?P<channel>[a-z]+[0-9]?)/(?P<history>False|True)/(?P<update>False|True)/(?P<whole>False|True)$',
        views_cruise.get_order,
        name='cruise_order'),
]
# -------------------------------------pkg end------------------------------------------------------
regex_datetime = "[0-9]{4}(-[0-9]{2})* ([0-9]{2}:)*[0-9]{2}"

matrix = [

    # for init
    url(
        r'^bookable/failure/(?P<sdt>' + regex_datetime + ')/(?P<edt>' + regex_datetime + ')/(?P<interval>[0-9]+)/(?P<type>all|dp|sdp)/',
        views_metrix.get_bookable_failure, name='metrix'),
    url(
        r'^bookable/all/(?P<sdt>' + regex_datetime + ')/(?P<edt>' + regex_datetime + ')/(?P<interval>[0-9]+)/(?P<type>all|dp|sdp)/',
        views_metrix.get_bookable_all, name='metrix'),
    url(
        r'^bookable/rate/(?P<sdt>' + regex_datetime + ')/(?P<edt>' + regex_datetime + ')/(?P<interval>[0-9]+)/(?P<type>all|dp|sdp)/',
        views_metrix.get_bookable_rate, name='metrix'),

    # for update
    url(r'^bookable/failure/(?P<sdt>' + regex_datetime + ')/(?P<interval>[0-9]+)/(?P<type>all|dp|sdp)/',
        views_metrix.get_bookable_failure, name='metrix'),
    url(r'^bookable/all/(?P<sdt>' + regex_datetime + ')/(?P<interval>[0-9]+)/(?P<type>all|dp|sdp)/',
        views_metrix.get_bookable_all, name='metrix'),
    url(r'^bookable/rate/(?P<sdt>' + regex_datetime + ')/(?P<interval>[0-9]+)/(?P<type>all|dp|sdp)/',
        views_metrix.get_bookable_rate, name='metrix'),

    # for metrix
    url(r'^bookable/today/(?P<sdt>' + regex_datetime + ')/(?P<edt>' + regex_datetime + ')/(?P<type>all|dp|sdp)/',
        views_metrix.get_metrix, name='metrix'),
]

bookable = [
    url(r'page/bookable/', views_metrix.get_page_bookable, name='bookable')
]

urlpatterns = pageurl + orderurl + trafficurl + bookingurl + commiturl + cancelurl + uaurl + pkgorderurl + checkurl + recommend + cruise + matrix + bookable
