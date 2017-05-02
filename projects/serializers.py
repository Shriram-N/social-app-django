from rest_framework import serializers

from authentication.serializers import AccountSerializer
from projects.models import Projects,Modules


class ProjectSerializer(serializers.ModelSerializer):
    creator = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Projects

        fields = ('id', 'creator', 'title', 'description','created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ProjectSerializer, self).get_validation_exclusions()

        return exclusions + ['creator']

class ModuleSerializer(serializers.ModelSerializer):
    creator = ProjectSerializer(read_only=True, required=False)

    class Meta:
        model = Modules

        fields = ('id', 'results', 'youtube_link','creator', 'Filess','Components','process')
        read_only_fields = ('id')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ModuleSerializer, self).get_validation_exclusions()

        return exclusions + ['creator']
