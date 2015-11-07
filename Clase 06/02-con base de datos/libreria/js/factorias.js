angular
	.module("app.factorias", [])
	.factory("librosHttp", ["$http", function($http){

		var rutaApi = "http://area51.tibajodemanda.com",
			rutaListar = rutaApi + "/listar/:pagina/:tamano",
			rutaCrear = rutaApi +  "/crear",
			rutaDetallar = rutaApi + "/detallar/:id",
			rutaActualizar = rutaApi + "/actualizar/:id",
			rutaEliminar = rutaApi + "/eliminar/:id",
			rutaCantidad = rutaApi + "/cantidad";

		var obj = {};

		obj.listar = function(pagina, tamano){
			return $http.get(rutaListar.replace(":pagina", pagina).replace(":tamano", tamano));
		};

		obj.detallar = function(id) {
			return $http.get(rutaDetallar.replace(":id", id));
		}

		obj.crear = function(datos) {
			return $http.post(rutaCrear, datos);
		}

		obj.actualizar = function(id, datos) {
			return $http.put(rutaActualizar.replace(":id", id), datos);
		}
		
		obj.eliminar = function(id) {
			return $http.delete(rutaEliminar.replace(":id", id));
		}

		obj.cantidad = function(){
			return $http.get(rutaCantidad);
		}

		return obj;
	}])