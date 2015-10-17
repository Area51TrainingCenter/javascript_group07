var modelo = {};

function actualizacion(e){
	salidaNombre.innerHTML = txtNombre.value;
}


var txtNombre = document.getElementById("txtNombre");
var salidaNombre = document.getElementById("salidaNombre");

txtNombre.addEventListener("keyup", actualizacion);