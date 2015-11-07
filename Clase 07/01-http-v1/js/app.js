angular
	.module("app", ['angularSpinner'])
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
		this.estaCargando = true;
		var ref = this;

		$http
			.get("http://area51.tibajodemanda.com/libros/listarTodo")
			.then(function(obj){
				ref.libros = obj.data;
				ref.estaCargando=false;
			});

		this.edicion = function(libro) {
			globales.libroSeleccionado = libro 
		}
	}])
	.controller("librosEdicionControlador",["$window", "$scope", "$http", "globales", function($window, $scope, $http, globales){

		var ref= this;
		/*
			this.libroAEditar = {id: ..., titulo: ..., autor: ..., isbn: ...}
		*/
		this.libroAEditar = globales.libroSeleccionado;

		/* Observa cualquier cambio en la variable "libroSeleccionado"
			de la factoria "globales"
		*/
	    $scope.$watch(function() { return globales.libroSeleccionado; }, function(newVal, oldVal) {
	       	//Si cambia la variable libroSeleccionado, se actualiza
	       	//la variable "libroAEditar" de este controlador
	       	ref.libroAEditar = newVal;
	    });

	    this.actualizar = function(){
	    	$http
	    		.put("http://area51.tibajodemanda.com/libros/actualizar/"+this.libroAEditar.id, this.libroAEditar)
	    		.then(function(){
	    			ref.libroAEditar = {};
	    		})
	    		.catch(function(err){
	    			console.log(err);
	    		})
	    };

	    this.eliminar = function() {
	    	if($window.confirm("¿Está seguro de querer eliminar?")) {
		    	$http
		    		.delete("http://area51.tibajodemanda.com/libros/eliminar/"+this.libroAEditar.id)
		    		.then(function(){
		    			ref.libroAEditar = {};
		    		})
		    		.catch(function(err){
		    			console.log(err);
		    		})
		    	}
	    }
	}])
	.controller("librosNuevoControlador",["$http", function($http){
		var ref= this;

		this.libroNuevo = {};

	    this.grabar = function(){
	    	$http
	    		.post("http://area51.tibajodemanda.com/libros/crear",this.libroNuevo)
	    		.then(function(){
	    			ref.libroNuevo = {};
	    		})
	    		.catch(function(err){
	    			console.log(err);
	    		})
	    };
	}])