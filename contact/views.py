from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import ContactMessage
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate, login, logout
@api_view(['POST'])
def contact_view(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not all([name, email, message]):
        return Response({'error': 'All fields required'}, status=status.HTTP_400_BAD_REQUEST)

    # Save to database
    ContactMessage.objects.create(name=name, email=email, message=message)
    return Response({'message': 'Message saved successfully'}, status=status.HTTP_200_OK)


@csrf_exempt
def signup_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            full_name = data.get("full_name", "").strip()
            email = data.get("email", "").strip()
            password = data.get("password", "").strip()
        except Exception:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        if not full_name or not email or not password:
            return JsonResponse({"error": "Missing fields"}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already registered"}, status=400)

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=full_name,
        )
        user.save()

        return JsonResponse({"message": "User registered successfully"})

    return JsonResponse({"error": "Invalid method"}, status=405)


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email", "").strip()
            password = data.get("password", "").strip()
        except Exception:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        if not email or not password:
            return JsonResponse({"error": "Missing email or password"}, status=400)

        user = authenticate(username=email, password=password)
        if user is not None:
            login(request, user)  # Create session
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=401)

    return JsonResponse({"error": "Invalid method"}, status=405)


@csrf_exempt
def logout_view(request):
    if request.method == "POST":
        request.session.flush()  # Clear session and logout user
        return JsonResponse({"message": "Logged out successfully"})
    else:
        return JsonResponse({"error": "Only POST allowed"}, status=405)
