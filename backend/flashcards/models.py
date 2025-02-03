from django.db import models
from django.utils.timezone import now

class StudyClass(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    user_id_or_study_class_id = models.CharField(max_length=96, db_index=True)
    name = models.CharField(max_length=50, unique=True,db_index=True)
    description = models.TextField(blank=True, db_index=True)

    def __str__(self): 
        return self.name

class FlashCardSet(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    study_class = models.ForeignKey(StudyClass, related_name='sets', on_delete=models.CASCADE, db_index=True)
    name = models.CharField(max_length=20, db_index=True)
    description = models.TextField(blank=True, db_index=True)

    def __str__(self):
        return self.name

class FlashCards(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    flashcard_set = models.ForeignKey(FlashCardSet, related_name='flashcards', on_delete=models.CASCADE, db_index=True)
    front = models.TextField()
    back = models.TextField()

    def __str__(self):
        return f'{self.front} / {self.back}'
