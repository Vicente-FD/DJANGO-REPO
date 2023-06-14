from django.shortcuts import render

# Create your views here.

def cargarIndex(request):
    return render(request, "index.html")

def cargarCarrito(request):
    return render(request, "carrito.html")

def cargarSuscripcion(request):
    return render(request, "suscripcion.html")

def cargarNosotras(request):
    return render(request, "nosotras.html")

def cargarTerms(request):
    return render(request, "terms.html")

