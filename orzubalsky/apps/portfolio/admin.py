from django.conf import settings
from django.utils.safestring import mark_safe
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.utils.safestring import mark_safe
from django.forms.widgets import Textarea
from django.contrib import admin
from filebrowser.widgets import FileInput
from portfolio.models import *


class BaseAdmin(admin.ModelAdmin):
    """
    """
    pass


class ProjectAdmin(BaseAdmin):
    """
    """
    class Media:
        js = [
                settings.STATIC_URL + 'tiny_mce/tiny_mce.js', 
                settings.STATIC_URL + 'js/tinyMCE_admin.js',
              ]
        widgets = {
                'credits': Textarea,
                }              
            
    fieldsets = (
        ('Info', {
            'fields': ('name', 'parent', 'content', 'slug', 'year', 'project_time', 'project_link', 'source_link', 'medium', 'credits', 'position', 'is_displayed', 'is_active')
        }),
        ('Media', {
            'fields': ('images', 'sounds', 'videos', 'vimeos', 'documents')
        }),
    )
    list_display        = ('name', 'parent', 'position', 'is_active') 
    list_editable       = ('position', 'is_active',)
    prepopulated_fields = {'slug': ('name',)}


class PostAdmin(BaseAdmin):
    """
    """
    class Media:
        js = [
                settings.STATIC_URL + 'tiny_mce/tiny_mce.js', 
                settings.STATIC_URL + 'js/tinyMCE_admin.js',
              ]
                  
    fieldsets    = (
        ('Info', {
            'fields': ('name', 'content', 'slug', 'source_link', 'projects', 'created', 'is_active')
        }),
        ('Media', {
            'fields': ('images', 'sounds', 'videos', 'vimeos', 'documents')
        }),
    )
    list_display        = ('name', 'created', 'is_active') 
    list_editable       = ('created', 'is_active',)    
    prepopulated_fields = {'slug': ('name',)}
             


# register admin models
admin.site.register(Image)
admin.site.register(Sound)
admin.site.register(Document)
admin.site.register(Video)
admin.site.register(Vimeo)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Post, PostAdmin)