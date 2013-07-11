# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Post'
        db.create_table(u'portfolio_post', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=140)),
            ('content', self.gf('tinymce.models.HTMLField')()),
            ('slug', self.gf('django.db.models.fields.SlugField')(max_length=160)),
        ))
        db.send_create_signal(u'portfolio', ['Post'])

        # Adding M2M table for field images on 'Post'
        m2m_table_name = db.shorten_name(u'portfolio_post_images')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('post', models.ForeignKey(orm[u'portfolio.post'], null=False)),
            ('image', models.ForeignKey(orm[u'portfolio.image'], null=False))
        ))
        db.create_unique(m2m_table_name, ['post_id', 'image_id'])

        # Adding M2M table for field sounds on 'Post'
        m2m_table_name = db.shorten_name(u'portfolio_post_sounds')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('post', models.ForeignKey(orm[u'portfolio.post'], null=False)),
            ('sound', models.ForeignKey(orm[u'portfolio.sound'], null=False))
        ))
        db.create_unique(m2m_table_name, ['post_id', 'sound_id'])

        # Adding M2M table for field videos on 'Post'
        m2m_table_name = db.shorten_name(u'portfolio_post_videos')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('post', models.ForeignKey(orm[u'portfolio.post'], null=False)),
            ('video', models.ForeignKey(orm[u'portfolio.video'], null=False))
        ))
        db.create_unique(m2m_table_name, ['post_id', 'video_id'])

        # Adding M2M table for field documents on 'Post'
        m2m_table_name = db.shorten_name(u'portfolio_post_documents')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('post', models.ForeignKey(orm[u'portfolio.post'], null=False)),
            ('document', models.ForeignKey(orm[u'portfolio.document'], null=False))
        ))
        db.create_unique(m2m_table_name, ['post_id', 'document_id'])

        # Adding M2M table for field projects on 'Post'
        m2m_table_name = db.shorten_name(u'portfolio_post_projects')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('post', models.ForeignKey(orm[u'portfolio.post'], null=False)),
            ('project', models.ForeignKey(orm[u'portfolio.project'], null=False))
        ))
        db.create_unique(m2m_table_name, ['post_id', 'project_id'])

        # Deleting field 'Project.description'
        db.delete_column(u'portfolio_project', 'description')

        # Adding field 'Project.content'
        db.add_column(u'portfolio_project', 'content',
                      self.gf('tinymce.models.HTMLField')(default='a'),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting model 'Post'
        db.delete_table(u'portfolio_post')

        # Removing M2M table for field images on 'Post'
        db.delete_table(db.shorten_name(u'portfolio_post_images'))

        # Removing M2M table for field sounds on 'Post'
        db.delete_table(db.shorten_name(u'portfolio_post_sounds'))

        # Removing M2M table for field videos on 'Post'
        db.delete_table(db.shorten_name(u'portfolio_post_videos'))

        # Removing M2M table for field documents on 'Post'
        db.delete_table(db.shorten_name(u'portfolio_post_documents'))

        # Removing M2M table for field projects on 'Post'
        db.delete_table(db.shorten_name(u'portfolio_post_projects'))

        # Adding field 'Project.description'
        db.add_column(u'portfolio_project', 'description',
                      self.gf('tinymce.models.HTMLField')(default=1),
                      keep_default=False)

        # Deleting field 'Project.content'
        db.delete_column(u'portfolio_project', 'content')


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
        u'portfolio.post': {
            'Meta': {'ordering': "['created']", 'object_name': 'Post'},
            'content': ('tinymce.models.HTMLField', [], {}),
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'documents': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Document']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'images': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Image']", 'null': 'True', 'blank': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'projects': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Project']", 'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '160'}),
            'sounds': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Sound']", 'null': 'True', 'blank': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {}),
            'videos': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['portfolio.Video']", 'null': 'True', 'blank': 'True'})
        },
        u'portfolio.project': {
            'Meta': {'ordering': "['position']", 'object_name': 'Project'},
            'content': ('tinymce.models.HTMLField', [], {}),
            'created': ('django.db.models.fields.DateTimeField', [], {}),
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