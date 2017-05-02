# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='creator',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True),
            preserve_default=True,
        ),
    ]
