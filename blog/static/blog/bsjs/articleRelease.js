//图片上传
var flagimg=0;
$("#upload-img4").change(function checkurl() {
    flagimg=1;
    var objUrl1 = getObjectURL(this.files[0]);
    if (objUrl1) {
        $("label").css("background-image","url("+objUrl1+")");
        $("label").css("background-color","rgba(102,102,102,0.5)")
        $(".img-tip").hide();
        $(".imgchange-tip").show();
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
    if($("#description").val()==""){
        $(".b2").show();
        e.preventDefault();
    }
    if($("select").val()==null){
        $(".b3").show();
        e.preventDefault();
    }
    if($("textarea").val().trim()==""){
        $(".b4").show();
        e.preventDefault();
    }
    if(flagimg==0){
        $(".b5").show();
        e.preventDefault();
    }

    if($("#headline").val()!=""){
        $(".b1").hide();
        e.preventDefault();
    }
    if($("#description").val()!=""){
        $(".b2").hide();
        e.preventDefault();
    }
    if($("select").val()!=null){
        $(".b3").hide();;
        e.preventDefault();
    }
    if($("textarea").val().trim()!=""){
        $(".b4").hide();
        e.preventDefault();
    }
    if(flagimg==1){
        $(".b5").hide();
        e.preventDefault();
    }
});