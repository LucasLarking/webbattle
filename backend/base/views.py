from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.viewsets import GenericViewSet, ModelViewSet

from base.serializers import ChapterSerializer, ImageSerializer, LessonSerializer

from .models import Chapter, Image, Lesson
from .forms import ImageForm
import base64
from io import BytesIO
# from PIL import Image
# Create your views here.
def hello(request):
    return render(request, 'hello.html')

class ChapterViewset(ModelViewSet):

    http_method_names = ['option', 'head', 'get']
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

    @action(detail=True, methods=['get'])
    def lessons(self, request, pk=None):
        chapter = self.get_object()
        ojb = Chapter.objects.get(id=pk)
        print(ojb)
        lessons = Lesson.objects.filter(chapter=ojb)
        print(request.data, pk)
        serializer = LessonSerializer(lessons, many=True)
        print(serializer.data)
        return Response(serializer.data)

class ImageViewSet(ModelViewSet):
    print('return image')

    # http_method_names = ['get', 'post']
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.AllowAny]

class LessonViewSet(ModelViewSet):
    http_method_names = ['get', 'patch', 'delete', 'head', 'option', 'post']
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def get_queryset(self):
        return Lesson.objects.prefetch_related('image_set').all()