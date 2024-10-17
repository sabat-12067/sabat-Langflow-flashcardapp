from rest_framework.views import APIView
from rest_framework.response import Response
from .models import StudyClass, FlashCardSet, FlashCards
from .serializers import StudyClassSerializer, FlashCardSetSerializer, FlashCardSerializer
from django.http import HttpResponse
from rest_framework import status
from openai import OpenAI
import os

#Search index for StudyClass
class StudyClassIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharFiled(document=True, use_template=True)
    name = indexes.CharField(model_attr='name')
    description = indexes.CharField(model_attr = 'description')

    def get_model(self):
      return StudyClass
    def index_queryset(self, using=None):
      return self.get_model().objects.all()
        
# class FlashCardSetIndex

class FlashCardSetIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    name = indexes.CharField(model_attr="name")
    description = indexes.CharField(model_attr='description')
    study_class = indexes.CharField(model_attr='study_class_name')

    def get_model(self):
        return FlashCardSet
    
    def index_queryset(self, using=None):
        return self.get_model().objects.all()

# Search index for FlashCards
class FlashCardsIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    front = indexes.CharField(model_attr='front')
    back = indexes.CharField(model_attr='back')
    flashcard_set = indexes.CharField(model_attr='flashcard_set_name')
    study_set = indexes.CharField(model_attr='flashcard_set_study_class_name')

    def get_model(self):
        return FlashCards
    
    def index_queryset(self, using=None):
        return self.get_model().objects.all()
    
