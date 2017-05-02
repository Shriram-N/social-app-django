from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import BaseUserManager


class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError('Users must have a valid email address.')

        if not kwargs.get('username'):
            raise ValueError('Users must have a valid username.')
        #Since we haven't defined a model attribute on the AccountManager class,
        # self.model refers to the model attribute of BaseUserManager. This defaults to settings.AUTH_USER_MODEL
        account = self.model(
            email=self.normalize_email(email), username=kwargs.get('username')
        )

        account.set_password(password)
        account.save()

        return account

    def create_superuser(self, email, password, **kwargs):
        account = self.create_user(email, password, **kwargs)

        account.is_admin = True
        account.save()

        return account


class Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=40, unique=True)

    first_name = models.CharField(max_length=40, blank=True)
    last_name = models.CharField(max_length=40, blank=True)
    tagline = models.CharField(max_length=140, blank=True)

    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    #The objects attribute here is a Manager class whose name typically follows the <model name>Manager
    objects = AccountManager()

    USERNAME_FIELD = 'email'
    # having a username is not optional
    REQUIRED_FIELDS = ['username']

    def __unicode__(self):
        return self.email
        #get_full_name() and get_short_name() are Django conventions. We won't be using either of these methods
        #, but it is still a good idea to include them to comply with Django conventions.
    def get_full_name(self):
        return ' '.join([self.first_name, self.last_name])

    def get_short_name(self):
        return self.first_name
