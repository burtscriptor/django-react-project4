# Generated by Django 5.0.4 on 2024-04-17 00:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_session_sessionid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='climb',
            name='sessionId',
        ),
        migrations.RemoveField(
            model_name='session',
            name='sessionId',
        ),
        migrations.AddField(
            model_name='climb',
            name='session',
            field=models.ForeignKey(default=35, on_delete=django.db.models.deletion.CASCADE, to='api.session'),
            preserve_default=False,
        ),
    ]
