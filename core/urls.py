from django.urls import path
from django.views.generic.base import TemplateView
from django.contrib.auth import views as auth_views
from .views import inicio
from .views import ingresar, nosotros, registro

urlpatterns = [
    path('inicio', inicio, name='inicio'),
    path('ingresar', ingresar, name='ingresar'),
    path('nosotros', nosotros, name='nosotros'),
    path('registro', registro, name='registro'),
    
]