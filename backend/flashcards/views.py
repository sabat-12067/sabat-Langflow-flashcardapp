from rest_framework.views import APIView
from rest_framework.response import Response
from .models import StudyClass, FlashCardSet, FlashCards
from .serializers import StudyClassSerializer, FlashCardSetSerializer, FlashCardSerializer
from django.http import HttpResponse
from rest_framework import status
from openai import OpenAI

class StudyClassView(APIView):
    def get(self, request, user_id_or_study_class_id, format=None):
        study_classes = StudyClass.objects.filter(user_id_or_study_class_id=user_id_or_study_class_id).order_by('-created_at')
        serializer = StudyClassSerializer(study_classes, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = StudyClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def patch(self, request, user_id_or_study_class_id):
        try:
            study_class = StudyClass.objects.get(id=user_id_or_study_class_id)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = StudyClassSerializer(study_class, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, user_id_or_study_class_id):
        try:
            study_class = StudyClass.objects.get(id=user_id_or_study_class_id)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        study_class.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class FlashCardSetView(APIView):
    def get(self, request, study_class_id, format=None):
        flashcard_sets = FlashCardSet.objects.filter(study_class_id=study_class_id).order_by('-created_at')
        serializer = FlashCardSetSerializer(flashcard_sets, many=True)
        return Response(serializer.data)

    def post(self, request, study_class_id, format=None):
        study_class = StudyClass.objects.get(id=study_class_id)
        serializer = FlashCardSetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(study_class=study_class)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request,flashcard_set_id, format=None):
        try:
            flashcard_set = FlashCardSet.objects.get(id=flashcard_set_id)
        except FlashCardSet.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        flashcard_set.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, flashcard_set_id, format=None):
        try:
            flashcard_set = FlashCardSet.objects.get(id=flashcard_set_id)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = FlashCardSetSerializer(flashcard_set, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class FlashCardView(APIView):
    def get(self, request, flashcard_set_id, format=None):
        flashcards = FlashCards.objects.filter(flashcard_set_id=flashcard_set_id).order_by('-created_at')
        serializer = FlashCardSerializer(flashcards, many=True)
        return Response(serializer.data)

    def post(self, request, flashcard_set_id, format=None):
        flashcard_set = FlashCardSet.objects.get(id=flashcard_set_id)
        serializer = FlashCardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(flashcard_set=flashcard_set)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, flashcard_id):
        try:
            flashcard = FlashCards.objects.get(id=flashcard_id)
        except FlashCardSet.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        flashcard.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    def patch(self, request, flashcard_id):
        print("PATCH method called with flashcard_id:", flashcard_id)
        try:
          flashcard = FlashCards.objects.get(id=flashcard_id)
        except FlashCards.DoesNotExist:
          return Response(status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        serializer = FlashCardSerializer(flashcard, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OpenAIView:
    def post(self, request):

        return