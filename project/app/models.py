from django.db import models



class Product(models.Model):


    name = models.CharField(max_length=256, default="unknown")
    volume = models.IntegerField(default = "0") #en mm^3
    description = models.TextField(default="unknown")
    filament = models.CharField(max_length = 256, default = "unknow")
    prix = models.TextField(default = "#")


    def __str__(self):
        return self.name
