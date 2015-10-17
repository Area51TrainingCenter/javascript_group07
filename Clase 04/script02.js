var modelo = {};

//Callback para dejar de observar
function dejarObservar(){
	Object.unobserve(modelo, cambios);
}

//Callback para observar una variable
function observar(){
	Object.observe(modelo, cambios);
}

//Callback para revisar los cambios en la variable observada
function cambios(cambiosRealizados) {
	cambiosRealizados.forEach(function(cambio){
		console.log("Tipo de Cambio",cambio.type);
		console.log("Nombre", cambio.name);
		console.log("Valor anterior", cambio.oldValue);
	})
}

//Botón para observar variable "modelo"
var btnObservar = document.getElementById("btnObservar");
btnObservar.addEventListener("click", observar);

//Botón para dejar de observar variable "modelo"
var btnNoObservar = document.getElementById("btnNoObservar");
btnNoObservar.addEventListener("click", dejarObservar);






