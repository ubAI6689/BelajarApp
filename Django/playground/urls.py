from django.urls import path
from . import views

# URL configuration for the playground app
urlpatterns = [
    path('hello/', views.say_hello),
]