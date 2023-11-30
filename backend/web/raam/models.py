from django.db import models
from django.contrib.auth.models import User

class ResponseModel(models.Model):
    MODEL_CHOICES = [
        ('gpt35t', 'GPT-3.5 Turbo'),
        ('gpt4', 'GPT-4'),
        ('gpt4t', 'GPT-4 Turbo'),
        ('llama2', 'LLAMA 2'),
        ('phi15', 'PHI-1.5')
    ]

    model_name = models.CharField(max_length=100)
    base_model = models.CharField(max_length=100, choices=MODEL_CHOICES)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='response_models', null=True)
    file_id = models.CharField(max_length=200, null=True, blank=True)
    fine_tune_id = models.CharField(max_length=200, null=True, blank=True)
    fine_tuned_model = models.CharField(max_length=200, null=True, blank=True)
    status = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return self.model_name

class TrainingData(models.Model):
    fine_tuned_model = models.ForeignKey(ResponseModel, on_delete=models.CASCADE, related_name='training_data')
    prompt = models.TextField()
    completion = models.TextField()
    is_fine_tuned = models.BooleanField(default=False)
    will_be_fine_tuned = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='training_datas', null=True)
    
    def __str__(self):
        return f"{self.fine_tuned_model.model_name}의 훈련 데이터"

