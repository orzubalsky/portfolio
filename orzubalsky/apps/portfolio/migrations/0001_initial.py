# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Image'
        db.create_table(u'portfolio_image', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('image', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True, blank=True)),
        ))
        db.send_create_signal(u'portfolio', ['Image'])

        # Adding model 'Document'
        db.create_table(u'portfolio_document', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('document', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True, blank=True)),
        ))
        db.send_create_signal(u'portfolio', ['Document'])

        # Adding model 'Sound'
        db.create_table(u'portfolio_sound', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('sound', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True, blank=True)),
        ))
        db.send_create_signal(u'portfolio', ['Sound'])

        # Adding model 'Video'
        db.create_table(u'portfolio_video', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('video', self.gf('filebrowser.fields.FileBrowseField')(max_length=200, null=True, blank=True)),
        ))
        db.send_create_signal(u'portfolio', ['Video'])

        # Adding model 'Project'
        db.create_table(u'portfolio_project', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=140)),
            ('slug', self.gf('django.db.models.fields.SlugField')(max_length=160)),
            ('description', self.gf('tinymce.models.HTMLField')()),
            ('position', self.gf('django.db.models.fields.PositiveSmallIntegerField')(default=0)),
        ))
        db.send_create_signal(u'portfolio', ['Project'])

        # Adding M2M table for field images on 'Project'
        m2m_table_name = db.shorten_name(u'portfolio_project_images')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('project', models.ForeignKey(orm[u'portfolio.project'], null=False)),
            ('image', models.ForeignKey(orm[u'portfolio.image'], null=False))
        ))
        db.create_unique(m2m_table_name, ['project_id', 'image_id'])

        # Adding M2M table for field sounds on 'Project'
        m2m_table_name = db.shorten_name(u'portfolio_project_sounds')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('project', models.ForeignKey(orm[u'portfolio.project'], null=False)),
            ('sound', models.ForeignKey(orm[u'portfolio.sound'], null=False))
        ))
        db.create_unique(m2m_table_name, ['project_id', 'sound_id'])

        # Adding M2M table for field documents on 'Project'
        m2m_table_name = db.shorten_name(u'portfolio_project_documents')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('project', models.ForeignKey(orm[u'portfolio.project'], null=False)),
            ('document', models.ForeignKey(orm[u'portfolio.document'], null=False))
        ))
        db.create_unique(m2m_table_name, ['project_id', 'document_id'])

        # Adding M2M table for field videos on 'Project'
        m2m_table_name = db.shorten_name(u'portfolio_project_videos')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('project', models.ForeignKey(orm[u'portfolio.project'], null=False)),
            ('video', models.ForeignKey(orm[u'portfolio.video'], null=False))
        ))
        db.create_unique(m2m_table_name, ['project_id', 'video_id'])


    def backwards(self, orm):
        # Deleting model 'Image'
        db.delete_table(u'portfolio_image')

        # Deleting model 'Document'
        db.delete_table(u'portfolio_document')

        # Deleting model 'Sound'
        db.delete_table(u'portfolio_sound')

        # Deleting model 'Video'
        db.delete_table(u'portfolio_video')

        # Deleting model 'Project'
        db.delete_table(u'portfolio_project')

        # Removing M2M table for field images on 'Project'
        db.delete_table(db.shorten_name(u'portfolio_project_images'))

        # Removing M2M table for field sounds on 'Project'
        db.delete_table(db.shorten_name(u'portfolio_project_sounds'))

        # Removing M2M table for field documents on 'Project'
        db.delete_table(db.shorten_name(u'portfolio_project_documents'))

        # Removing M2M table for field videos on 'Project'
        db.delete_table(db.shorten_name(u'portfolio_project_videos'))


    models = {
        u'portfolio.document': {
            'Meta': {'object_name': 'Document'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'document': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.image': {
            'Meta': {'object_name': 'Image'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.project': {
            'Meta': {'ordering': "['position']", 'object_name': 'Project'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'description': ('tinymce.models.HTMLField', [], {}),
            'documents': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['portfolio.Document']", 'symmetrical': 'False'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'images': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['portfolio.Image']", 'symmetrical': 'False'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'position': ('django.db.models.fields.PositiveSmallIntegerField', [], {'default': '0'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '160'}),
            'sounds': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['portfolio.Sound']", 'symmetrical': 'False'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'videos': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['portfolio.Video']", 'symmetrical': 'False'})
        },
        u'portfolio.sound': {
            'Meta': {'object_name': 'Sound'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'sound': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'portfolio.video': {
            'Meta': {'object_name': 'Video'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'video': ('filebrowser.fields.FileBrowseField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['portfolio']