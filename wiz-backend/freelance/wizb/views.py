import logging
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import ValidationError
from .models import Service, TeamMember, Project
from .serializers import ServiceSerializer, TeamMemberSerializer, ProjectSerializer

# Initialize logger
logger = logging.getLogger(__name__)

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by('order')
    serializer_class = ServiceSerializer
    
    def get_permissions(self):
        """
        Grant different permissions based on action type.
        """
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('order')
    serializer_class = TeamMemberSerializer
    
    def get_permissions(self):
        """
        Grant different permissions based on action type.
        """
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        """
        Create a new team member with error handling and logging.
        """
        try:
            # Validate incoming data
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)

            # Save the team member to the database
            self.perform_create(serializer)
            
            # Get success headers and return a successful response
            headers = self.get_success_headers(serializer.data)
            return Response(
                serializer.data, 
                status=status.HTTP_201_CREATED, 
                headers=headers
            )
        except ValidationError as e:
            # Log validation error and return response with the error details
            logger.error(f"Validation error: {str(e)}")
            return Response(
                {'detail': str(e)}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            # Log the general error and return response with a generic error message
            logger.error(f"Error creating team member: {e}")
            return Response(
                {'detail': 'Something went wrong. Please try again later.'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        """
        Allow all users to view the project list, but require authentication for retrieving project details.
        """
        if self.action == 'list':
            return [AllowAny()]
        return [IsAuthenticated()]
