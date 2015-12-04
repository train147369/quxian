$(function(){
	var ww = $(window).width(),
		wh = $(window).height();

navgateW(".navigate .navlist");
setFullHeight(".navigate .navinfo");

// navlis全屏等分宽度
	function navgateW(id){
		var navlisLength = $(".navigate .navlist").length;
		// console.log(navlisLength);
		$(id).width(ww/navlisLength);
	}
	function setFullHeight(id){
		$(id).height(wh);
	}
$(".navlist a").mousemove(function(){
	$(this).parent(".navlist").removeClass("active");
	$(".coverstar .home-pattern").removeClass("active");
	$(".coverstar .logo").removeClass("active");
	$(this).parent(".navlist").addClass("active");
	$(".coverstar .home-pattern").addClass("active");
	$(".coverstar .logo").addClass("active");
});
$(".navlist a").mouseleave(function(){
	$(".navlist").removeClass("active");
	$(".coverstar .home-pattern").removeClass("active");
	$(".coverstar .logo").removeClass("active");
});

})