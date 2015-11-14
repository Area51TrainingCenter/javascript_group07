app.controller("mascotaListado",["mascotaHttp", function(mascotaHttp){
		this.vista = "Mascota Listado";
	}]);

app.controller("mascotaEdicion",["mascotaHttp", function(mascotaHttp){
		this.vista = "Mascota Edición";
	}]);

app.controller("mascotaNuevo",["mascotaHttp", function(mascotaHttp){
		this.vista = "Mascota Nuevo";
	}])

