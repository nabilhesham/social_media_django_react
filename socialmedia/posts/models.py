from django.db import models


# Post Model
class Post(models.Model):
    title = models.CharField(max_length=100, unique=True)
    body = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)
