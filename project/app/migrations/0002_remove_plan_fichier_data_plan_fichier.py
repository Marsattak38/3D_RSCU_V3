# Generated by Django 4.2.5 on 2023-11-12 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plan',
            name='fichier_data',
        ),
        migrations.AddField(
            model_name='plan',
            name='fichier',
            field=models.FileField(default=1, upload_to='project/media'),
            preserve_default=False,
        ),
    ]