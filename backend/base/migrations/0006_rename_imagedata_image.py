# Generated by Django 5.0.1 on 2024-01-13 22:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_imagedata_height_imagedata_lesson_imagedata_url_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ImageData',
            new_name='Image',
        ),
    ]
