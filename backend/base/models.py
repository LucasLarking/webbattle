from django.db import models

class Chapter(models.Model):
    chapter_name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.chapter_name


class Lesson(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class Image(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    width = models.SmallIntegerField()
    height = models.SmallIntegerField()