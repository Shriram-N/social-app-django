# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_auto_20170430_1837'),
    ]

    operations = [
        migrations.AlterField(
            model_name='modules',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime.now, null=True, blank=True),
            preserve_default=True,
        ),
    ]
