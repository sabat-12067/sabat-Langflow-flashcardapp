from rest_framework.views import APIView
from rest_framework.response import Response
from .models import StudyClass
from .serializers import StudyClassSerializer, FlashCardSetSerializer
from django.http import HttpResponse
from rest_framework import status



class StudyClassView(APIView):
    def get(self, request, format=None):
        study_classes = StudyClass.objects.all()
        serializer = StudyClassSerializer(study_classes, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = StudyClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FlashCardSetView(APIView):
    def get(self, request, study_class_id, format=None):
        flashcard_sets = FlashCardSet.objects.filter(study_class_id=study_class_id)
        serializer = FlashCardSetSerializer(flashcard_sets, many=True)
        return Response(serializer.data)

    def post(self, request, study_class_id, format=None):
        study_class = StudyClass.objects.get(id=study_class_id)
        serializer = FlashCardSetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(study_class=study_class)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
        
class FlashcardView(APIView):
    def get(self, request, format=None):
        study_classes = StudyClass.objects.all()
        serializer = StudyClassSerializer(study_classes, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = StudyClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)