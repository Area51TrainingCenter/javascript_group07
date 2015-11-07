angular
	.module("app.factorias", [])
	.factory("globales", function(){
		var obj = {};
		obj.libroSeleccionado = {};
		return obj;
	})
	.factory("httpLibros", ["$http", function($http){
		var obj = {};
		obj.libros = [];

		obj.crear = function(datos) {
			return $http.post("http://area51.tibajodemanda.com/libros/crear",datos);
		};

		obj.actualizar = function(datos) {
			return $http.put("http://area51.tibajodemanda.com/libros/actualizar/"+datos.id, datos);
		};

		obj.eliminar = function(datos) {
			return $http.delete("http://area51.tibajodemanda.com/libros/eliminar/"+datos.id);
		};

		obj.listar = function() {
			return $http.get("http://area51.tibajodemanda.com/libros/listarTodo");
		};

		return obj;




	}])