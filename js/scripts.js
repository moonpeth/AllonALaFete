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
var positionOrigine = {};
/*niveau1*/
$("#content1 .objet").bind('click',function(event){
	//click on the robes when princess hasn't yet have a robe, put on a robe
	if($(".objet").parents("#pr").length == 0){
		item.oldParent = $(event.currentTarget).parent();
		item.oldId = $(event.currentTarget).attr("id");
		item.oldRobe = $(event.currentTarget);
		$("#pr").html(event.currentTarget);
		$(event.currentTarget).attr("id", "robePlaced");
		console.log("put on");
	}
	//click on the robes when princess has already have a robe, change robe 
	else if($(event.currentTarget).parents("#pr").length==0){
	 console.log("change a robe");
     console.log($(event.currentTarget));
     $("#pr").empty();
	 $("#pr").html(event.currentTarget);
	        //if oldParent est princess
			 if($(item.oldParent).attr("id")=="pr"){
			 	   console.log("333333333");
			 	   $(positionOrigine.oldParent).html(item.oldRobe);
		           $(positionOrigine.oldRobe).attr("id", item.oldId);
			 	   positionOrigine.oldParent =  $(item.oldParent);
		           positionOrigine.oldId = $(item.oldId);
		           // positionOrigine.oldRobe = $(event.currentTarget);		        
			 }else{
		         console.log("2222222222");
		         $(item.oldParent).html(item.oldRobe);
			     $(item.oldRobe).attr("id", item.oldId);
			 	 item.oldId = $(event.currentTarget).attr("id");
			 	 item.oldParent = $(event.currentTarget).parent();
			     item.oldRobe = $(event.currentTarget);
			 }	
	 $(event.currentTarget).attr("id", "robePlaced");
	  console.log("hahhahhahhhahahaha");
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