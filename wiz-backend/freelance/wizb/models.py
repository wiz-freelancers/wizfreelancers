from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='service', null=True, blank=True)
    icon = models.CharField(max_length=50, help_text="FontAwesome icon class (e.g., 'fa-code')", blank=True)
    icon_image = models.ImageField(upload_to='service/icons', blank=True, help_text="Optional icon image if not using FontAwesome")
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.IntegerField(default=0, help_text="Display order on the website")

    class Meta:
        ordering = ['order']
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

    def __str__(self):
        return self.title

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='team')
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    email = models.EmailField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    url = models.URLField(blank=True)
    completed_date = models.DateField()
    technologies = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title