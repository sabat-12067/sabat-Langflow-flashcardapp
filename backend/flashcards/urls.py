from .views import StudyClassView
from .views import FlashCardSetView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('study-classes/', StudyClassView.as_view(), name='study-class'),
    path('study-classes/<int:study_class_id>/flashcard-sets/', FlashCardSetView.as_view(), name='flashcard-set-list')
]
