from rest_framework import serializers
from .models import BasicResponseModel

class BasicResponseModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicResponseModel
        fields = ['model', 'inputText']

