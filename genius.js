$(document).ready(function() { 

	var jogadas = new Array();
	
	$("#iniciar").click(function(){
		iniciaContador();
	});
	
	$("#reiniciar").click(function(){
		if(!$("#reiniciar").hasClass("disabled"))
			resetaJogadas();
	});
	
	function iniciaContador() {
		var rand = Math.floor(Math.random()*5)
		jogadas.push(rand);
		$("#reiniciar").removeClass("disabled");
		alert(jogadas);
	}
	
	function resetaJogadas() {
		$("#reiniciar").addClass("disabled");
		alert("Começando de novo!");
		jogadas.splice(0, jogadas.length);
	}
	
});