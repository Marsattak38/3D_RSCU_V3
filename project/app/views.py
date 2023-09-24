from django.shortcuts import render
from .models import Product

def index(request):
    return render(request, 'index.html')

def modelisation(request):
    return render(request, 'modelisation.html')

def printingVolume(request):

    all_volume = Product.objects.all()


    return render(request, 'printing.html', {"all_volume": all_volume} )
