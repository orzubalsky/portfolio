from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.sitemaps import FlatPageSitemap
from portfolio.sitemaps import PostSitemap, ProjectSitemap, StaticViewSitemap
from django.conf import settings
from dajaxice.core import dajaxice_autodiscover, dajaxice_config
from filebrowser.sites import site

admin.autodiscover()
dajaxice_autodiscover()

# administration password reset urls
urlpatterns = patterns('',
    url(r'^admin/filebrowser/', include(site.urls)),
    url(r'^admin/password_reset/$', 'django.contrib.auth.views.password_reset', name='admin_password_reset'),
    url(r'^admin/password_reset/done/$', 'django.contrib.auth.views.password_reset_done', name='password_reset_done'),
    url(r'^reset/(?P<uidb36>[0-9A-Za-z]+)-(?P<token>.+)/$', 'django.contrib.auth.views.password_reset_confirm', name='password_reset_confirm'),
    url(r'^reset/done/$', 'django.contrib.auth.views.password_reset_complete', name='password_reset_complete'),
)

# administration apps
urlpatterns += patterns('',
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)

# Sitemaps
sitemaps = {
    'flatpages' : FlatPageSitemap,
    'static'    : StaticViewSitemap,
    'posts'     : PostSitemap,
    'projects'  : ProjectSitemap
}
urlpatterns += patterns('',
    url(r'^sitemap\.xml$', 'django.contrib.sitemaps.views.sitemap', {'sitemaps': sitemaps}),
)

# tinyMCE editor
urlpatterns += patterns('',
    url(r'^tinymce/', include('tinymce.urls')),
)
    
# dajaxice urls
urlpatterns += patterns('',
    url(dajaxice_config.dajaxice_url, include('dajaxice.urls')),
)

# static files url patterns
urlpatterns += staticfiles_urlpatterns()

# serve static files from media directory when in debug mode
if settings.DEBUG: 
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', { 'document_root': settings.MEDIA_ROOT, }),
   )

urlpatterns += patterns('',
    (r'^page/', include('django.contrib.flatpages.urls')),
)
   
# portfolio app urls
urlpatterns += patterns('',
    url(r'sample/', include('samples.urls')),
    url(r'^', include('portfolio.urls')),
)


