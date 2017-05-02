from rest_framework import permissions
from projects.models import Projects,Modules


class IscreatorOfProjects(permissions.BasePermission):
    def has_object_permission(self, request, view, post):
        if request.user:
            print "Inside permisssssion>>>>>>>>>>>>>."
            return Projects.creator == request.user
        return False
