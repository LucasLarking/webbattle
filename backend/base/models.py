from django.db import models


class Lesson(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class Image(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    width = models.SmallIntegerField()
    height = models.SmallIntegerField()