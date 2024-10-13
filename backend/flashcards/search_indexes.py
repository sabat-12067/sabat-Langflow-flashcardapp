from haystack import indexes
from .models import StudyClass, FlashCardSet, FlashCards

#Search index for StudyClass
class StudyClassIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharFiled(document=True, use_template=True)
    name = indexes.CharField(model_attr='name')
    description = indexes.CharField(model_attr = 'description')

    def get_model(self):
      return StudyClass
    def index_queryset(self, using=None):
      return self.get_model().objects.all()
        
