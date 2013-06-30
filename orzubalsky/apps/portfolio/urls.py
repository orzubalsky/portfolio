from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

# orzubalskydotcom application
urlpatterns = patterns('portfolio.views',
    url(r'projects$', TemplateView.as_view(template_name="project_list.html"), name='project-list'),
    url(r'news/(?P<post_slug>[0-9A-Za-z\-]+)$', 'news_view', name='news-view'),
    url(r'news$', 'news_list', name='news-list'),    
    url(r'project/(?P<project_slug>[0-9A-Za-z\-]+)$', 'project_view', name='project-view'),
    url(r'$', TemplateView.as_view(template_name="home.html"), name='home'),
)