# Generated by Django 2.2 on 2020-12-23 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherAppApi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weather',
            name='temperature',
            field=models.DecimalField(decimal_places=2, max_digits=2),
        ),
    ]
