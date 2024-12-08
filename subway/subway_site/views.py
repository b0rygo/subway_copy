from django.shortcuts import render
from django.http import HttpResponse

def items(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def home(request):
    return render(request, 'sites/main.html')