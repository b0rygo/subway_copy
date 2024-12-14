from django.shortcuts import render
from django.http import HttpResponse
from .models import Item

def home(request):
    return render(request, 'sites/main.html')


def menu_view(request):
    selected_category = request.GET.get('category', 'Wszystkie')

    category_map = {
        'Wszystkie': None,
        'Przekąski i napoje': '1',
        'Sałatki': '2',
        'Wrapy': '3',
        'Śniadanie': '4',
        'Suby': '5',
        'Veggie': '6',
    }

    if category_map[selected_category] is None:
        items = Item.objects.all()
    else:
        items = Item.objects.filter(specify=category_map[selected_category])

    return render(request, 'sites/menu.html', {
        'items': items,
        'selected_category': selected_category,
    })