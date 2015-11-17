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
function switchRobeUp(){ //take the item dressed on the princess to armoire
	var idChildren = $("#up_pr").children().attr('id');
	$("."+idChildren).html($("#"+idChildren));
	$("#"+idChildren).attr('class', 'objet');
}

function switchRobeDown(){ //take the item dressed on the princess to armoire
	var idChildren = $("#down_pr").children().attr('id');
	$("."+idChildren).html($("#"+idChildren));
	$("#"+idChildren).attr('class', 'objet');
}

function switchRobe(){ //take the item dressed on the princess to armoire	
	var idChildren = $("#pr").children().attr('id');
	$("."+idChildren).html($("#"+idChildren));
	$("#"+idChildren).attr('class', 'objet');
}

$("#content1 .objet").bind('click',function(event){
    // if this item is not yet dressed on the princess
	if($(this).parents("#pr").length == 0){
		//if the princess has alreay another item, then change it
		if($("#pr").children().length > 0){
			switchRobe();
		}
		$("#pr").html(this);
		$(this).attr("class", "itemPlaced");
	}else{  //if this item is alreay dressed on the princess, take it off
		switchRobe();
	}

});


/*niveau2 & 3,  drag&drop*/
function allowDrop(ev)
{
	ev.preventDefault();
}

var item = null;

// function drag(ev)
// {  //if the item is not yet dressed on the princess
//    if($(ev.srcElement).parents("#pr").length == 0){
//         item = ev.srcElement;
//    }else{ //if the item is already on the princess, then take it off
// 	   	item = ev.srcElement;
// 	   	//switchRobe();
//    }
// }

function drag(ev)
{  //if the item is not yet dressed on the princess
   if($(ev.srcElement).parents("#up_pr").length == 0 || $(ev.srcElement).parents("#up_pr").length == 0){
        item = ev.srcElement;
   }else{ //if the item is already on the princess, then take it off
	   	item = ev.srcElement;
	   	//switchRobe();
   }
}

function dropUp(ev){
	if($(item).parents().attr('id') != "up_pr"){
		//si la princesse a deja une item
		if(($(ev.srcElement).attr('id') == "up_pr" 
			|| $(ev.srcElement).parents().attr('id') == "up_pr")){

			if($(item).attr('id').indexOf('up') >= 0){
				if($("#up_pr").children() != 0){
					switchRobeUp();
				}
				$("#up_pr").html(item);
				$(item).attr("class", "upItemPlaced");
			} else {
				//TODO: Dire qu'il faut placer ça en bas
			}
		} 
		
	} else if ($(item).parents().attr('id') == "up_pr" &&
		$(ev.srcElement).attr('class') == $(item).attr('id')) {
		switchRobeUp();
	}
}

function dropDown(ev)
{  
	if($(item).parents().attr('id') != "down_pr"){
		//si la princesse a deja une item
		if(($(ev.srcElement).attr('id') == "down_pr" 
			|| $(ev.srcElement).parents().eq(0).attr('id') == "down_pr")){

			if($(item).attr('id').indexOf('down') >= 0){
				if($("#down_pr").children() != 0){
					switchRobeDown();
				}
				$("#down_pr").html(item);
				$(item).attr("class", "downItemPlaced");
			}
			else {
				//TODO: Dire qu'il faut placer ça en haut
			}	
		} 
	} else if ($(item).parents().attr('id') == "down_pr" &&
		$(ev.srcElement).attr('class') == $(item).attr('id')) {
		switchRobeDown();
	}
}

$("#parapluie").bind('click',function(event){
$(".parapluie").html(this);

$("#pluie").remove();
$("#imgSoleil").css("display", "block");
});

$("#bouton_next").bind('click',function(event){
var princesse = $("#pr").html();
console.log(princesse)	;
$("body").replaceWith('<body>'+
       '<div id="niveau1" class="backgroundBlock">'+
          '<div id="contentFete">'+
              '<div class="princesse" id="pr">'+princesse+'</div>'+'<audio id="storyAudio" src="audio/musique_fête.mp3" type="audio/mp3" autoplay="true"></audio>'+           
          '</div> <audio id="allonFete" src="audio/allons_fete.mp3" type="audio/mp3" autoplay="true"></audio></div></body>');
}

);