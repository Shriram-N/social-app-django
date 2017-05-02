from django.db import models
from authentication.models import Account
from django.utils.timezone import now
from datetime import date, datetime
# Create your models here.
class Projects(models.Model):
    creator = models.ForeignKey(Account)
    title = models.CharField(max_length=40, blank=True)
    description = models.CharField(max_length=40, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0}'.format(self.title)

class Modules(models.Model):
    youtube_link=models.TextField()
    name = models.TextField( default='module1',null=True, blank=True)
    creator = models.ForeignKey(Projects)
    results = models.TextField()
    Filess = models.FileField(upload_to='files/')
    Components = models.FileField(upload_to='Components/')
    process = models.TextField()
    created_at  = models.DateTimeField(default=datetime.now,blank=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)

    def __unicode__(self):
        return '{0}'.format(self.name)
