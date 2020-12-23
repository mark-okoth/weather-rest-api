from django.db import models

# Create your models here.
class Weather(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField( max_length=50)
    temperature = models.FloatField()
    time =  models.TimeField(auto_now=False, auto_now_add=False)
    day =models.DateField(auto_now=False, auto_now_add=False)
    description = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name