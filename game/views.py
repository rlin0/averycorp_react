from rest_framework import viewsets
from .serializers import ProfileSerializer, TeamSerializer, RoleSerializer
from .models import Profile, Team, Role, MadLib
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.http import JsonResponse


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def perform_update(self, serializer):
        serializer.save()


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
                'id': res.id,
                'username': username,
                'team': res.team.name if res.team else None,
                'role': res.role.name if res.role else None
            }
        })
    except Profile.DoesNotExist:
        return JsonResponse({'success': False})


@api_view(['POST'])
def post_madlib(request):
    try:
        username = request.data.get('username')
        m = MadLib.objects.get(profile_from=Profile.objects.get(
            username=username))
        m.fields = request.data.get('fields')
        m.save()
        return JsonResponse({
            'success': True,
        })
    except:
        return JsonResponse({'success': False})


@api_view(['GET'])
def get_madlib_prompt(request):
    try:
        username = request.query_params.get('username')
        m = MadLib.objects.get(profile_from=Profile.objects.get(
            username=username))
        return JsonResponse({
            'success': True,
            'prompts': m.type_id.prompts,
        })
    except:
        return JsonResponse({'success': False})


@api_view(['GET'])
def get_madlib(request):
    try:
        username = request.query_params.get('username')
        m = MadLib.objects.get(profile_to=Profile.objects.get(
            username=username))

        return JsonResponse({
            'success': True,
            'fields': m.fields,
            'text': m.type_id.text,
        })
    except:
        return JsonResponse({'success': False})
