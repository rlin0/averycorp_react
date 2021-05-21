from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework import routers
from game import views

router = routers.DefaultRouter()
router.register(r'profile', views.ProfileView, 'profile')
router.register(r'team', views.TeamView, 'team')
router.register(r'puzzle', views.PuzzleView, 'puzzle')
router.register(r'inventory', views.InventoryView, 'inventory')
router.register(r'erstate', views.ERStateView, 'erstate')

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
    path(r'api/login/', views.login),
    path(r'api/madlib/post', views.post_madlib),
    path(r'api/madlib/get', views.get_madlib),
    path(r'api/puzzle/get_solved', views.get_solved),
    path(r'api/puzzle/submit_answer', views.submit_answer),
    path(r'api/puzzle/submit_crossword', views.submit_crossword),
    path(r'api/er/reset', views.reset),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
