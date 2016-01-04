# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('EagleEye', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='predicted_orders',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('orderdate', models.DateField(blank=True, null=True)),
                ('producttype', models.IntegerField(blank=True, null=True)),
                ('value', models.IntegerField(blank=True, null=True)),
                ('intervalTime', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'predicted_orders',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.AlterModelTable(
            name='bookingorder',
            table='DIY_Booking',
        ),
    ]
