//图片上传
var flagimg1=0;
var flagimg2=0;
var flagimg3=0;
var flagimg4=0;

$("#upload-img1").change(function checkurl() {
    flagimg1=1;
    var objUrl1 = getObjectURL(this.files[0]);
    if (objUrl1) {
        $(".label1").css("background-image","url("+objUrl1+")");
        $(".label1").css("background-color","rgba(102,102,102,0.5)");
        $(".label1Tip").show(); 
         $(".label1p").hide();
    }
});

$("#upload-img2").change(function checkurl() {
    flagimg2=1;
    var objUrl1 = getObjectURL(this.files[0]);
    if (objUrl1) {
        $(".label2").css("background-image","url("+objUrl1+")");
        $(".label2").css("background-color","rgba(102,102,102,0.5)");
        $(".label2p").hide();
        $(".label2Tip").show();
    }
});

$("#upload-img3").change(function checkurl() {
    flagimg3=1;
    var objUrl1 = getObjectURL(this.files[0]);
    if (objUrl1) {
        $(".label3").css("background-image","url("+objUrl1+")");
        $(".label3").css("background-color","rgba(102,102,102,0.5)");
        $(".label3p").hide();
        $(".label3Tip").show();
    }
});

$("#upload-img4").change(function checkurl() {
    flagimg4=1;
    var objUrl1 = getObjectURL(this.files[0]);
    if (objUrl1) {
        $(".label4").css("background-image","url("+objUrl1+")");
        $(".label4").css("background-color","rgba(102,102,102,0.5)")
        $(".label4p").hide();
        $(".label4Tip").show();
    }
});
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}




//提交文章按钮点击
$('form').submit(function(e){
    if($("#headline").val()==""){
        $(".b1").show();
        e.preventDefault();
    }
    if($("#size").val()==""){
        $(".b2").show();
        e.preventDefault();
    }
     if($("#description").val()==""){
        $(".b3").show();
        e.preventDefault();
    }
    if($("#price").val()==""){
        $(".b4").show();
        e.preventDefault();
    }
    if(flagimg1==0||flagimg2==0||flagimg3==0){
        $(".b5").show();
        e.preventDefault();
    }
    if($("textarea").val().trim()==""){
        $(".b6").show();
        e.preventDefault();
    }
    if(flagimg4==0){
        $(".b7").show();
        e.preventDefault();
    }



    if($("#headline").val()!=""){
        $(".b1").hide();
        e.preventDefault();
    }
    if($("#size").val()!=""){
        $(".b2").hide();
        e.preventDefault();
    }
     if($("#description").val()!=""){
        $(".b3").hide();
        e.preventDefault();
    }
    if($("#price").val()!=""){
        $(".b4").hide();
        e.preventDefault();
    }
    if(flagimg1==1&&flagimg2==1&&flagimg3==1){
        $(".b5").hide();
        e.preventDefault();
    }
    if($("textarea").val().trim()!=""){
        $(".b6").hide();
        e.preventDefault();
    }
    if(flagimg4!=0){
        $(".b7").hide();
        e.preventDefault();
    }
    
});