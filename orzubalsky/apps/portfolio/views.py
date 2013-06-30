from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from django.template.loader import render_to_string
from django.http import HttpResponseRedirect, HttpResponse, Http404, HttpResponse, HttpResponsePermanentRedirect
from django.core.urlresolvers import reverse
from django.utils import simplejson as json
from django.contrib.flatpages.views import render_flatpage
from django.utils.translation import ugettext_lazy as _
from django.db import IntegrityError
from portfolio.utils import unique_slugify
from portfolio.models import *
from portfolio.forms import *


def news_list(request):
    """
    """
    posts = Post.objects.filter(is_active=True)
    
    return render_to_response('news_list.html',{
            'posts'    : posts,
        }, context_instance=RequestContext(request))


def news_view(request, post_slug=None):
    """
    """
    post = get_object_or_404(Post, slug=post_slug)

    return render_to_response('news_view.html',{
            'post'     : post,
        }, context_instance=RequestContext(request))


def project_view(request, project_slug=None):
    """
    """
    project  = get_object_or_404(Project, slug=project_slug)
    
    return render_to_response('project_view.html',{
            'project' : project,
        }, context_instance=RequestContext(request))    