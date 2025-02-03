from django_opensearch_dsl import Document
from django_opensearch_dsl.registries import registry
from .models import FlashCards, StudyClass, FlashCardSet


@registry.register_document
class StudyClassDocument(Document):
    class Index:
        name = 'studyclass' 
        settings = { 
            'number_of_shards': 1,
            'number_of_replicas': 0
        }
        auto_refresh = False

    class Django:
        model = Car       
        fields = [  
            'name',
            'color',
            'description',
            'type',
        ]
        queryset_pagination = 5000