"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from django.views import generic
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenRefreshView
from movies.views import MyTokenObtainPairView, UserList, GetMyMovieList, GetMyMovie

schema_view = get_schema_view(
    openapi.Info(
        title="My Movie API",
        default_version='v1',
        description="Personal movie database",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', generic.RedirectView.as_view(url='/api/', permanent=False)),
    path('api/', get_schema_view()),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/auth/token/obtain/', MyTokenObtainPairView.as_view()),
    path('api/auth/token/refresh/', TokenRefreshView.as_view()),
    path('api/users/', UserList.as_view()),
    path('api/movies/', GetMyMovieList.as_view()),
    path('api/movies/<MovieName>/', GetMyMovie.as_view()),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=None), name='schema-swagger-ui')
]
