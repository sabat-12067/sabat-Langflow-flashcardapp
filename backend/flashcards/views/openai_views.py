from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from openai import OpenAI
import os


class OpenAIView(APIView):
    def post(self, request):
        openai.api_key = os.getenv("OPENAI_API_KEY")
        if not openai.api_key:
            return Response({'error': 'API Key not found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        word = request.data.get('word', None)
        if not word:
            return Response({"error": "word is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            prompt = f"Provide the pronunciation of the word '{word}' in simple phonetic form, and explain how to say it. Respond in less than 3 sentences."
            response = openai.Completion.create(
                model="gpt-3.5-turbo",
                prompt=prompt,
                max_tokens=50
            )
            pronunciation_feedback = response.choices[0].text.strip()
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({"pronunciation": pronunciation_feedback}, status=status.HTTP_200_OK)