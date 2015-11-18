
/*pour les audios*/
$("#storyAudio").bind('ended', function(){
    window.location.replace("menu.html");
});  

$("#paroleAudio").bind('ended', function(){
    window.location.replace("menu.html");
}); 

var vid = document.getElementById("jeux_bg");
vid.volume = 0.4;

/*niveau1   click*/
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

function allowDrop(ev)
{
	ev.preventDefault();
}

var item = null;

function drag(ev)
{  
   var pluie = $("#pluie");
		if(pluie.length){
  //Le pluie existe
 $("body").append("<audio id=\"beep\" src=\"audio/beep.mp3\" type=\"audio/mp3\" autoplay=\"true\"></audio>");
		} else {
  //Le pluie n'existe pas
	  //if the item is not yet dressed on the princess
   if($(ev.srcElement).parents("#up_pr").length == 0 || $(ev.srcElement).parents("#up_pr").length == 0){
        item = ev.srcElement;
   }else{ //if the item is already on the princess, then take it off
	   	item = ev.srcElement;
	   	//switchRobe();
   }
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

// des actions pour les éléments dans le niveau3
$("#parapluie").bind('click',function(event){
	// $(".parapluie").html(this);

	$("#pluie").remove();
	$('#parapluie').remove();
	$(".princesse").css({
		"background": "url(../AllonALaFete/img/princesse_parapluie.png)",
		"background-size": "contain"});  
	 $("body").append("<audio id=\"allonFete\" src=\"audio/bravo.mp3\" type=\"audio/mp3\" autoplay=\"true\"></audio>");
	setTimeout(
	  function() 
	  {  
	  $(".princesse").css({
		"background": "url(../AllonALaFete/img/princesse_nue.png)",
		"background-size": "contain"});  
	  }, 8000);

	setTimeout(
	  function() 
	  {
	    $("#imgSoleil").css("display", "block");
	    $("body").append("<audio id=\"allonFete\" src=\"audio/parapluieDisparu.mp3\" type=\"audio/mp3\" autoplay=\"true\"></audio>");
	  }, 10000);
});

$("#lunette").bind('click',function(event){
	// $(".lunette").html(this);
	// $(this).attr("id", "placedLunette");
	$('#lunette').remove();
	$(".princesse").css({
		"background": "url(../AllonALaFete/img/princesse_nue_final_lunette.png)",
		"background-size": "contain"});  
	$("body").append("<audio id=\"allonFete\" src=\"audio/bravo.mp3\" type=\"audio/mp3\" autoplay=\"true\"></audio>");
});

// la fete
$("#bouton_next").bind('click',function(event){
var princesse = $("#pr").html();
console.log(princesse)	;
$("body").replaceWith('<body>'+
       '<div id="niveau1" class="backgroundBlock">'+
          '<div id="contentFete"><img id="bouton_menu" src = "./img/bouton_menu.png" onclick="location.href=\'menu.html\'"/>'+
              '<div class="princesse" id="pr">'+princesse+'</div>'+'<audio id="storyAudio" src="audio/musique_fête.mp3" type="audio/mp3" autoplay="true"></audio>'+           
          '</div> <audio id="allonFete" src="audio/allons_fete.mp3" type="audio/mp3" autoplay="true"></audio></div></body>');}

);
