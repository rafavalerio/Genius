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
	        verifyUserClick($(this).attr('rel'));
	        
	})
	
	$(document).keyup(function(event){
	    if (openClick)
    	    switch(event.which) {
                case 87: verifyUserClick(1); break; // verde W-01
                case 69: verifyUserClick(2); break; // vermelho E-02
                case 83: verifyUserClick(3); break; // amarelo S-03
                case 68: verifyUserClick(4); break; // azul D-04
    	    }
	})
});

var openClick = false;
var moves = new Array();
var queue = new Queue();
var user = 0;

function startGame() {
	newMove();
	$("#reiniciar").removeClass("disabled");
}

function resetGame() {
    openClick = false;
	$("#restart").addClass("disabled");
	moves.splice(0, moves.length);
}

function newMove() {
    var rand = Math.floor(Math.random()*4)+1;
	moves.push(rand);
	user = 0;
	executeMoves();
}

function executeMoves() {
    queue.clear();
    openClick = false;
    for(var i=0; i<moves.length; i++)
        queue.add(fnBlink(moves[i]));
        
    queue.add(function(){ openClick = true; queue.next(); });
}

function fnBlink(frmi) {
    return function(){
        $('audio[rel="'+frmi+'"]')[0].play();
        $('.frame[rel="'+frmi+'"]').animate({ opacity:1 },100);
        $('.frame[rel="'+frmi+'"]').animate({ opacity:0.35 },300, function(){ queue.next(); });
    };        
}

function blink(frmi) {
    (fnBlink(frmi))();
}

function verifyUserClick(frame) {
    blink(frame);
    if (frame == moves[user]) {
        if (++user == moves.length)
            setTimeout(newMove, 700);
    } else {
        alert("YOU LOSE\n"+moves.length+" Moves");
        resetGame();
    }
}