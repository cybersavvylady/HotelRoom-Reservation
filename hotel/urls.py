from django.urls import path
from . import views

app_name = "hotel"

urlpatterns = [
    path("", views.home, name="home"),
    path("main", views.page_main, name="page_main"),
    path("page_room1", views.page_room1, name="page_room1"),
    path("page_room2", views.page_room2, name="page_room2"),
    path("page_room3", views.page_room3, name="page_room3"),
    path("page_room4", views.page_room4, name="page_room4"),
    path("page_room5", views.page_room5, name="page_room5"),
    path("page_room6", views.page_room6, name="page_room6"),
    # path('room_list/', views.room_list, name='room_list'),
    # path('room_detail/<int:room_id>/', views.room_detail, name='room_detail'),
    # path('rooms/<int:room_id>/reserve/', views.reservation_form, name='reservation_form')
]
