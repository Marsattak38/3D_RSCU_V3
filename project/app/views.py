from django.shortcuts import render
from .models import Plan, Print


# Create your views here.
def index(request):
    return render(request, 'app/index.html')

def modelisation(request):
    if request.method == 'POST':
        nom = request.POST['nom']
        fichier = request.FILES['fichier']
        nouveau_fichier = Plan(nom=nom, fichier=fichier)
        nouveau_fichier.save()
        return render(request, 'app/success.html')
    return render(request, 'app/modelisation.html')

def printing(request):
    if request.method == 'POST':
        nom = request.POST['nom']
        fichier = request.FILES['fichier']
        nouveau_fichier = Print(nom=nom, fichier=fichier)
        nouveau_fichier.save()
        return render(request, 'app/success.html')
    return render(request, 'app/printing.html')



