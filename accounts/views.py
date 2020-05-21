from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.core.validators import validate_email


def login(request):
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']
    emailTmp = username

    try:
      username = User.objects.get(email=username).username
      print(User.objects.get(username=username).email)
    except:
      messages.error(request, f'email {emailTmp} doesn\'t have an account')
      return redirect('login')

    user = auth.authenticate(username=username, password=password)


    # try:
      # email = validate_email(username)
      # print(email)
      # print(username)
      # username = User.objects.get(email=username).username
      # print(username)
      # auth.login(request, user)
      # messages.success(request, f'You are now logged in')
      # return redirect('dashboard')
      # if '@tamu.edu' not in email:
      #   pass
    # except:
    #   username = User.objects.get(email=username)
    #   messages.error(request, f'{username} Must use a tamu.edu email')
    #   return redirect('login')

    if user is not None:
        auth.login(request, user)
        messages.success(request, 'You are now logged in')
        return redirect('dashboard')
    else:
        messages.error(request, 'Invalid credentials')
        return redirect('login')
  else:
      return render(request, 'accounts/login.html')

def register(request):
  if request.method == 'POST':
      # Get form values
      first_name = request.POST['first_name']
      last_name = request.POST['last_name']
      username = request.POST['username']
      email = request.POST['email']
      password = request.POST['password']
      password2 = request.POST['password2']

      if '@tamu.edu' not in email:
        messages.error(request, 'Must use a tamu.edu email')
        return redirect('register')

      # Check if passwords match
      if password == password2:
          # Check for new username
          if User.objects.filter(username=username).exists():
              messages.error(request, 'That username is taken')
              return redirect('register')
          else:
              # Check for email
              if User.objects.filter(email=email).exists():
                  messages.error(request, 'That email is being used')
                  return redirect('register')
              else:
                  # user = User.objects.create_user(
                  #     username=username, 
                  #     password=password, 
                  #     email=email,
                  #     first_name=first_name,
                  #     last_name=last_name
                  # )
                  # user.save()

                  messages.success(request, 'You are now registered and can log in')
                  return redirect('login')
      else:
          messages.error(request, 'Passwords do not match')
          return redirect('register')
  else:
      return render(request, 'accounts/register.html')

def logout(request):
  return redirect('index')

def dashboard(request):
  return render(request, 'accounts/dashboard.html')