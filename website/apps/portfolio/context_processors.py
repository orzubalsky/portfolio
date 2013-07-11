from django.conf import settings
from portfolio.models import *

def projects(request):
    projects = Project.objects.filter(is_active=True, parent=None)
    
    return { 'projects' : projects, 'GOOGLE_ANALYTICS_KEY' : settings.GOOGLE_ANALYTICS_KEY }
