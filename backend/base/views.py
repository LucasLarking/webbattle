from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.viewsets import GenericViewSet, ModelViewSet

from base.serializers import ImageSerializer, LessonSerializer

from .models import Image, Lesson
from .forms import ImageForm
import base64
from io import BytesIO
# from PIL import Image
# Create your views here.
def hello(request):
    return render(request, 'hello.html')

# class ImageViewSet(APIView):
#     print('wasuop')
#     def get(self, request):
#         print('get stuff')
#         image_data = Image.objects.all()
#         serializer = ImageSerializer(image_data, many=True)
#         return Response(serializer.data)
#     def post(self, request):
#         serializer = ImageSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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