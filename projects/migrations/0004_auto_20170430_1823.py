# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_auto_20170430_1216'),
    ]

    operations = [
        migrations.AddField(
            model_name='modules',
            name='date',
            field=models.DateTimeField(default=datetime.datetime.now, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='modules',
            name='name',
            field=models.TextField(default=b'module1'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='modules',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2017, 4, 30, 18, 23, 13, 498394, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
    ]
