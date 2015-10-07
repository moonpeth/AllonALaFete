$(window).resize(function(){
	resize();
});

function resize(){
	$(".backgroundImage").css("height", $(window).height()+"px");
	$(".backgroundImage").css("width", $(window).height()*1.34+"px");
	$("#button_play").css("margin-top", $(window).height()/2-106+"px");
}

resize();

