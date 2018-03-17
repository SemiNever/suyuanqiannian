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


$('#main1-btn2').click(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    $('#mask').css('display', 'block');
    var width1 = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
    var height1 = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + 'px';
    $('#mask').css('width', width1);
    $('#mask').css('height', height1);
    $('#main2').css('display', 'block');
    var width2 = (document.documentElement.clientWidth - $('#main2').outerWidth()) / 2 + scrollLeft + 'px';
    var height2 = (document.documentElement.clientHeight - $('#main2').outerHeight()) / 2 + scrollTop + 'px';
    $('#main2').css('left', width2);
    $('#main2').css('top', height2);
});
$(window).resize(function () {
    if ($('#mask').css("display") == 'none') return;
    var width1 = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
    var height1 = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + 'px';
    $('#mask').css('width', width1);
    $('#mask').css('height', height1);
    if ($('#main2').css("display") == 'none') return;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var width3 = (document.documentElement.clientWidth - $('#main2').outerWidth()) / 2 + scrollLeft + 'px';
    var height3 = (document.documentElement.clientHeight - $('#main2').outerHeight()) / 2 + scrollTop + 'px';
    $('#main2').css("left", width3);
    $('#main2').css("top", height3);
});
$('#cancel').click(function () {
    $('#mask').css('display', 'none');
    $('#main2').css('display', 'none');
});

var num=0;
$('.main0Img').click(function(){
	num++;
	if(num==3){
		num=0;
	}
	$('.main0Img').hide();
	var str1='.main0Img:eq('+num +')';
	$(str1).fadeIn();

	$('.checked').removeClass('checked');
	var str='.cricle:eq('+num +')';
	$(str).addClass('checked');
});