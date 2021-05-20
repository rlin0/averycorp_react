from rest_framework import serializers
from .models import Profile, Team, Puzzle, Inventory, ERState


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'username', 'password', 'first_name', 'last_name',
                  'team', 'role')


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'puzzles_done', 'act')


class PuzzleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puzzle
        fields = ('id', 'name', 'answer', 'link')


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('user', 'matches', 'wrench', 'usb', 'soup', 'knife',
                  'paperclip', 'inkwell')


class ERStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ERState
        fields = ('user', 'closet_unlocked', 'spyroom_unlocked',
                  'lockers_unlocked', 'mechanics_unlocked',
                  'merchant_unlocked', 'electrical_box_unlocked',
                  'hologram_unlocked', 'scanning_unlocked', 'meme_unlocked',
                  'merchant_mc', 'spy_mc', 'mechanic_mc')
