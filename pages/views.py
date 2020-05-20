from django.shortcuts import render

def index(request):
  return render(request, 'pages/index.html')

def about(request):
  return render(request, 'pages/about.html')

def calander(request):
  return render(request, 'pages/calander.html')

def events(request):
  return render(request, 'pages/events.html')