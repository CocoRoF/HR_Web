from django.db import models
from django.contrib.auth.models import User

class BasicResponseModel(models.Model):
    MODEL_CHOICES = [
        ('gpt-4-1106-preview', 'OepnAI: GPT-4 turbo'),
        ('gpt-4', 'OepnAI: GPT-4'),
        ('gpt-3.5-turbo-1106', 'OepnAI: GPT-3.5 turbo extended'),
        ('gpt-3.5-turbo', 'OepnAI: GPT-3.5 turbo'),
        # ('palm2', 'Google: PaLM2'),
        # ('phi15', 'Microsoft: PHI-1.5'),
    ]

    model = models.CharField(max_length=100, choices=MODEL_CHOICES)
    inputText = models.CharField(max_length=500)
    
    def __str__(self):
        return self.model