//Arreglo de celdas de la tabla
var celdas = document.getElementsByTagName("td");

//Variable de turnos
var turno = 1;  //1: X    2: 0

//Arreglo de resultados
var resultados = new Array(9);

//Indica si el juego terminó
var finJuego = false;

function verificarResultado(letra){
	var comb1 = resultados[0]==letra && resultados[1]==letra && resultados[2]==letra;
	var comb2 = resultados[3]==letra && resultados[4]==letra && resultados[5]==letra;
	var comb3 = resultados[6]==letra && resultados[7]==letra && resultados[8]==letra;
	var comb4 = resultados[0]==letra && resultados[3]==letra && resultados[6]==letra;
	var comb5 = resultados[1]==letra && resultados[4]==letra && resultados[7]==letra;
	var comb6 = resultados[2]==letra && resultados[5]==letra && resultados[8]==letra;
	var comb7 = resultados[0]==letra && resultados[4]==letra && resultados[8]==letra;
	var comb8 = resultados[2]==letra && resultados[4]==letra && resultados[6]==letra;

	var noFinJuego = false;

	if(comb1 || comb2 || comb3 || comb4 || comb5 || comb6 || comb7 || comb8){
		console.log("Hay un ganador. Ganó la " + letra);
		finJuego = true;
	} else {
		for(var i=1; i<9; i++) {
			if(!resultados[i]){
				noFinJuego = true;
			}
		};

		if(!noFinJuego) {
			console.log("Hay un empate");
			finJuego = true;
		}
	}



}

function marcarCelda(evento){
	if(!finJuego) {
		//console.log("Celda marcada", evento.target.id);
		evento.target.removeEventListener("click", marcarCelda);
		evento.target.classList.add("sinCursor");

		var letra = (turno==1) ? "X" : "0";

		evento.target.innerHTML = (turno==1) ? "X" : "0";
		turno = (turno==1) ? 2 : 1;

		var id = evento.target.id;
		var numCelda = parseInt(id.substring(1));

		//console.log(numCelda);

		resultados[numCelda] = letra;

		//Verificar si alguien ganó
		verificarResultado(letra);





		/*if(turno==1) {
			evento.target.innerHTML = "X";
		} else {
			evento.target.innerHTML = "0";
		}*/


	}

}


//Asignación de evento Click a cada celda
for(var i=0; i<celdas.length; i++){
	celdas[i].addEventListener("click", marcarCelda);
}