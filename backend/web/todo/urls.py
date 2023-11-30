from django.urls import path, include
from .views import ListTodo, DetailTodo, hello_world

urlpatterns = [
    path('<int:pk>/', DetailTodo.as_view()),
    path('', ListTodo.as_view()),
    path('hello/', hello_world)
]