# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20170430_1823'),
    ]

    operations = [
        migrations.RenameField(
            model_name='modules',
            old_name='date',
            new_name='created_at',
        ),
    ]
