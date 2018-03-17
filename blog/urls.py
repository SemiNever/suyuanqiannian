from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about.html/', views.about, name='about'),
    url(r'^game.html/', views.game, name='game'),
    url(r'^book.html/', views.book, name='book'),
    url(r'^shop.html/', views.shop, name='shop'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.detail, name='detail'),
    url(r'^product/(?P<pk>[0-9]+)/$', views.shopDetail, name='shopDetail'),
    url(r'^archives/(?P<type>[0-9]+)/$', views.archives, name='archives'),
    url(r'^divide/(?P<type>[0-9]+)/$', views.divide, name='divide'),
    url(r'^search/$', views.search, name='search'),
    url(r'^search_shop/$', views.search_shop, name='search_shop'),
    url(r'^feedback/$', views.post_feedback, name='post_feedback'),
    url(r'^like/(?P<pk>[0-9]+)/$', views.like, name='like'),
    url(r'^likepost/(?P<pk>[0-9]+)/$', views.likepost, name='likepost'),
]