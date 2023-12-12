from django.contrib import admin
from .models import BasicResponseModel

@admin.register(BasicResponseModel)
class BasicResponseModelAdmin(admin.ModelAdmin):
    list_display = (['model', 'inputText'])
    search_fields = (['model'])

