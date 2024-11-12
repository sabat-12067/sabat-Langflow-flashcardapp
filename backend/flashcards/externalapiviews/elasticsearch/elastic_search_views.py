from django.shortcuts import render
from haystack.query import SearchQuerySet

def elastic_search_study_classes(request):
    query = request.GET.get('q', '')
    results = SearchQuerySet().models(StudyClass).filter(content=query) if query else []
    return render(request, 'search_results.html', {'results': results, 'query': query})

def elastic_search_flashcard_sets(request):
    query = request.GET.get('q', '')
    results = SearchQuerySet().models(FlashCardSet).filter(content=query) if query else []
    return render(request, 'search_results.html', {'results': results, 'query': query})

def elastic_search_flashcards(request):
    query = request.GET.get('q', '')
    results = SearchQuerySet().models(FlashCards).filter(content=query) if query else []
    return render(request, 'search_results.html', {'results': results, 'query': query})
