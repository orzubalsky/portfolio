from django.conf.urls import patterns, url
from django.views.generic import TemplateView

# orzubalskydotcom application
urlpatterns = patterns('',
    url(r'the-future-is-fantastic$', TemplateView.as_view(template_name="the-future-is-fantastic.html"), name='sample-the-future-is-fantastic'),
    url(r'meeting-table$', TemplateView.as_view(template_name="meeting-table.html"), name='sample-meeting-table'),
    url(r'suppose-we-rave-a-bit$', TemplateView.as_view(template_name="suppose-we-rave-a-bit.html"), name='sample-suppose-we-rave-a-bit'),
    url(r'images$', TemplateView.as_view(template_name="images.html"), name='sample-images')
)