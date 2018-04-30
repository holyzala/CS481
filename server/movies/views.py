from rest_framework import status, views, generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, MessageSerializer, MyMovieSerializer
from .models import MyMovie
from .permissions import BasePermission

class EchoView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class GetMyMovieList(generics.ListCreateAPIView):
    queryset = MyMovie.objects.all()
    serializer_class = MyMovieSerializer

class GetMyMovie(generics.RetrieveUpdateDestroyAPIView):
    queryset = MyMovie.objects.all()
    serializer_class = MyMovieSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'MovieName'




