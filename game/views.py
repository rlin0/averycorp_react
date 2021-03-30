from rest_framework import viewsets
from .serializers import ProfileSerializer, TeamSerializer, RoleSerializer
from .models import Profile, Team, Role
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.http import JsonResponse


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class TeamView(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()


class RoleView(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()


@api_view(['GET'])
def login(request):
    username = request.query_params.get('username')
    password = request.query_params.get('password')
    try:
        res = Profile.objects.get(username=username, password=password)
        return JsonResponse({
            'success': True,
            'user': {
                'username': username,
                'team': res.team.name if res.team else None,
                'role': res.role.name if res.role else None
            }
        })
    except Profile.DoesNotExist:
        return JsonResponse({'success': False})
