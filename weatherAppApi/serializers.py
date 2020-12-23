from rest_framework import serializers
from .models import Weather

class weatherSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Weather
        fields = ['url', 'id', 'name','location','temperature','time','day','description']