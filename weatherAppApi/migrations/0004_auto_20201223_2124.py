# Generated by Django 2.2 on 2020-12-23 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherAppApi', '0003_auto_20201223_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weather',
            name='temperature',
            field=models.FloatField(),
        ),
    ]
