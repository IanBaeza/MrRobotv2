from django.contrib import admin
from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name='index'),
    path('login/', views.login,name='login'),
    path('logout/', views.logout,name='logout'),
    path('inicio/',views.inicio,name='inicio'),
    path('galeria/',views.galeria,name='galeria'),
    path('pc/',views.pc,name='pc'),
    path('registro/',views.register,name='registro'),
    
]