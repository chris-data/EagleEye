from django.conf.urls import patterns, include, url
from EagleEye import views
from django.contrib import admin

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'Monitor.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),

                       url(r'^EagleEye/', include('EagleEye.urls')),
                       url(r'^$', views.to_dashboard, name='dashboard'),
                       url(r'^login/?$', 'django_cas_ng.views.login'),
                       url(r'^logout/$', 'django_cas_ng.views.logout'),
                       url(r'^admin/', include(admin.site.urls)),
                       )
