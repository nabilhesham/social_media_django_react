from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from .models import Post


# Post ViewSet
class PostViewSet(viewsets.ModelViewSet):
    # queryset = Post.objects.all()
    # permission_classes = [
    #     permissions.AllowAny
    # ]

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PostSerializer

    def get_queryset(self):
        return self.request.user.posts.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
