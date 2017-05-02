from django.shortcuts import render

# Create your views here.
from rest_framework import permissions, viewsets
from rest_framework.response import Response

from projects.models import Projects,Modules
from projects.permissions import IscreatorOfProjects
from projects.serializers import ProjectSerializer,ModuleSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.order_by('-created_at')
    serializer_class = ProjectSerializer
    print "***************************"

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IscreatorOfProjects(),)

    def perform_create(self, serializer):
        print self.request.user
        print "^^^^^^^^^^^^^^^^^^^^^^"
        instance = serializer.save(creator=self.request.user)

        return super(ProjectsViewSet, self).perform_create(serializer)

class ModulesViewSet(viewsets.ModelViewSet):
    queryset = Modules.objects.order_by('-created_at')
    serializer_class = ModuleSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IscreatorOfProjects(),)

    def perform_create(self, serializer):
        instance = serializer.save(creator=self.request.user)

        return super(ProjectsViewSet, self).perform_create(serializer)



class AccountProjectsViewSet(viewsets.ViewSet):
    queryset = Projects.objects.select_related('creator').all()
    serializer_class = ProjectSerializer
    print "***************************"

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(creator__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)


class ProjectModulesViewSet(viewsets.ViewSet):
    queryset = Modules.objects.select_related('creator').all()
    serializer_class = ModuleSerializer
    print "***************************"

    def list(self, request, account_username=None,project_title=None):
        queryset = self.queryset.filter(project__title=project_title).filter(creator__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
