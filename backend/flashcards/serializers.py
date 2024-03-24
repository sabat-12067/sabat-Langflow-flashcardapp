from rest_framework import serializers
from .models import StudyClass, FlashCardSet, FlashCards

class StudyClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyClass
        fields = ['id', 'user_id_or_study_class_id', 'name', 'description']

class FlashCardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCardSet
        fields = ['id', 'name', 'description', 'study_class_id']

class FlashCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCards
        fields = ['id', 'front', 'back']
