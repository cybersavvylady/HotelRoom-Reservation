from django.shortcuts import render

from .models import Room, Reservation

# Create your views here.
def page_main(request):
    return render(request, 'page_main.html')

def home(request):
    return render(request, 'index.html')

def page_room1(request):
    return render(request, 'page_room1.html')

def page_room2(request):
    return render(request, 'page_room2.html')

def page_room3(request):
    return render(request, 'page_room3.html')

def page_room4(request):
    return render(request, 'page_room4.html')

def page_room5(request):
    return render(request, 'page_room5.html')

def page_room6(request):
    return render(request, 'page_room6.html')


def room_list(request):
    rooms = Room.objects.all()
    return render(request, 'room_list.html', {'rooms': rooms})

def room_detail(request, room_id):
    room = Room.objects.get(id=room_id)
    return render(request, 'room_detail.html', {'room': room})

def reservation_form(request, room_id):
    room = Room.objects.get(id=room_id)
    return render(request, 'reservation_form.html', {'room': room})
