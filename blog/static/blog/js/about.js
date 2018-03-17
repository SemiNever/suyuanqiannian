//回到顶部
$('#backup').click(function(){
 $('html').scrollTop(0);
});

//屏幕过一屏才显示回到顶部按钮
$(window).scroll(function(){
if ($(window).scrollTop()>500){
$("#backup").fadeIn(500);
}
else
{
$("#backup").fadeOut(500);
}

});

//二维码移入显示
$('#head-img1').mouseover(function(){
	$("#head-code1").fadeIn();
});
$('#head-img1').mouseout(function(){
	$("#head-code1").fadeOut();
});
$('#head-img2').mouseover(function(){
	$("#head-code2").fadeIn();
});
$('#head-img2').mouseout(function(){
	$("#head-code2").fadeOut();
});

//成员信息切换
var arrUrl = [ '/static/blog/main/touxiang-wk.png', '/static/blog/main/touxiang-jyf.png', '/static/blog/main/touxiang-czw.png', '/static/blog/main/touxiang-gxj.png','/static/blog/main/touxiang-ljy.png','/static/blog/main/touxiang-zdh.png'];
var arrName = [ '王康', '金一凡', '陈子薇', '高杏结','刘俊妤','张德浩' ];
var arrPosition=['产品经理','UI/UE设计师/项目负责人','运营主管/项目负责人','财务主管','平面设计师','java开发工程师'];
var arrIntroduction=['工业设计14级，整合创新工作室，中共预备党员','工业设计15级，校级优秀奖学金获得者','广播电视学15级，工作经验丰富','市场营销14级','建筑学16级','计算机科学14级，国家奖学金获得者'];
var arrEffect=['负责整体把控项目进度，需求分析与功能设计','负责游戏和网站的UI/UE设计','负责网站编辑与运营工作','负责项目的财务管理','负责手游和周边产品的平面设计','技术负责人，负责网站后台开发'];
var flag=0;
$('#left').click(function(){
	flag--;
	if(flag<0){
		flag=5;
	}
	$('#memeber-img').attr('src',arrUrl[flag]);
	$('#memeber-name').html(arrName[flag]);
	$('#memeber-position').html(arrPosition[flag]);
	$('#memeber-introduction').html(arrIntroduction[flag]);
	$('#memeber-effect').html(arrEffect[flag]);	
	$('.checked').addClass('cricle');
	$('.checked').removeClass('checked');
	var str='.cricle:eq('+flag +')';
	$(str).addClass('checked');
});
$('#right').click(function(){
	flag++;
	if(flag>5){
		flag=0;
	}
	$('#memeber-img').attr('src',arrUrl[flag]);
	$('#memeber-name').html(arrName[flag]);
	$('#memeber-position').html(arrPosition[flag]);
	$('#memeber-introduction').html(arrIntroduction[flag]);
	$('#memeber-effect').html(arrEffect[flag]);
	$('.checked').addClass('cricle');
	$('.checked').removeClass('checked');
	var str='.cricle:eq('+flag +')';
	$(str).addClass('checked');
});
$('#contact-btn').click(function(){
	$('html').scrollTop("2700");
});

//反馈窗口
$('#feedback').click(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    $('#mask').css('display', 'block');
    var width1 = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
    var height1 = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + 'px';
    $('#mask').css('width', width1);
    $('#mask').css('height', height1);
    $('#feedback-form').css('display', 'block');
    var width2 = (document.documentElement.clientWidth - $('#feedback-form').outerWidth()) / 2 + scrollLeft + 'px';
    var height2 = (document.documentElement.clientHeight - $('#feedback-form').outerHeight()) / 2 + scrollTop + 'px';
    $('#feedback-form').css('left', width2);
    $('#feedback-form').css('top', height2);
});
$(window).resize(function () {
    if ($('#mask').css("display") == 'none') return;
    var width1 = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
    var height1 = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + 'px';
    $('#mask').css('width', width1);
    $('#mask').css('height', height1);
    if ($('#feedback-form').css("display") == 'none') return;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var width3 = (document.documentElement.clientWidth - $('#feedback-form').outerWidth()) / 2 + scrollLeft + 'px';
    var height3 = (document.documentElement.clientHeight - $('#feedback-form').outerHeight()) / 2 + scrollTop + 'px';
    $('#feedback-form').css("left", width3);
    $('#feedback-form').css("top", height3);
});
$('#close').click(function () {
    $('#mask').css('display', 'none');
    $('#feedback-form').css('display', 'none');
});