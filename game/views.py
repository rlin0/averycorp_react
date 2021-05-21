from rest_framework import viewsets
from .serializers import ProfileSerializer, TeamSerializer, PuzzleSerializer, InventorySerializer, ERStateSerializer
from .models import Profile, Team, MadLib, Puzzle, PuzzleSubmission, Inventory, ERState
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.http import JsonResponse
from datetime import timedelta
from django.utils import timezone


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def perform_update(self, serializer):
        serializer.save()


class TeamView(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()


class PuzzleView(viewsets.ModelViewSet):
    serializer_class = PuzzleSerializer
    queryset = Puzzle.objects.all()


class InventoryView(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()


class ERStateView(viewsets.ModelViewSet):
    serializer_class = ERStateSerializer
    queryset = ERState.objects.all()


@api_view(['GET'])
def login(request):
    username = request.query_params.get('username')
    password = request.query_params.get('password')
    print(username, password)
    try:
        res = Profile.objects.get(username=username, password=password)
        return JsonResponse({
            'success': True,
            'loggedIn': True,
            'user': {
                'id': res.id,
                'username': username,
                'teamId': res.team.id if res.team else None,
                'teamName': res.team.name if res.team else None,
                'role': res.role
            }
        })
    except Profile.DoesNotExist:
        return JsonResponse({'success': True, 'loggedIn': False})
    except Exception as e:
        print(e)
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
def get_madlib(request):
    try:
        user_id = request.query_params.get('userId')
        m = MadLib.objects.get(profile_to=Profile.objects.get(id=user_id))

        return JsonResponse({
            'success': True,
            'fields': m.fields,
        })
    except Exception as e:
        print(e)
        return JsonResponse({'success': False})


@api_view(['POST'])
def submit_answer(request):
    try:
        team_id = int(request.data.get('teamId'))
        puzzle_id = int(request.data.get('puzzleId'))
        answer = request.data.get('answer').lower()
        t = Team.objects.get(id=team_id)
        p, created = PuzzleSubmission.objects.get_or_create(
            puzzle=Puzzle.objects.get(id=puzzle_id),
            team=Team.objects.get(id=t.id))
        # TODO: set period limit
        if not created and timezone.now() - p.ts < timedelta(minutes=1):
            return JsonResponse({'success': True, 'msg': 'later'})
        p.save()
        if Puzzle.objects.filter(id=puzzle_id, answer=answer).exists():
            # Set bit to true
            t.puzzles_done = t.puzzles_done | (1 << (puzzle_id - 1))
            t.save()
            return JsonResponse({'success': True, 'msg': 'correct'})
        else:
            return JsonResponse({'success': True, 'msg': 'incorrect'})
    except Exception as e:
        print(e)
        return JsonResponse({'success': False})


@api_view(['POST'])
def submit_crossword(request):
    try:
        team_id = int(request.data.get('teamId'))
        puzzle_id = 3
        t = Team.objects.get(id=team_id)
        p, created = PuzzleSubmission.objects.get_or_create(
            puzzle=Puzzle.objects.get(id=puzzle_id),
            team=Team.objects.get(id=t.id))
        # TODO: set period limit
        if not created and timezone.now() - p.ts < timedelta(minutes=1):
            return JsonResponse({'success': True, 'msg': 'later'})
        p.save()
        t.puzzles_done = t.puzzles_done | (1 << (puzzle_id - 1))
        t.save()
        return JsonResponse({'success': True, 'msg': 'correct'})
    except Exception as e:
        print(e)
        return JsonResponse({'success': False})


@api_view(['GET'])
def get_solved(request):
    try:
        team_id = int(request.query_params.get('teamId'))
        puzzle_id = int(request.query_params.get('puzzleId'))
        t = Team.objects.get(id=team_id)
        return JsonResponse({
            'success': True,
            'solved': t.puzzles_done & (1 << (puzzle_id - 1))
        })
    except:
        return JsonResponse({'success': False})


######################## Escape Room API's ################################
@api_view(['POST'])
def reset(request):
    try:
        user_id = int(request.data.get('userId'))
        e = ERState.objects.get(user__id=user_id)
        e.closet_unlocked = False
        e.spyroom_unlocked = False
        e.lockers_unlocked = False
        e.mechanics_unlocked = False
        e.electrical_box_unlocked = False
        e.hologram_unlocked = False
        e.scanning_unlocked = False
        e.merchant_mc = 0
        e.spy_mc = 0
        e.mechanic_mc = 0
        e.save()
        i = Inventory.objects.get(user__id=user_id)
        i.matches = False
        i.wrench = False
        i.usb = False
        i.soup = False
        i.knife = False
        i.paperclip = False
        i.inkwell = False
        i.save()
        return JsonResponse({
            'success': True,
        })
    except:
        return JsonResponse({'success': False})
