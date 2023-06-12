from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.tokens import RefreshToken
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiResponse

from .serializers import UserSerializer, TokenSerializer


@extend_schema_view(
    post=extend_schema(
        summary="Регистрация нового пользователя",
        request=UserSerializer,
        responses={
            status.HTTP_201_CREATED: OpenApiResponse(
                response=TokenSerializer,
                description='Регистрация успешна'),
            status.HTTP_409_CONFLICT: OpenApiResponse(
                response=None,
                description='Пользователь с этим логином уже существует'),
        },
    )
)
class CreateUserView(CreateAPIView):
    serializer_class = TokenSerializer

    def create(self, request, *args, **kwargs):
        try:
            user = User.objects.create(
                username=request.data['username'],
                email=request.data['email']
            )
            user.set_password(request.data['password'])
            user.save()
        except IntegrityError:
            return Response(status=status.HTTP_409_CONFLICT)
        refresh = RefreshToken.for_user(user)
        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


