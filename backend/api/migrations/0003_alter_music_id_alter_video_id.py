# Generated by Django 5.0.1 on 2024-01-23 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_music'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='video',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
