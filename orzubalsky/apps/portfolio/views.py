from django.views.generic import ListView, DetailView
from portfolio.models import *
from portfolio.forms import *


class PostList(ListView):
    """
    """
    queryset = Post.objects.filter(is_active=True)
    template_name = 'post_list.html'


class PostDetail(DetailView):
    """
    """
    model = Post
    template_name = 'post_detail.html'


class ProjectDetail(DetailView):
    """
    """
    model = Project
    template_name = 'project_detail.html'