from django.urls import path
from django.views.generic.base import TemplateView
from django.contrib.auth import views as auth_views
from .views import inicio

urlpatterns = [
    path('inicio', inicio, name='inicio')
]