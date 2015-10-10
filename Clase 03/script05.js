//Arreglo de celdas de la tabla
var celdas = document.getElementsByTagName("td");

//Variable de turnos
var turno = 1;  //1: X    2: 0

//Arreglo de resultados
var resultados = new Array(9);

function marcarCelda(evento){
	//console.log("Celda marcada", evento.target.id);
	evento.target.removeEventListener("click", marcarCelda);
	evento.target.classList.add("sinCursor");

	var letra = (turno==1) ? "X" : "0";

	evento.target.innerHTML = (turno==1) ? "X" : "0";
	turno = (turno==1) ? 2 : 1;

	var id = evento.target.id;
	var numCelda = parseInt(id.substring(1));

	//console.log(numCelda);

	resultados(numCelda) = letra;

	//Verificar si alguien ganó
	verificarResultado();





	/*if(turno==1) {
		evento.target.innerHTML = "X";
	} else {
		evento.target.innerHTML = "0";
	}*/
}


//Asignación de evento Click a cada celda
for(var i=0; i<celdas.length; i++){
	celdas[i].addEventListener("click", marcarCelda);
}