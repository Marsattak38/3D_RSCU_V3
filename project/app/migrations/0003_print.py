# Generated by Django 4.2.5 on 2023-11-12 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_remove_plan_fichier_data_plan_fichier'),
    ]

    operations = [
        migrations.CreateModel(
            name='Print',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=255)),
                ('fichier', models.FileField(upload_to='project/media')),
            ],
        ),
    ]
