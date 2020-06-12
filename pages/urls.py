from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('about', views.about, name='about'),
  path('calendar', views.calendar, name='calendar'),
  path('events', views.events, name='events'),
  path('wicys', views.wicys, name='wicys'),
  path('redhat', views.redhat, name='redhat'),
  path('login', views.login, name='login'),
]