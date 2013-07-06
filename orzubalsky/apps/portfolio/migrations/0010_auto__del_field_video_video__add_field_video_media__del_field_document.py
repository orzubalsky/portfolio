# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting field 'Video.video'
        db.delete_column(u'portfolio_video', 'video')

        # Adding field 'Video.media'
        db.add_column(u'portfolio_video', 'media',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Document.document'
        db.delete_column(u'portfolio_document', 'document')

        # Adding field 'Document.media'
        db.add_column(u'portfolio_document', 'media',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Vimeo.embed'
        db.delete_column(u'portfolio_vimeo', 'embed')

        # Adding field 'Vimeo.media'
        db.add_column(u'portfolio_vimeo', 'media',
                      self.gf('django.db.models.fields.TextField')(default=u'uploads/1'),
                      keep_default=False)

        # Deleting field 'Sound.sound'
        db.delete_column(u'portfolio_sound', 'sound')

        # Adding field 'Sound.media'
        db.add_column(u'portfolio_sound', 'media',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Image.image'
        db.delete_column(u'portfolio_image', 'image')

        # Adding field 'Image.media'
        db.add_column(u'portfolio_image', 'media',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)


    def backwards(self, orm):
        # Adding field 'Video.video'
        db.add_column(u'portfolio_video', 'video',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Video.media'
        db.delete_column(u'portfolio_video', 'media')

        # Adding field 'Document.document'
        db.add_column(u'portfolio_document', 'document',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Document.media'
        db.delete_column(u'portfolio_document', 'media')

        # Adding field 'Vimeo.embed'
        db.add_column(u'portfolio_vimeo', 'embed',
                      self.gf('django.db.models.fields.TextField')(default=u'uploads/1'),
                      keep_default=False)

        # Deleting field 'Vimeo.media'
        db.delete_column(u'portfolio_vimeo', 'media')

        # Adding field 'Sound.sound'
        db.add_column(u'portfolio_sound', 'sound',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Sound.media'
        db.delete_column(u'portfolio_sound', 'media')

        # Adding field 'Image.image'
        db.add_column(u'portfolio_image', 'image',
                      self.gf('filebrowser.fields.FileBrowseField')(default=u'uploads/1', max_length=200),
                      keep_default=False)

        # Deleting field 'Image.media'
        db.delete_column(u'portfolio_image', 'media')


    models = {
        u'portfolio.document': {
            'Meta': {'object_name': 'Document'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'media': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.image': {
            'Meta': {'object_name': 'Image'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'media': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.post': {
            'Meta': {'ordering': "['created']", 'object_name': 'Post'},
            'content': ('tinymce.models.HTMLField', [], {'null': 'True', 'blank': 'True'}),
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'documents': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Document']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'images': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Image']", 'null': 'True', 'blank': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_displayed': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'projects': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Project']", 'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '160'}),
            'sounds': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Sound']", 'null': 'True', 'blank': 'True'}),
            'source_link': ('django.db.models.fields.URLField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'videos': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Video']", 'null': 'True', 'blank': 'True'}),
            'vimeos': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Vimeo']", 'null': 'True', 'blank': 'True'})
        },
        u'portfolio.project': {
            'Meta': {'ordering': "['position']", 'object_name': 'Project'},
            'content': ('tinymce.models.HTMLField', [], {'null': 'True', 'blank': 'True'}),
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'credits': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'documents': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Document']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'images': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Image']", 'null': 'True', 'blank': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_displayed': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'medium': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'parent': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['portfolio.Project']", 'null': 'True', 'blank': 'True'}),
            'position': ('django.db.models.fields.PositiveSmallIntegerField', [], {'default': '0'}),
            'project_link': ('django.db.models.fields.URLField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'project_time': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '160'}),
            'sounds': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Sound']", 'null': 'True', 'blank': 'True'}),
            'source_link': ('django.db.models.fields.URLField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'videos': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Video']", 'null': 'True', 'blank': 'True'}),
            'vimeos': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Vimeo']", 'null': 'True', 'blank': 'True'}),
            'year': ('django.db.models.fields.DateField', [], {})
        },
        u'portfolio.sound': {
            'Meta': {'object_name': 'Sound'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'media': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.video': {
            'Meta': {'object_name': 'Video'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'media': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.vimeo': {
            'Meta': {'object_name': 'Vimeo'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'media': ('django.db.models.fields.TextField', [], {}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        }
    }

    complete_apps = ['portfolio']