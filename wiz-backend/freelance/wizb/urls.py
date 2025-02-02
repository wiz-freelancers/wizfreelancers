from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'services', views.ServiceViewSet)
router.register(r'team', views.TeamMemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
]