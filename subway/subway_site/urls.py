from django.contrib import admin
from django.urls import include, path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	path("admin/", admin.site.urls),
	path("", views.home, name="home"),
	path("menu/", views.menu_view, name='menu'),
	path('menu-item/<str:item_name>/', views.menu_item_detail, name='menu_item_detail'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)