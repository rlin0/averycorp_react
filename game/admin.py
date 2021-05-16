from django.contrib import admin

from .models import Profile, Team, MadLib, Puzzle, PuzzleSubmission, Inventory, ERState

admin.site.register(Profile)
admin.site.register(Team)
admin.site.register(MadLib)
admin.site.register(Puzzle)
admin.site.register(PuzzleSubmission)
admin.site.register(Inventory)
admin.site.register(ERState)
