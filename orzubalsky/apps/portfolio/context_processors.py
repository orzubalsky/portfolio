from portfolio.models import *

def projects(request):
    projects = Project.objects.filter(is_active=True)
    return { 'projects' : projects, }
