$(window).resize(function(){
	resize();
});

function resize(){
	// $(".backgroundImage").css("height", $(window).height()+"px");
	// $(".backgroundImage").css("width", $(window).height()*1.35+"px");
	// $("#button_play").css("margin-top", ($(window).height()-124)/2-170+"px");
	// $("#bouton_niveau2").css("margin-top", $(window).height()/2-90+"px");

	//get the position of backgrand image whose size change with the size of window of each page
	var X = $('.backgroundImage').position().top; 
	var Y = $('.backgroundImage').position().left;
	var width = $('.backgroundImage').width();
	var height = $('.backgroundImage').height();
    //home page
	$('.divlink').css({'top':X,'left':Y,'width':width});
	$('#title').css({'width':width});
	$('#bouton_jouer').css({'width':width*0.22});
	//menu page
	$('.menu_buttons').css({'top':X,'left':Y,'width':width, 'margin-top': height/2-100+"px"});
    $('.bouton_niveau').css({'width':width*0.15});
	$('.aide').css({'top':X,'left':Y,'width':width, 'margin-top': height/2+"px"});
	$('#bouton_aide').css({'width':width*0.15});
   
}

resize();

$("#storyAudio").bind('ended', function(){
    window.location.replace("intro.html");
});  

$("#paroleAudio").bind('ended', function(){
    window.location.replace("menu.html");
}); 