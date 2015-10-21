$(window).resize(function(){
	resize();
});

function resize(){
	// $(".backgroundImage").css("height", $(window).height()+"px");
	// $(".backgroundImage").css("width", $(window).height()*1.35+"px");
	// $("#button_play").css("margin-top", ($(window).height()-124)/2-170+"px");
	// $("#bouton_niveau2").css("margin-top", $(window).height()/2-90+"px");
}

resize();

/*pour les audios*/
$("#storyAudio").bind('ended', function(){
    window.location.replace("intro.html");
});  

$("#paroleAudio").bind('ended', function(){
    window.location.replace("menu.html");
}); 

var item = {};

/*niveau1*/
$(".objet").bind('click',function(event){
	if($(".objet").parent().is(".robeOne")){
		item.oldParent = $(event.currentTarget).parent();
		item.oldId = $(event.currentTarget).attr("id");
		$("#pr").html(event.currentTarget);
		$(event.currentTarget).attr("id", "robePlaced");
		console.log("put on");
	}
	else{//take off the robe
		item.oldParent.html(event.currentTarget);
		$(event.currentTarget).attr("id", item.oldId);
		console.log("take off");
	}
});

/*pour les drag et drop des vetements*/
function allowDrop(ev)
{
	ev.preventDefault();
}

var robe = null;

function drag(ev)
{
	robe = ev.srcElement;
}

function drop(ev)
{
	$(ev.srcElement).html(robe);
	$(robe).attr("id", "robePlaced");
}