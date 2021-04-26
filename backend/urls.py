from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework import routers
from game import views

router = routers.DefaultRouter()
router.register(r'profile', views.ProfileView, 'profile')
router.register(r'team', views.TeamView, 'team')
router.register(r'role', views.RoleView, 'role')
router.register(r'puzzle', views.PuzzleView, 'puzzle')

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
    path(r'api/login/', views.login),
    path(r'api/madlib/post', views.post_madlib),
    path(r'api/madlib/get_prompt', views.get_madlib_prompt),
    path(r'api/madlib/get', views.get_madlib),
    path(r'api/puzzle/get_solved', views.get_solved),
    path(r'api/puzzle/submit_answer', views.submit_answer),
    path(r'api/er/me_unlock_closet', views.mechanics_unlock_closet),
    path(r'api/er/me_get_unlocked', views.mechanics_get_unlocked),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
