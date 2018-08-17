 //字体自适应      
(function (doc, win) {   
    var docEl = doc.documentElement,   
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',   
    recalc = function () {   
    var clientWidth = docEl.clientWidth;   
    if (!clientWidth) return;   
    docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';   
};   
if (!doc.addEventListener) return;   
win.addEventListener(resizeEvt, recalc, false);   
doc.addEventListener('DOMContentLoaded', recalc, false);   
})(document, window);  

$(function(){
	//tab
	$(".index_menu a").click(function(){
	  $(this).addClass("active").siblings().removeClass("active");
	  var index = $(".index_menu a").index(this);
	  $(".content_list").hide();
	  $(".content_list").eq(index).show();
	});
	//tab
	$(".menu_top a").click(function(){
	  $(this).addClass("active").siblings().removeClass("active");
	  var index = $(".menu_top a").index(this);
	  $(".user_content").hide();
	  $(".user_content").eq(index).show();
	});
	//弹窗显示
	$(".address_list .add").click(function(){
		$(".address_tanc").show();
	});
	//弹窗关闭
	$(".address_tanc .close,.tanc_beij,.address_tanc .rem a").click(function(){
		$(".address_tanc").hide();
	});
	
})

























