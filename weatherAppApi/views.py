from django.shortcuts import render
from rest_framework import viewsets
from .serializers import weatherSerializer
from rest_framework.permissions import AllowAny
from .models import Weather
# Create your views here.
class WeatherViewSet(viewsets.ModelViewSet):
    queryset = Weather.objects.all()
    serializer_class = weatherSerializer
    Permission_classes = [AllowAny,]
    