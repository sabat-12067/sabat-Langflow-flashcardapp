from rest_framework.views import APIView
from rest_framework.response import Response
from .models import StudyClass
from .serializers import StudyClassSerializer

class StudyClassList(APIView):
    def get(self, request, format=None):
        study_classes = StudyClass.objects.all()
        serializer = StudyClassSerializer(study_classes, many=True)
        return Response(serializer.data)
