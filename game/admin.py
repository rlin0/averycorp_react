from django.contrib import admin

from .models import Profile, Team, Role, MadLib, MadLibTypes, Puzzle, PuzzleSubmission

admin.site.register(Profile)
admin.site.register(Team)
admin.site.register(Role)
admin.site.register(MadLib)
admin.site.register(MadLibTypes)
admin.site.register(Puzzle)
admin.site.register(PuzzleSubmission)
