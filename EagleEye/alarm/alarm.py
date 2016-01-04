# Created by wang.zy at 2015/9/11

from django.core.mail import send_mail,EmailMultiAlternatives

import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'Monitor.settings'

# send_mail('Subject here', """
#
# """, 'wang.zy@ctrip.com',
#           ['wang.zy@Ctrip.com'], fail_silently=False)

subject, from_email, to = 'hello', 'monitor@ctrip.com', 'wang.zy@ctrip.com'
text_content = 'This is an important message.'
html_content = '<p>This is an <strong>important</strong> message.</p>'
msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
msg.attach_alternative(html_content, "text/html")
msg.send()
