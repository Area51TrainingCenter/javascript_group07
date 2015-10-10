process.title = "Chat Area51";

//Puerto para la conexión
var webSocketServidorPuerto = 8090;

//Incluir librerías de websocket y de http
var webSocketServidor = require("websocket").server;
var http = require("http");

//Este arreglo guarda todas las conexiones
var clientes = [];

var servidor = http.createServer(function(req, res){

});

servidor.listen(webSocketServidorPuerto, function(){
	console.log("El servidor está funcionando en el puerto " + webSocketServidorPuerto);
});

var wsServidor = new webSocketServidor({
	httpServer: servidor
});

function pedidoConexion(request){
	console.log((new Date()) + " Conexión desde " + request.origin);

	var conexion = request.accept(null, request.origin);

	var indice = clientes.push(conexion) - 1;

	var nombreUsuario = false;

	console.log("Usuario aceptado");

	conexion.on("message", function(msg){
		if(!nombreUsuario) {
			nombreUsuario = msg.utf8Data;

			var data = {accion: "conectado", usuario: nombreUsuario};

			var json = JSON.stringify(data);

			console.log(data);

			//Enviar data a todas las conexiones
			for(var i=0; i< clientes.length; i++) {
				clientes[i].send(json);
			}

		}
	});

	conexion.on("close", function(conexion){
		if(nombreUsuario){
			clientes.splice(indice,1);

			var data = {accion:"desconectado", usuario: nombreUsuario};

			var json = JSON.stringify(data);

			for(var i=0; i<clientes.length; i++) {
				clientes[i].send(json);
			}
		}
	});




}


wsServidor.on("request", pedidoConexion);





