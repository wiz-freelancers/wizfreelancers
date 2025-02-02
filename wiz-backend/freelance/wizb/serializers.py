from rest_framework import serializers
from .models import Service, TeamMember, Project

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'image', 'icon', 'order', 'created_at']
        read_only_fields = ['created_at']

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'bio', 'image', 'linkedin_url', 'github_url', 'email', 'order']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'