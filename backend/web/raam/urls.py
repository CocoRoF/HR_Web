from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
    path('basic/', BasicResponseModelView.as_view(), name='Basic_Response_Model'),
]