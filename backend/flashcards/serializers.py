from rest_framework import serializers
from .models import StudyClass, FlashCardSet, FlashCards

class StudyClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyClass
        fields = ['id', 'supabase_user_id', 'name', 'description']

class FlashCardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCardSet
        fields = ['id', 'title']

class FlashCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCards
        fields = ['id', 'front', 'back']
