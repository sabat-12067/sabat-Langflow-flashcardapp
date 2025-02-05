from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl import fields
from django_elasticsearch_dsl.registries import registry
from study_class.models import StudyClass
from flashcards.models import FlashCardSet
from flashcards.models import FlashCards

@registry.register_document
class StudyClassDocument(Document):
    # Fields that you want to store in Elasticsearch
    created_at = fields.DateField()
    user_id_or_study_class_id = fields.KeywordField()
    name = fields.TextField(analyzer='standard')  # Using 'standard' analyzer for full-text search
    description = fields.TextField(analyzer='standard')  # Using 'standard' analyzer for full-text search

    class Index:
        # Name of the Elasticsearch index
        name = 'study_classes'
        # Settings for the index (optional, you can define them if necessary)
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }

    class Django:
        model = StudyClass  # Link the document to the Django model
        fields = [
            'created_at',
            'user_id_or_study_class_id',
            'name',
            'description',
        ]
        # Define the index and update strategy (e.g., index when the model is saved)
        ignore_signals = False
        auto_refresh = True

@registry.register_document
class FlashCardSetDocument(Document):
    created_at = fields.DateField()
    study_class = fields.NestedField(properties={
        'name': fields.TextField(analyzer='standard'),
    })
    name = fields.TextField(analyzer='standard')
    description = fields.TextField(analyzer='standard')

    class Index:
        name = 'flashcard_sets'
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }

    class Django:
        model = FlashCardSet  # Link the document to the Django model
        fields = [
            'created_at',
            'name',
            'description',
        ]
        ignore_signals = False
        auto_refresh = True


@registry.register_document
class FlashCardDocument(Document):
    created_at = fields.DateField()
    front = fields.TextField(analyzer='standard')
    back = fields.TextField(analyzer='standard')

    class Index:
        name = 'flashcards'
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }

    class Django:
        model = FlashCards  # Link the document to the Django model
        fields = [
            'created_at',
        ]
        ignore_signals = False
        auto_refresh = True
