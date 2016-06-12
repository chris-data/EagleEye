"""
Django settings for Monitor project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ts4mc4t8og=7&!u60z_xvwv%3p-r53pw9a!%91w8s&j1x)+djp'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'EagleEye',
    'django_cas_ng',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'django_cas.middleware.CASMiddleware',
    # 'django.middleware.doc.XViewMiddleware',
    # 'django.middleware.cache.CacheMiddleware',

)

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'django_cas_ng.backends.CASBackend',
)
# 登录地址 https://cas.uat.qa.nt.ctripcorp.com/caso/login   https://cas.ctripcorp.com/caso/login  https://cas.ctripcorp.com/caso/login
CAS_SERVER_URL = "https://cas.ctripcorp.com/caso/login"

CAS_LOGOUT_COMPLETELY = True
CAS_CREATE_USER = True
CAS_IGNORE_REFERER = True
# CAS_REDIRECT_URL = "https://cas.uat.qa.nt.ctripcorp.com/caso/login"
CAS_AUTO_CREATE_USERS = True  # 是否需要自动创建用户
CAS_GATEWAY = False
CAS_RETRY_LOGIN = False  # 认证失败不重试登录，不然会死循环
CAS_ALLOWED_GROUPS = [u"技术研发中心"]  # 限制只有技术研发中心的人才可以访问

ROOT_URLCONF = 'Monitor.urls'

WSGI_APPLICATION = 'Monitor.wsgi.application'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            # ... some options here ...
        },
    },
]
# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'NAME': 'dw_diydb',
    #     'ENGINE': 'sqlserver_ado',
    #     'HOST': '10.8.77.41',
    #     'PORT': '28747',
    #     'USER': 'un_wangzy',
    #     'PASSWORD': "wEJENDhMWbPdaqs$N@DY",
    # },
    'default': {
        'NAME': 'monitor',
        'ENGINE': 'mysql.connector.django',
        'HOST': '10.8.77.165',
        'PORT': '3306',
        'USER': 'deploy',
        'PASSWORD': "123456",
        'OPTIONS': {
            'autocommit': True,
        },
    },
    'analysis': {
        'NAME': 'analysis',
        'ENGINE': 'mysql.connector.django',
        'HOST': '10.8.77.165',
        'PORT': '3306',
        'USER': 'deploy',
        'PASSWORD': "123456",
        'OPTIONS': {
            'autocommit': True,
        },
    }
}

# CACHES = {
#     'default': {
#         'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
#     }
# }


# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

# TIME_ZONE = 'UTC'
# TIME_ZONE='Asia/Shanghai'

USE_I18N = True

USE_L10N = True

# USE_TZ = False
TIME_ZONE = 'Asia/Shanghai'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'

# Additional locations of static files
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "static/"),
)

TEMPLATE_DIRS = (os.path.join(BASE_DIR, 'templates'),)

# send email

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_USE_TLS = False
EMAIL_HOST = 'appmail.sh.ctriptravel.com'
EMAIL_HOST_USER = 'appmail103'
EMAIL_HOST_PASSWORD = 'Mbbnsvpjeni6mc8Ej'
DEFAULT_FROM_EMAIL = 'wang.zy@ctrip.com'
# EMAIL_PORT = 587

ADMINS = (('chris', 'wang.zy@Ctrip.com'))
# DEFAULT_INDEX_TABLESPACE=''

# DEFAULT_CHARSET = 'utf-8'
