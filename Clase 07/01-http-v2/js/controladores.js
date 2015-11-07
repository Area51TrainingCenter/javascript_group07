angular
	.module("app.controladores", [])
	.controller("librosListadoControlador",["httpLibros", "globales", "$scope", function(httpLibros, globales, $scope){

		this.libros = [];
		this.estaCargando = true;
		var ref = this;

		httpLibros
			.listar()
			.then(function(obj){
				httpLibros.libros = obj.data;
				ref.libros = obj.data;
				ref.estaCargando=false;
			});

	    $scope.$watch(function() { return httpLibros.libros; }, function(nuevo, anterior) {
	       	ref.libros = nuevo;
	    });

		this.edicion = function(libro) {
			globales.libroSeleccionado = libro 
		}
	}])
	.controller("librosEdicionControlador",["$window", "$scope", "httpLibros", "globales", "utiles", function($window, $scope, httpLibros, globales, utiles){

		var ref= this;
		this.libroAEditar = globales.libroSeleccionado;

	    $scope.$watch(function() { return globales.libroSeleccionado; }, function(newVal, oldVal) {
	       	//Si cambia la variable libroSeleccionado, se actualiza
	       	//la variable "libroAEditar" de este controlador
	       	ref.libroAEditar = newVal;
	    });

	    this.actualizar = function(){
	    	httpLibros
	    		.actualizar(this.libroAEditar)
	    		.then(function(){
	    			ref.libroAEditar = {};
	    		})
	    		.catch(function(err){
	    			console.log(err);
	    		})
	    };

	    this.eliminar = function() {
	    	if(utiles.confirmacion("¿Está seguro de querer eliminar")) {
		    	httpLibros
		    		.eliminar(this.libroAEditar)
		    		.then(function(){
		    			ref.libroAEditar = {};
		    			/* 
							Esto es para actualizar el listado 
							de la izquierda
		    			*/
		    			httpLibros
		    				.listar()
		    				.then(function(respuesta){
		    					httpLibros.libros = respuesta.data;
		    				})

		    		})
		    		.catch(function(err){
		    			console.log(err);
		    		})
		    	}
	    }
	}])
	.controller("librosNuevoControlador",["httpLibros", function(httpLibros){
		var ref= this;

		this.libroNuevo = {};

	    this.grabar = function(){
	    	httpLibros
	    		.crear(this.libroNuevo)
	    		.then(function(){
	    			ref.libroNuevo = {};
	    			httpLibros
	    				.listar()
	    				.then(function(respuesta){
	    					httpLibros.libros = respuesta.data;
	    				})	    	
	    		})
	    		.catch(function(err){
	    			console.log(err);
	    		})
	    };
	}])