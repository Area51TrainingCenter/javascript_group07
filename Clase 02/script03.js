function setearValor(){
	var input = document.getElementById("ciudad");
	var valorCiudad = input.value;

	localStorage.ciudad = valorCiudad;
}

function borrar(){
	localStorage.removeItem("ciudad");
}

if(window.localStorage) {
	/*
	localStorage.setItem("ciudad", "Lima");
	localStorage.getItem("ciudad");

	localStorage.ciudad = "Lima";
	var ciudad = localStorage.ciudad;
	*/

	if(localStorage.ciudad != undefined) {
		document.getElementById("ciudadActual").innerHTML = localStorage.ciudad;
	}


	var btn = document.getElementById("btn");
	btn.addEventListener("click", setearValor);

	var btnBorrar = document.getElementById("borrar");
	btnBorrar.addEventListener("click", borrar);






}