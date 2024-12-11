from django.shortcuts import render
from django.http import HttpResponse
from .models import Item

def home(request):
    return render(request, 'sites/main.html')

def menu_view(request):
    items = Item.objects.all()
    return render(request, 'sites/menu.html', {'items': items})