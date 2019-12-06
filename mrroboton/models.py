from django.db import models
from django.urls import reverse
import uuid

# Create your models here.

class Computador(models.Model):
    Gabinete=models.CharField(max_length=100)
    Fuente=models.CharField(max_length=100)
    PlacaMadre=models.CharField(max_length=100)
    Ram=models.CharField(max_length=100)
    Procesador=models.CharField(max_length=100)
    TarjetaVideo=models.CharField(max_length=100)
    Almacenamiento=models.CharField(max_length=100)

    def __str__(self):
    	return self.Gabinete