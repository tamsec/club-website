"""
tamucyber URL Configuration
"""

from django.contrib import admin
from django.urls import path

try:
  import config
except ImportError:
  raise Exception("A config.py file is required to run this project")

urlpatterns = [
    path(config.admin_url, admin.site.urls),
]
