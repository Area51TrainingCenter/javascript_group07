function mostrarTodo(){
	lista.innerHTML = "";
	listaEmpleadosFiltrada = empleados;

	var tr, td1, td2;

	for(var i=0; i<listaEmpleadosFiltrada.length; i++) {

		td1 = document.createElement("td");
		td1.innerHTML = listaEmpleadosFiltrada[i].nombre;

		td2 = document.createElement("td");
		td2.innerHTML = listaEmpleadosFiltrada[i].area;

		tr = document.createElement("tr");
		tr.appendChild(td1);
		tr.appendChild(td2);

		lista.appendChild(tr);
	}

}

function listaActualizada(){
	var arr = new Array();

	if(filtro.texto!="") {
		for(var i=0; i<empleados.length; i++){
			if((empleados[i].nombre.indexOf(filtro.texto)!=-1) || (empleados[i].area.indexOf(filtro.texto)!=-1)) {
				arr.push(empleados[i]);
			}
		}
	} else {
		arr = empleados;
	}


	return arr;
}

function actualizarLista(){
	lista.innerHTML = "";
	listaEmpleadosFiltrada = listaActualizada();

	var tr, td1, td2;

	for(var i=0; i<listaEmpleadosFiltrada.length; i++) {

		td1 = document.createElement("td");
		td1.innerHTML = listaEmpleadosFiltrada[i].nombre;

		td2 = document.createElement("td");
		td2.innerHTML = listaEmpleadosFiltrada[i].area;

		tr = document.createElement("tr");
		tr.appendChild(td1);
		tr.appendChild(td2);

		lista.appendChild(tr);
	}
}


function cambios(cambiosRealizados) {
	cambiosRealizados.forEach(function(cambio){
		console.log(cambio);
		/*console.log(cambio.type);
		console.log(cambio.oldValue);
		console.log(cambio.name)*/
	});

	actualizarLista();
}

function filtrar(){
	filtro.texto = txtNombre.value;
}

var empleados = [
	{nombre: "Sergio Hidalgo", area:"Desarrollo"},
	{nombre: "Andrea Hidalgo", area:"Diseño"},
	{nombre: "Mónica Véliz", area:"Administración"},
	{nombre: "Ana Gamarra", area:"ventas"}
];

var filtro={};

var txtNombre = document.getElementById("txtNombre");
var lista = document.getElementById("lista");

txtNombre.addEventListener("keyup", filtrar);

Object.observe(filtro, cambios);

mostrarTodo();


