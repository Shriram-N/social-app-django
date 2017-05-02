from django.conf.urls import patterns, url,include

from thinkster_django_angular_boilerplate.views import IndexView
# .. Imports
from rest_framework_nested import routers

from authentication.views import AccountViewSet
from authentication.views import LoginView
from authentication.views import LogoutView

from django.conf import settings
from django.conf.urls.static import static
from projects.views import AccountProjectsViewSet, ModulesViewSet,ProjectsViewSet,ProjectModulesViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

router.register(r'projects', ProjectsViewSet)
router.register(r'modules', ModulesViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)
projects_router = routers.NestedSimpleRouter(
    router, r'projects', lookup='project'
)
accounts_router.register(r'projects', AccountProjectsViewSet)
projects_router.register(r'modules', ProjectModulesViewSet)
urlpatterns = patterns(
     '',
    # ... URLs
     url(r'^api/v1/', include(router.urls)),
      url(r'^api/v1/', include(accounts_router.urls)),
      url(r'^api/v1/', include(projects_router.urls)),
       url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
     url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
     url('^.*$', IndexView.as_view(), name='index'),
)
