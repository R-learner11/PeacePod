# Generated by Django 4.2.9 on 2024-03-03 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_music_id_alter_video_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='music_file',
            field=models.FileField(upload_to='music/All'),
        ),
        migrations.AlterField(
            model_name='music',
            name='title',
            field=models.CharField(max_length=300),
        ),
    ]
