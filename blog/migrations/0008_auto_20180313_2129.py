# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2018-03-13 13:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20180313_2125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='img_src',
            field=models.ImageField(upload_to='/static/blog/upload/'),
        ),
    ]