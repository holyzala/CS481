from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import MyMovie
from .permissions import IsOwner
from .serializers import MyMovieSerializer, MyTokenObtainPairSerializer, UserSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    """
    Takes a set of user credentials and returns an access and refresh JSON web
    token pair to prove the authentication of those credentials.
    """
    serializer_class = MyTokenObtainPairSerializer


class UserList(generics.ListCreateAPIView):
    """
    get: List all the users
    post: Create a new user
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class GetMyMovieList(generics.ListCreateAPIView):
    """
    get: List all the current user's movies
    post: add a new movie for the current user
    """
    serializer_class = MyMovieSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        MoviesList = MyMovie.objects.filter(owner=user)
        return MoviesList


class GetMyMovie(generics.RetrieveUpdateDestroyAPIView):
    """
    get: Get the details of a specific movie the user owns
    put: update the movie
    patch: update the movie
    delete: remove the movie from the user's list
    """
    queryset = MyMovie.objects.all()
    serializer_class = MyMovieSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'MovieName'
    permission_classes = (IsOwner,)




