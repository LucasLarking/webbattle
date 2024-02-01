from rest_framework_nested import routers
from .views import ChapterViewset, LessonViewSet, hello, ImageViewSet
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('images', ImageViewSet, basename='image')
router.register('chapters', ChapterViewset, basename='chapter')
router.register('lessons', LessonViewSet, basename='lesson')

# chapter_router = routers.NestedDefaultRouter(router, 'chapters', lookup='chapter')
# chapter_router.register('lessons', LessonViewSet, basename='chapter-lesson')
urlpatterns = [
    path('home/', hello),
   
]  +  router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)