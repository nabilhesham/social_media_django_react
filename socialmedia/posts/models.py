from django.db import models
from django.contrib.auth.models import User


# Post Model
class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name="posts",
                             on_delete=models.CASCADE, null=True)
