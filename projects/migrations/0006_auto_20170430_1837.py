# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0005_auto_20170430_1824'),
    ]

    operations = [
        migrations.AlterField(
            model_name='modules',
            name='name',
            field=models.TextField(default=b'module1', null=True, blank=True),
            preserve_default=True,
        ),
    ]
