from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator,MinValueValidator
from django.db import models


class MyMovie(models.Model):
    movie_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    poster = models.URLField()
    purchase_date = models.DateField()
    location = models.CharField(max_length=255)
    personal_rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    notes = models.CharField(max_length=255)
