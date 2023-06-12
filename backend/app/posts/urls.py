from django.urls import path

from .views import PostsListVew

app_name = 'posts'
urlpatterns = [
    path("all", PostsListVew.as_view(), name="all_posts")
]
