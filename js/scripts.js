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
$("#content1 .objet").bind('click',function(event){
	console.log($(".objet").parents());
	//click on the robes when princess hasn't yet have a robe, put on a robe
	if($(".objet").parents("#pr").length == 0){
		item.oldParent = $(event.currentTarget).parent();
		item.oldId = $(event.currentTarget).attr("id");
		item.oldRobe = $(event.currentTarget);
		$("#pr").html(event.currentTarget);
		$(event.currentTarget).attr("id", "robePlaced");
		console.log("put on");
		console.log(item);
	}
	//click on the robes when princess has already have a robe, change robe 
	else if($(event.currentTarget).parents("#pr").length==0){
		console.log("change a robe");
	 $("#pr").html(event.currentTarget);
	 $(event.currentTarget).attr("id", "robePlaced");
	 $(item.oldParent).html(item.oldRobe);
	 $(item.oldRobe).attr("id", item.oldId);

	 item.oldParent = $(event.currentTarget).parent();
	 item.oldId = $(event.currentTarget).attr("id");
	 item.oldRobe = $(event.currentTarget);

	  console.log("hahhahhahhhahahaha");
	  console.log(item);
      console.log($(event.currentTarget));
	}
	//click on the princess to take off the robe 
	else{	
		console.log("lollllllllllllllllllllll");
		item.oldParent.html(event.currentTarget);
		$(event.currentTarget).attr("id", item.oldId);
		item = {};
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