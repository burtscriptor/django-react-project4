# Generated by Django 5.0.4 on 2024-04-16 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]