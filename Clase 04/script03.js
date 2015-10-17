var modelo = [];

function actualizarLista(){
	var tr, td;

	lista.innerHTML = "";

	for(var i=0; i<modelo.length; i++) {
		td = document.createElement("td");
		td.innerHTML = modelo[i];

		tr = document.createElement("tr");
		tr.appendChild(td);

		lista.appendChild(tr);
	}
}

function cambios(cambiosRealizados) {
	actualizarLista();
}

function agregarNombre(e) {
	var nombre = txtNombre.value;
	modelo.push(nombre);
	txtNombre.value = "";
}


Object.observe(modelo, cambios);

var txtNombre = document.getElementById("txtNombre");
var lista = document.getElementById("lista");
var btnIngresar = document.getElementById("btnIngresar");
btnIngresar.addEventListener("click", agregarNombre);