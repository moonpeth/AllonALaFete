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


/*niveau1   click*/
function switchRobe(){ //take the robe dressed on the princess to armoire
	var idChildren = $("#pr").children().attr('id');
	$("."+idChildren).html($("#"+idChildren));
	$("#"+idChildren).attr('class', 'objet');
}

$("#content1 .objet").bind('click',function(event){
    // if this robe is not yet dressed on the princess
	if($(this).parents("#pr").length == 0){
		//if the princess has alreay another robe, then change it
		if($("#pr").children().length > 0){
			switchRobe();
		}
		$("#pr").html(this);
		$(this).attr("class", "robePlaced");
	}else{  //if this robe is alreay dressed on the princess, take it off
		switchRobe();
	}

});


/*niveau2 & 3,  drag&drop*/
function allowDrop(ev)
{
	ev.preventDefault();
}

var robe = null;

function drag(ev)
{  //if the robe is not yet dressed on the princess
   if($(ev.srcElement).parents("#pr").length == 0){
        robe = ev.srcElement;
   }else{ //if the robe is already on the princess, then take it off
	   	robe = ev.srcElement;
	   	//switchRobe();
   }
}

function drop(ev)
{   
	console.log(ev);
	if($(robe).parents().attr('id') != "pr" &&
		($(ev.srcElement).attr('id') == "pr" || 
			$(ev.srcElement).parents().attr('id') == "pr")){
		//si la princesse a deja une robe
		if($("#pr").children() != 0){
			switchRobe();
		}
		$("#pr").html(robe);
		$(robe).attr("class", "robePlaced");
	} else if ($(robe).parents().attr('id') == "pr" &&
		$(ev.srcElement).attr('class') == $(robe).attr('id')) {
		switchRobe();
	}


		


 //  	console.log("drop!!!!!!");
	// if($(ev.toElement).attr('id') == "pr"){
 //        console.log("princess!!!!!!");
	// 	if($(this).parents("#pr").length == 0){
	// 		if($("#pr").children().length > 0){
	// 			console.log("deja habillé");
	// 		// switchRobe();	
	// 		var idChildren = $("#pr").children().attr('id');
	// 	    $("."+idChildren).html($("#"+idChildren));
	// 	    $("#"+idChildren).attr('class', 'objet');
	// 	    }	
	// 		$(ev.srcElement).html(robe);
	// 		$(robe).attr("class", "robePlaced");
	      
 //       }else{
	// 	// switchRobe();
	// 	 console.log("qdfqfqdf!!!!!!");
	//     var idChildren = $("#pr").children().attr('id');
	//     $("."+idChildren).html($("#"+idChildren));
	//     $("#"+idChildren).attr('class', 'objet');	
	//     }	
 //  	}	
}