
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('study-classes/', StudyClass.as_view(), name='study-class-list'),

]
