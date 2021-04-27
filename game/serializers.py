from rest_framework import serializers
from .models import Profile, Team, Role, Puzzle


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'username', 'password', 'first_name', 'last_name',
                  'team', 'role', 'progress')


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'puzzles_done')


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('id', 'name')


class PuzzleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puzzle
        fields = ('id', 'name', 'link', 'answer')


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Puzzle
        fields = ('id', 'user', 'matches', 'wrench', 'usb', 'soup', 'knife',
                  'paperclip', 'inkwell')
