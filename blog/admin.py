from django.contrib import admin
from .models import Post
from .models import Product
from .models import Feedback
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_time', 'modified_time','like_num','type', 'author']
class PostFeedback(admin.ModelAdmin):
    list_display = ['type','body', 'time', 'name','contact']
class PostProduct(admin.ModelAdmin):
    list_display = ['name', 'price', 'type','like_num','created_time','modified_time', 'author']
admin.site.register(Post,PostAdmin)
admin.site.register(Product,PostProduct)
admin.site.register(Feedback,PostFeedback)

