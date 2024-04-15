# Generated by Django 5.0.4 on 2024-04-15 04:39

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('type', models.CharField(choices=[('P', 'Project'), ('E', 'Endurance'), ('S', 'Skills'), ('L', 'Lead'), ('F', 'Fun')], default='F', max_length=1)),
                ('comments', models.CharField(blank=True, max_length=200)),
                ('climber', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='climber_session', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Climb',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goal', models.BooleanField(default=False)),
                ('sent', models.BooleanField(default=False)),
                ('laps', models.IntegerField()),
                ('grade', models.IntegerField()),
                ('style', models.CharField(choices=[('V', 'Vertical'), ('O', 'Overhang'), ('R', 'Roof'), ('S', 'Slab')], default='V', max_length=1)),
                ('attempts', models.IntegerField(default=1)),
                ('comments', models.CharField(blank=True, max_length=200)),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='climb_session', to='api.session')),
            ],
        ),
        migrations.DeleteModel(
            name='Note',
        ),
    ]
