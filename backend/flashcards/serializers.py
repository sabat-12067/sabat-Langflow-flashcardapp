from rest_framework import serializers
from .models import StudyClass, FlashCardSet, Flashcard

class StudyClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyClass
        fields = ['id', 'supabase_user_id', 'name', 'description']

class FlashCardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCardSet
        fields = ['id', 'title']

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ['id', 'front', 'back']
