/* Llamada desde la misma etiqueta  */
function botonPresionado(){
	alert("Ok. Alguien presionó el botón");
}


function botonEvento(evento){
	alert("Botón Evento presionado");
	console.log(evento);
}

var referenciaBoton = document.getElementById("botonEvento");
referenciaBoton.addEventListener("click", botonEvento);