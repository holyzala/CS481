from django.contrib.auth.models import User
from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator
# Create your models here.

class MyMovie(models.Model):
    name = models.CharField(max_length=255)
    purchase_date = models.DateField()
    location = models.CharField(max_length=255)
    personal_rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    notes = models.CharField(max_length=255)
