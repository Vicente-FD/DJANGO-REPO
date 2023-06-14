from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarIndex),
    path('carrito',views.cargarCarrito),
    path('suscripcion',views.cargarSuscripcion),
    path('nosotras',views.cargarNosotras),
    path('terms',views.cargarTerms),
]

