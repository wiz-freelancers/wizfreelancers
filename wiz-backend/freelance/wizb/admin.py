from django.contrib import admin
from .models import Service, TeamMember, Project

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'description')

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'order')
    list_editable = ('order',)
    search_fields = ('name', 'position')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed_date')
    search_fields = ('title', 'description', 'technologies')