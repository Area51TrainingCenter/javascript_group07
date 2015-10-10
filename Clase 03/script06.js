window.WebSocket = window.WebSocket || window.MozWebSocket;

if(!window.WebSocket) {
	console.log("Actualiza tu navegador");
} else {
	//Creación de objeto de conexión al websocket
	var conexion = new WebSocket("ws://127.0.0.1:8090");

	//Este evento onopen se ejecuta cuando efectivamente nos hemos conectado al servidor de websocket
	conexion.onopen = function(){
		var formulario = document.getElementById("formulario");

		//Si la conexión ha sido bien hecha, se muestra el formulario para ingresar el nombre de usuario
		formulario.classList.add("mostrar");
	}

	//Este evento se ejecuta cuando llega algún mensaje
	conexion.onmessage = function(msg) {
		console.log(msg);
	}


	function enviarUsuario(e){
		e.preventDefault();

		var txtUsuario = document.getElementById("txtNombreUsuario");

		var nombreUsuario = txtUsuario.value;

		if(nombreUsuario){
			conexion.send(nombreUsuario);
		}


	}

	conexion.onbeforeunload = function(){
		conexion.onclose = function(){};
		conexion.close();
	}

	var btnIngresar = document.getElementById("btnIngresar");
	btnIngresar.addEventListener("click", enviarUsuario);














}