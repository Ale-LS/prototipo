from django.shortcuts import render

def inicio(request):
        return render(request, 'core/inicio.html')

def ingresar(request):
        return render(request, 'core/ingresar.html')

def nosotros(request):
        return render(request, 'core/nosotros.html')

def registro(request):
        return render(request, 'core/registro.html')

def reservar_hora(request):
        return render(request, 'core/reservar_hora.html')

def administrador(request):
        return render(request, 'core/administrador.html')

def gestion_medicos(request):
        return render(request, 'core/gestion_medicos.html')

# Create your views here.
