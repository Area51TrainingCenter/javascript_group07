app.controller("clienteListado",["clienteHttp", function(clienteHttp){
		this.vista = "Cliente Listado";
	}]);

app.controller("clienteEdicion",["clienteHttp", function(clienteHttp){
		this.vista = "Cliente Edición";
	}]);

app.controller("clienteNuevo",["clienteHttp", function(clienteHttp){
		this.vista = "Cliente Nuevo";
	}]);

