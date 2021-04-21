from django.contrib import admin

from .models import Profile, Team, Role, MadLib, MadLibTypes

admin.site.register(Profile)
admin.site.register(Team)
admin.site.register(Role)
admin.site.register(MadLib)
admin.site.register(MadLibTypes)
