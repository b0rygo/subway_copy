from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
	#Leave as empty string for base url
	path("admin/", admin.site.urls),
	path("", views.items, name="index"),
]