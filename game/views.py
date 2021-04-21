from rest_framework import viewsets
from .serializers import ProfileSerializer, TeamSerializer, RoleSerializer, PuzzleSerializer
from .models import Profile, Team, Role, MadLib, Puzzle
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


class PuzzleView(viewsets.ModelViewSet):
    serializer_class = PuzzleSerializer
    queryset = Puzzle.objects.all()


@api_view(['GET'])
def login(request):
    username = request.query_params.get('username')
    password = request.query_params.get('password')
    try:
        res = Profile.objects.get(username=username, password=password)
        return JsonResponse({
            'success': True,
            'loggedIn': True,
            'user': {
                'id': res.id,
                'username': username,
                'team': res.team.name if res.team else None,
                'role': res.role.name if res.role else None
            }
        })
    except Profile.DoesNotExist:
        return JsonResponse({'success': True, 'loggedIn': False})
    except:
        return JsonResponse({'success': False})


@api_view(['POST'])
def post_madlib(request):
    try:
        user_id = request.data.get('userId')
        m = MadLib.objects.get(profile_from=Profile.objects.get(id=user_id))
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
        user_id = request.query_params.get('userId')
        m = MadLib.objects.get(profile_from=Profile.objects.get(id=user_id))
        return JsonResponse({
            'success': True,
            'prompts': m.type_id.prompts,
        })
    except:
        return JsonResponse({'success': False})


@api_view(['GET'])
def get_madlib(request):
    try:
        user_id = request.query_params.get('userId')
        m = MadLib.objects.get(profile_to=Profile.objects.get(id=user_id))

        return JsonResponse({
            'success': True,
            'fields': m.fields,
            'text': m.type_id.text,
        })
    except:
        return JsonResponse({'success': False})


@api_view(['POST'])
def submit_answer(request):
    try:
        user_id = int(request.data.get('userId'))
        puzzle_id = int(request.data.get('puzzleId'))
        answer = request.data.get('answer')
        Puzzle.objects.get(id=puzzle_id, answer=answer)
        t = Profile.objects.get(id=user_id).team
        print(t.name)
        # Set bit to true
        t.puzzles_done = t.puzzles_done | (1 << (puzzle_id - 1))
        t.save()
        return JsonResponse({'success': True, 'correct': True})
    except Profile.DoesNotExist:
        return JsonResponse({'success': True, 'correct': False})
    except:
        return JsonResponse({'success': False})


@api_view(['GET'])
def get_solved(request):
    try:
        user_id = int(request.query_params.get('userId'))
        puzzle_id = int(request.query_params.get('puzzleId'))
        t = Profile.objects.get(id=user_id).team
        return JsonResponse({
            'success': True,
            'solved': t.puzzles_done & (1 << (puzzle_id - 1))
        })
    except:
        return JsonResponse({'success': False})
