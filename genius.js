$(document).ready(function() { 

	$("#start").click(function(){
		startGame();
	});
	
	$("#restart").click(function(){
		if(!$("#restart").hasClass("disabled"))
			resetGame();
	});
	
	$(".frame").click(function(){
	    if (openClick)
	        blink($(this).attr("rel"));
	})
});

var openClick = false;
var moves = new Array();
var queue = new Queue();

function startGame() {
	var rand = Math.floor(Math.random()*4)+1;
	moves.push(rand);
	executeMoves();
	
	$("#reiniciar").removeClass("disabled");
}

function resetGame() {
	$("#restart").addClass("disabled");
	moves.splice(0, moves.length);
}


function executeMoves() {
    queue.add(function(){ openClick = false; queue.next(); });
    for(var i=0; i<moves.length; i++)
        queue.add(fnBlink(moves[i]));
        
    queue.add(function(){ openClick = true; queue.next(); });
}

function fnBlink(i) {
    return function(){
        $('.frame[rel="'+i+'"]').animate({ opacity:1 },100);
        $('.frame[rel="'+i+'"]').animate({ opacity:0.35 },300, function(){ queue.next(); });
    };        
}

function blink(i) {
    (fnBlink(i))();
}

