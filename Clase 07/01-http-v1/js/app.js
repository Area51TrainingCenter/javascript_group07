angular
	.module("app", [])
	.controller("librosListadoControlador",["$http", function($http){
		/*
			Convención:
				GET		: Todo tipo de consultas
				POST	: Para insertar información
				PUT		: Para actualizar información
				DELETE 	: Para borrar información
		*/
		/*
			this.libros contiene
				[
					{titulo: ..., autor: ..., isbn: ...},
					{titulo: ..., autor: ..., isbn: ...},
					{titulo: ..., autor: ..., isbn: ...}
				]
		*/
		this.libros = [];
		$rootScope.libroSeleccionado = undefined;
		var ref = this;

		$http
			.get("http://area51.tibajodemanda.com/libros/listarTodo")
			.then(function(obj){
				ref.libros = obj.data;
			});

		this.edicion = function(libro) {
			$rootScope.libroSeleccionado = libro;
		}
	}])
	.controller("librosEdicionControlador",["$http", function($http){

	}])