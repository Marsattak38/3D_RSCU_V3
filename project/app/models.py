from django.db import models

# Create your models here.
class Plan(models.Model):
    nom = models.CharField(max_length=255)
    fichier = models.FileField(upload_to='project/media')

class Print(models.Model):
    nom = models.CharField(max_length=255)
    fichier = models.FileField(upload_to='project/media')