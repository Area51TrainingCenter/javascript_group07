angular
	.module("app", [])
	.factory("globales", function(){
		var obj = {};
		obj.libroSeleccionado = {};
		return obj;
	})
	.controller("librosListadoControlador",["$http", "globales", function($http, globales){
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
		var ref = this;

		$http
			.get("http://area51.tibajodemanda.com/libros/listarTodo")
			.then(function(obj){
				ref.libros = obj.data;
			});

		this.edicion = function(libro) {
			globales.libroSeleccionado = libro 
		}
	}])
	.controller("librosEdicionControlador",["$scope", "$http", "globales", function($scope, $http, globales){

		var ref= this;
		this.libroAEditar = globales.libroSeleccionado;

		/* Observa cualquier cambio en la variable "libroSeleccionado"
			de la factoria "globales"
		*/
	    $scope.$watch(function() { return globales.libroSeleccionado; }, function(newVal, oldVal) {
	       	//Si cambia la variable libroSeleccionado, se actualiza
	       	//la variable "libroAEditar" de este controlador
	       	ref.libroAEditar = newVal;
	    });


	}])