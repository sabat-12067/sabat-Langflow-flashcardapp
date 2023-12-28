from django.db import models
from django.conf import settings

class StudyClass(models.Model): 
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length = 50)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class FlashcardSet(models.Model):
    study_class = models.ForeignKey(StudyClass, related_name='sets', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Flashcard(models.Model):
    flashcard_set = models.ForeignKey(FlashcardSet, related_name='flashcards', on_delete=models.CASCADE)
    front = models.TextField()
    back = models.TextField()

    def __str__(self):
        return f'{self.front} / {self.back}'