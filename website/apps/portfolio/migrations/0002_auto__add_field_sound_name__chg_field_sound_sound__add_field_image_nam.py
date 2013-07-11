# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Sound.name'
        db.add_column(u'portfolio_sound', 'name',
                      self.gf('django.db.models.fields.CharField')(max_length=140, null=True, blank=True),
                      keep_default=False)


        # Changing field 'Sound.sound'
        db.alter_column(u'portfolio_sound', 'sound', self.gf('filebrowser.fields.FileBrowseField')(default='', max_length=200))
        # Adding field 'Image.name'
        db.add_column(u'portfolio_image', 'name',
                      self.gf('django.db.models.fields.CharField')(max_length=140, null=True, blank=True),
                      keep_default=False)


        # Changing field 'Image.image'
        db.alter_column(u'portfolio_image', 'image', self.gf('filebrowser.fields.FileBrowseField')(default='', max_length=200))
        # Adding field 'Video.name'
        db.add_column(u'portfolio_video', 'name',
                      self.gf('django.db.models.fields.CharField')(max_length=140, null=True, blank=True),
                      keep_default=False)


        # Changing field 'Video.video'
        db.alter_column(u'portfolio_video', 'video', self.gf('filebrowser.fields.FileBrowseField')(default='', max_length=200))
        # Adding field 'Document.name'
        db.add_column(u'portfolio_document', 'name',
                      self.gf('django.db.models.fields.CharField')(max_length=140, null=True, blank=True),
                      keep_default=False)


        # Changing field 'Document.document'
        db.alter_column(u'portfolio_document', 'document', self.gf('filebrowser.fields.FileBrowseField')(default='', max_length=200))

    def backwards(self, orm):
        # Deleting field 'Sound.name'
        db.delete_column(u'portfolio_sound', 'name')


        # Changing field 'Sound.sound'
        db.alter_column(u'portfolio_sound', 'sound', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True))
        # Deleting field 'Image.name'
        db.delete_column(u'portfolio_image', 'name')


        # Changing field 'Image.image'
        db.alter_column(u'portfolio_image', 'image', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True))
        # Deleting field 'Video.name'
        db.delete_column(u'portfolio_video', 'name')


        # Changing field 'Video.video'
        db.alter_column(u'portfolio_video', 'video', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True))
        # Deleting field 'Document.name'
        db.delete_column(u'portfolio_document', 'name')


        # Changing field 'Document.document'
        db.alter_column(u'portfolio_document', 'document', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True))

    models = {
        u'portfolio.document': {
            'Meta': {'object_name': 'Document'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'document': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.image': {
            'Meta': {'object_name': 'Image'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.project': {
            'Meta': {'ordering': "['position']", 'object_name': 'Project'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'description': ('tinymce.models.HTMLField', [], {}),
            'documents': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Document']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'images': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Image']", 'null': 'True', 'blank': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'position': ('django.db.models.fields.PositiveSmallIntegerField', [], {'default': '0'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '160'}),
            'sounds': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Sound']", 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'videos': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Video']", 'null': 'True', 'blank': 'True'})
        },
        u'portfolio.sound': {
            'Meta': {'object_name': 'Sound'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'sound': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.video': {
            'Meta': {'object_name': 'Video'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'video': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200'})
        }
    }

    complete_apps = ['portfolio']