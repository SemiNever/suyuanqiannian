from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.six import python_2_unicode_compatible
from django.db.models.aggregates import Count
@python_2_unicode_compatible
class Post(models.Model):
    """
    文章的数据库表稍微复杂一点，主要是涉及的字段更多。
    """

    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse('blog:detail', kwargs={'pk': self.pk})
    def get_like_url(self):
        return reverse('blog:likepost', kwargs={'pk': self.pk})
    def get_recent_posts(num=5):
        return Post.objects.all().order_by('-created_time')[:num]
    def increase_like(self):
        self.like_num += 1
        self.save(update_fields=['like_num'])
    def increase_views(self):
        self.views += 1
        self.save(update_fields=['views'])
    # 文章标题
    title = models.CharField(max_length=30)
    #文章描述
    excerpt = models.CharField(max_length=70)
    #文章内容
    body = models.TextField()
    # 创建时间
    created_time = models.DateTimeField(auto_now_add=True)
    # 最后修改时间
    modified_time = models.DateTimeField(auto_now_add=True)
    # 作者
    author = models.ForeignKey(User)
    # 点赞数
    like_num=models.PositiveIntegerField(default=0)
    # 图片链接
    img_src=models.ImageField(upload_to='upload')
    # 文章类型
    type_choices = (
        (0, "编辑推送"),
        (1, "名家撰稿"),
    )
    type = models.IntegerField(choices=type_choices, default=0)
    views = models.PositiveIntegerField(default=0)

class Product(models.Model):
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('blog:shopDetail', kwargs={'pk': self.pk})
    def get_like_url(self):
        return reverse('blog:like', kwargs={'pk': self.pk})
    def get_next_url(self):
        return reverse('blog:shopDetail', kwargs={'pk': (self.pk+1) if (self.pk+1)<= Product.objects.all().count() else 1})
    def get_previous_url(self):
        return reverse('blog:shopDetail', kwargs={'pk': (self.pk-1) if (self.pk-1) > 0 else Product.objects.all().count()})
    def increase_like(self):
        self.like_num += 1
        self.save(update_fields=['like_num'])
    # 商品名
    name = models.CharField(max_length=10)
    #商品价格
    price = models.IntegerField()
    # 商品一句话描述
    excerpt = models.CharField(max_length=12)
    # 商品种类
    type_choices = (
        # 礼品 / 服饰 / 文具 / 其他
        (0, "礼品"),
        (1, "服饰"),
        (2, "文具"),
        (3, "其他"),
    )
    type = models.IntegerField(choices=type_choices, default=0)
    # 商品点赞数
    like_num=models.IntegerField(default=0)
    #设计说明
    body = models.TextField()
    # 创建时间
    created_time = models.DateTimeField(auto_now_add=True)
    # 最后修改时间
    modified_time = models.DateTimeField(auto_now_add=True)
    # 作者
    author = models.ForeignKey(User)
    #产品规格
    size=models.CharField(max_length=20)
    # 商品封面
    img_src=models.ImageField(upload_to='upload')
    # 商品图片
    product_src1=models.ImageField(upload_to='upload')
    product_src2 = models.ImageField(upload_to='upload')
    product_src3 = models.ImageField(upload_to='upload')

class Feedback(models.Model):
    # 反馈类型  联系我们 / 游戏反馈 / 网站反馈
    type_choices = (
        (0, "联系我们"),
        (1, "游戏反馈"),
        (2, "网站反馈"),
    )
    type = models.IntegerField(choices=type_choices, default=0)
    #反馈内容
    body = models.TextField(max_length=200)
    # 反馈时间
    time = models.DateTimeField(auto_now_add=True)
    # 反馈人称呼
    name= models.CharField(max_length=10,default='匿名')
    # 联系方式
    contact= models.CharField(max_length=10,default='匿名')