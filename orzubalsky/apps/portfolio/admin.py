from django.conf import settings
from django.utils.safestring import mark_safe
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.utils.safestring import mark_safe
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
    fieldsets = (
        ('Info', {
            'fields': ('name', 'parent', 'content', 'slug', 'year', 'project_time', 'medium', 'credits', 'is_active')
        }),
        ('Media', {
            'fields': ('images', 'sounds', 'videos', 'vimeos', 'documents')
        }),
    )
    list_display        = ('name', 'parent', 'is_active') 
    list_editable       = ('is_active',)
    prepopulated_fields = {'slug': ('name',)}


class PostAdmin(BaseAdmin):
    """
    """
    list_display = ('name', 'created')
    fieldsets    = (
        ('Info', {
            'fields': ('name', 'content', 'slug', 'source_link', 'projects', 'is_active')
        }),
        ('Media', {
            'fields': ('images', 'sounds', 'videos', 'vimeos', 'documents')
        }),
    )
    prepopulated_fields = {'slug': ('name',)}
             


# register admin models
admin.site.register(Image)
admin.site.register(Sound)
admin.site.register(Document)
admin.site.register(Video)
admin.site.register(Vimeo)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Post, PostAdmin)