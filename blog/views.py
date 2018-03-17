import markdown
from django.shortcuts import render, get_object_or_404,redirect
from .models import Post,Product
from django.db.models import Q
from .models import Feedback
from blog import models

def like(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.increase_like()
    product.body = markdown.markdown(product.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    return render(request, 'blog/shopDetail.html', context={'product': product})

def likepost(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.increase_like()
    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    return render(request, 'blog/detail.html', context={'post': post, 'recent_posts': Post.get_recent_posts()})
def post_feedback(request):
    # HTTP 请求有 get 和 post 两种，一般用户通过表单提交数据都是通过 post 请求，
    # 因此只有当用户的请求为 post 时才需要处理表单数据。
    if request.method == 'POST':
        # 用户提交的数据存在 request.POST 中，这是一个类字典对象。
        # 我们利用这些数据构造了 CommentForm 的实例，这样 Django 的表单就生成了。
        # 当调用 form.is_valid() 方法时，Django 自动帮我们检查表单的数据是否符合格式要求。
        feedback_1 = request.POST.get("feedback-radio", None)
        feedback_2 = request.POST.get("content", None)
        feedback_3 = request.POST.get("name", None)
        feedback_4 = request.POST.get("contact", None)
        if feedback_2 == '':
            return redirect(shop)
        if feedback_3=='':
            feedback_3='匿名'
        if feedback_4 == '':
            feedback_4 = '匿名'
        models.Feedback.objects.create(
                type=feedback_1,
                body=feedback_2,
                name=feedback_3,
                contact=feedback_4
        )
            # return redirect(post)
        return redirect(shop)
    # 不是 post 请求，说明用户没有提交数据，重定向到文章详情页。
    return redirect(shop)

def search(request):
    q = request.GET.get('q')
    error_msg = ''
    if not q:
        error_msg = "请输入关键词"
        return render(request, 'blog/book_search.html', {'error_msg': error_msg})
    post_list = Post.objects.filter(Q(title__icontains=q) | Q(body__icontains=q))
    return render(request, 'blog/book_search.html', {'error_msg': error_msg,
                                               'post_list': post_list,'q':q,'num':post_list.count()})
def search_shop(request):
    q = request.GET.get('q')
    error_msg = ''
    if not q:
        error_msg = "请输入关键词"
        return render(request, 'blog/shop_search.html', {'error_msg': error_msg})
    product_list = Product.objects.filter(Q(name__icontains=q) | Q(body__icontains=q))
    return render(request, 'blog/shop_search.html', {'error_msg': error_msg,
                                               'product_list': product_list,'q':q,'num':product_list.count()})
# Create your views here.
def index(request):
    product_list = Product.objects.all().order_by('-created_time')
    return render(request, 'blog/shop.html', context={
        'product_list': product_list
    })
def about(request):
    return render(request, 'blog/about.html')
def game(request):
    return render(request, 'blog/game.html')
def book(request):
    post_list =Post.objects.all().order_by('-created_time')
    return render(request,'blog/book.html',context={
        'post_list':post_list
    })
def shop(request):
    product_list = Product.objects.all().order_by('-created_time')
    return render(request, 'blog/shop.html', context={
        'product_list': product_list
    })
def detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.increase_views()
    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    return render(request, 'blog/detail.html', context={'post': post,'recent_posts':Post.get_recent_posts()})
def shopDetail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.body = markdown.markdown(product.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    return render(request, 'blog/shopDetail.html', context={'product': product})

def archives(request,type):
    product_list = Product.objects.filter(type=type
                                    ).order_by('-created_time')
    return render(request, 'blog/shop.html', context={'product_list': product_list})

def divide(request, type):
        post_list = Post.objects.filter(type=type
                                              ).order_by('-created_time')
        if type=="0":
            return render(request, 'blog/book1.html', context={'post_list': post_list})
        else :
            return render(request, 'blog/book2.html', context={'post_list': post_list})