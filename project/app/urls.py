from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('modelisation', views.modelisation, name="modelisation"),
    path('printing', views.printing, name="printing")
    
]