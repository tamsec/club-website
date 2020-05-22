from django.shortcuts import render

def index(request):
  return render(request, 'pages/index.html')

def about(request):
  return render(request, 'pages/about.html')

def calendar(request):
  return render(request, 'pages/calendar.html')

def events(request):
  return render(request, 'pages/events.html')