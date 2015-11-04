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

function switchRobe(){
	var idChildren = $("#pr").children().attr('id');
	$("."+idChildren).html($("#"+idChildren));
	$("#"+idChildren).attr('class', 'objet');
}
$("#content1 .objet").bind('click',function(event){

	if($(this).parents("#pr").length == 0){
		if($("#pr").children().length > 0){
			switchRobe();
		}
		$("#pr").html(this);
		$(this).attr("class", "robePlaced");
	}else{
		switchRobe();
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
	if($(ev.toElement).attr('id') == "pr"){
		$(ev.srcElement).html(robe);
		$(robe).attr("class", "robePlaced");
	}
	
}