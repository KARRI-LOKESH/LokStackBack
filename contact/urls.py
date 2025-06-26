from django.urls import path
from .views import contact_view,login_view,signup_view,logout_view
from . import views

urlpatterns = [
    path('contact/', contact_view),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('signup/', signup_view, name='signup'),
]
