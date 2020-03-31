from django.db import models


# Post Model
class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=500, blank=True)
    created = models.DateTimeField(auto_now_add=True)
