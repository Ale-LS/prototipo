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

# Create your views here.
