from .views import StudyClassList
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('study-classes/', StudyClassList.as_view(), name='study-class-list'),
]
