from django.shortcuts import render

def index(request):
  return render(request, 'pages/index.html')

def about(request):
  return render(request, 'pages/about.html')

def calendar(request):
  return render(request, 'pages/calendar.html')

def events(request):
  return render(request, 'pages/events.html')

def wicys(request):
  return render(request, 'pages/wicys.html')

def redhat(request):
  return render(request, 'pages/redhat-academy.html')

def login(request):
  return render(request, 'pages/login.html')