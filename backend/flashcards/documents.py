from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl import fields
from django_elasticsearch_dsl.registries import registry
from flashcards.models import StudyClass
from flashcards.models import FlashCardSet
from flashcards.models import FlashCards

@registry.register_document
class StudyClassDocument(Document):
    class Index:
        name = 'study_classes'
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }

    class Django:
        model = StudyClass 
        fields = [
            'created_at',
            'user_id_or_study_class_id',
            'name',
            'description',
        ]
        ignore_signals = False
        auto_refresh = True

@registry.register_document
class FlashCardSetDocument(Document):
    class Index:
        name = 'flashcard_sets'
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }

    class Django:
        model = FlashCardSet 
        fields = [
            'created_at',
            'name',
            'description',
        ]
        ignore_signals = False
        auto_refresh = True


@registry.register_document
class FlashCardDocument(Document):
    class Index:
        name = 'flashcards'
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }

    class Django:
        model = FlashCards  
        fields = [
            'created_at',
        ]
        ignore_signals = False
        auto_refresh = True
