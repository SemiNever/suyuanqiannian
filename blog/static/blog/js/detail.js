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

//点赞处理
$('#main1-btn').click(function () {
alert("谢谢您的支持!");
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