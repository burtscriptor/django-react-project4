# Generated by Django 5.0.4 on 2024-04-15 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_climb_session_climb_climber_delete_session'),
    ]

    operations = [
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField()),
                ('type', models.CharField(max_length=20)),
                ('comments', models.CharField(blank=True, max_length=200)),
            ],
        ),
        migrations.RenameField(
            model_name='climb',
            old_name='goal',
            new_name='lead',
        ),
        migrations.RenameField(
            model_name='climb',
            old_name='laps',
            new_name='rests',
        ),
        migrations.RemoveField(
            model_name='climb',
            name='attempts',
        ),
        migrations.AddField(
            model_name='climb',
            name='project_send_attempt',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='climb',
            name='style',
            field=models.CharField(max_length=50),
        ),
    ]