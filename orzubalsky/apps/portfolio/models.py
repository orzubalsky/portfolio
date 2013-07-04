from django.conf import settings
from django.db.models import *
from django.utils import timezone
from django.contrib.flatpages.models import FlatPage
from django.core.urlresolvers import reverse
from tinymce.models import HTMLField
from filebrowser.fields import FileBrowseField
import pytz, os



class Base(Model):
    """ Base model for all of the models in the application.
    """
    class Meta:
        abstract = True
    
    # Translators:  Used wherever a created time stamp is needed.                   
    created     = DateTimeField(editable=False)
    
    # Translators: Used wherever an update time stamp is needed.
    updated     = DateTimeField(editable=False)
    
    # Translators: Used to determine whether something is active in the front end or not.
    is_active   = BooleanField(default=False)
    
    def save(self, *args, **kwargs):
        """ Save timezone-aware values for created and updated fields.
        """
        if self.pk is None:
            self.created = timezone.now()
        self.updated = timezone.now()
        super(Base, self).save(*args, **kwargs)
        
    def __unicode__ (self):
        if hasattr(self, "name") and self.name:
            return self.name
        else:
            return "%s" % (type(self))


class Image(Base):
    name  = CharField(max_length=140, null=True, blank=True)
    image = FileBrowseField("Image", max_length=200, directory="images/")
    

class Document(Base):
    name  = CharField(max_length=140, null=True, blank=True)    
    document = FileBrowseField("PDF", max_length=200, directory="documents/")


class Sound(Base):
    name  = CharField(max_length=140, null=True, blank=True)    
    sound = FileBrowseField("Audio", max_length=200, directory="sounds/")


class Video(Base):
    name  = CharField(max_length=140, null=True, blank=True)    
    video = FileBrowseField("Video", max_length=200, directory="video/")


class Vimeo(Base):
    name     = CharField(max_length=140, null=True, blank=True)
    embed    = TextField()


class Content(Base):
    """
    """
    class Meta:
        abstract = True
      
    name        = CharField(max_length=140)
    content     = HTMLField(null=True, blank=True)
    slug        = SlugField(max_length=160)
    images      = ManyToManyField(Image, blank=True, null=True)
    sounds      = ManyToManyField(Sound, blank=True, null=True)
    videos      = ManyToManyField(Video, blank=True, null=True)
    vimeos      = ManyToManyField(Vimeo, blank=True, null=True)
    documents   = ManyToManyField(Document, blank=True, null=True)       


class Project(Content):
    """
    """
    class Meta:
        ordering = ['position',]

    position     = PositiveSmallIntegerField(default=0)
    year         = DateField()
    project_time = CharField(max_length=140, blank=True, null=True) 
    medium       = CharField(max_length=255, blank=True, null=True)
    credits      = HTMLField(blank=True, null=True)
    parent       = ForeignKey('self', null=True, blank=True)


class Post(Content):
    """
    """
    class Meta:
        ordering = ['created',]
    
    projects    = ManyToManyField(Project, blank=True, null=True)
    source_link = URLField(blank=True, null=True)


# signals are separated to signals.py 
# just for the sake of organization
import signals