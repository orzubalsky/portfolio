from django.conf.urls import patterns, url
from django.views.generic import TemplateView

# orzubalskydotcom application
urlpatterns = patterns('',
    url(r'the-future-is-fantastic$', TemplateView.as_view(template_name="the-future-is-fantastic.html"), name='sample-the-future-is-fantastic'),
    url(r'meeting-table$', TemplateView.as_view(template_name="meeting-table.html"), name='sample-meeting-table'),
)