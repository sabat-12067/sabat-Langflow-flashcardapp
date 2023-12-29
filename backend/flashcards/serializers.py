from rest_framework import serializers
from .models import StudyClass, FlashcardSet, Flashcard

class StudyClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyClass
        fields = ['id', 'supabase_user_id', 'name', 'description']

class FlashcardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashcardSet
        fields = ['id', 'study_class', 'title']

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ['id', 'flashcard_set', 'front', 'back']
