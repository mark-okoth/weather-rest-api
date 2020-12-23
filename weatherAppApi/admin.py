from django.contrib import admin
from .models import Weather

# Register your models here.

class WeatherAdmin(admin.ModelAdmin):
    list_display = ('name', 'location','description','time')
    
    
admin.site.register(Weather,WeatherAdmin)    
    
