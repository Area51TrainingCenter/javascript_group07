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
	    
	    this.mensaje = function(){
	    	alert("Mensaje de prueba");
	    }

		this.edicion = function(libro) {
			globales.libroSeleccionado = libro 
		}
	}])
	.controller("librosEdicionControlador",["$window", "$scope", "httpLibros", "globales", "utiles", "$stateParams", "$state", function($window, $scope, httpLibros, globales, utiles, $stateParams, $state){

		var ref= this;
		this.libroAEditar;

		var id = $stateParams.id;

		httpLibros
			.detallar(id)
			.then(function(respuesta){
				ref.libroAEditar = respuesta.data[0];
			})
			.catch(function(err){
				console.log(err);
			})


	    this.actualizar = function(){
	    	httpLibros
	    		.actualizar(this.libroAEditar)
	    		.then(function(){
	    			$state.go("listado");
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
						$state.go("listado");
		    		})
		    		.catch(function(err){
		    			console.log(err);
		    		})
		    	}
	    }


	}])
	.controller("librosNuevoControlador",["httpLibros", "$state", function(httpLibros, $state){
		var ref= this;

		this.libroNuevo = {};

	    this.grabar = function(){
	    	httpLibros
	    		.crear(this.libroNuevo)
	    		.then(function(){
					$state.go("listado");   	
	    		})
	    		.catch(function(err){
	    			console.log(err);
	    		})
	    };
	}])