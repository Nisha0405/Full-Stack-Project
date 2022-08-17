from django.shortcuts import render
from rest_framework import viewsets
from.models import *
from .serializers import *

# Create your views here.
class TaskViewset(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer

class TaskDetail(viewsets.ModelViewSet):
    queryset = Tasks
    serializer_class = TasksSerializer