# Converts python code into JSON

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Climb, Session


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class ClimbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Climb
        fields = [
           "lead", "sent", "rests", "grade", "style", 'project_send_attempt', 'comments']
        extra_kwargs = {"climber": {"read_only": True}}

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = [
           "created_at", "type", "comments",]
        extra_kwargs = {"climber": {"read_only": True}}        