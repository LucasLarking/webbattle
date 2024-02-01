from rest_framework import serializers
from .models import Chapter, Image, Lesson





class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ['image', 'width', 'height']


class LessonSerializer(serializers.ModelSerializer):
    image_set = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Lesson
        fields = ['name', 'id', 'image_set']

class ChapterSerializer(serializers.ModelSerializer):
    # lesson_set = LessonSerializer(many=True, read_only=True)
    class Meta:
        model = Chapter
        fields = ['chapter_name', 'id']
