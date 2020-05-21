"""
tamucyber URL Configuration
"""

from django.contrib import admin
from django.urls import path, include


try:
  import config
except ImportError:
  raise Exception("A config.py file is required to run this project")

urlpatterns = [
    path('', include('pages.urls')),
    path('accounts/', include('accounts.urls')),
    path(config.admin_url, admin.site.urls),
]
