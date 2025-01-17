from django.contrib import admin
from django.urls import path
from .views import StudyClassView, FlashCardSetView, FlashCardView

urlpatterns = [
    path('study-classes/', StudyClassView.as_view(), name='study-class'),
    #This endpoint can be hit with either the users id to GET all the study classes for that user, or a specific Study Class id to PATCH that study class
    path('study-classes/<str:user_id_or_study_class_id>/', StudyClassView.as_view(), name='study-class-update'),
    #How to POST  flashcard set or GET a set
    path('study-classes/<int:study_class_id>/flashcard-sets/', FlashCardSetView.as_view(), name='flashcard-set-list'),
    #HOW TO PATCH or DELETE A FLASHCARD SET
    path('flashcard-sets/<int:flashcard_set_id>/', FlashCardSetView.as_view(), name='flashcard-set-update'),
    #How to GET, POST a card
    path('flashcards/<int:flashcard_set_id>/', FlashCardView.as_view(), name='flashcard-detail'),
    #How to PATCH/DELETE a card
    path('flashcardspatch/<int:flashcard_id>/', FlashCardView.as_view(), name='flashcard-update'),

]
