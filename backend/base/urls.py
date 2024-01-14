from rest_framework_nested import routers
from .views import LessonViewSet, hello, ImageViewSet
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
router = routers.DefaultRouter()
router.register('images', ImageViewSet, basename='image')
router.register('lessons', LessonViewSet, basename='lesson')
lesson_router = routers.NestedDefaultRouter(router, 'lessons', lookup='lesson')
# lesson_router.register('images', ImageDataViewSet, basename='lesson-image')
urlpatterns = [
    path('home/', hello),
   
] +  router.urls + lesson_router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)