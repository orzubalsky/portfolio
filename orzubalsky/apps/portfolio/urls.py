from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from portfolio.views import *

# orzubalskydotcom application
urlpatterns = patterns('portfolio.views',
    url(r'projects$', TemplateView.as_view(template_name="project_list.html"), name='project-list'),
    url(r'news/(?P<slug>[0-9A-Za-z\-]+)$', PostDetail.as_view(), name='post-detail'),
    url(r'news$', PostList.as_view(), name='post-list'),    
    url(r'project/(?P<slug>[0-9A-Za-z\-]+)$', ProjectDetail.as_view(), name='project-detail'),
    url(r'$', TemplateView.as_view(template_name="home.html"), name='home'),
)