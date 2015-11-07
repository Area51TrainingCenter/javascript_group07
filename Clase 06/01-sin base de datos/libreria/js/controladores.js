angular
	.module("app.controladores", [])
	.controller("listadoController", ["librosHttp", "utiles", "$window", function(librosHttp, utiles, $window){
		this.titulo = "Vista Listado";

		this.libros = librosHttp.listar();

		this.eliminar = function(id){
			if(utiles.confirmacion("¿Está seguro de querer eliminar?")){
					librosHttp
						.eliminar(id)
						.then(function(){
							//$window.location.href="";
						})
						.catch(function(err){
							console.log(err);
						})
			};
		}
	}])
	.controller("edicionController", ["$stateParams", "librosHttp", "$state", function($stateParams, librosHttp, $state){
		this.titulo = "Vista Edición"
		this.libros = librosHttp.listar();
		
		this.datos = {};

		for(var i=0; i<this.libros.length; i++) {
			if(this.libros[i].id == $stateParams.id) {
				this.datos = this.libros[i];
			}
		}

		this.grabar = function(){
			for(var i=0; i<this.libros.length; i++) {
				if(this.libros[i].id == $stateParams.id) {
					this.libros[i].titulo = this.datos.titulo;
					this.libros[i].autor = this.datos.autor;
					this.libros[i].isbn = this.datos.isbn;
				}
			}

			$state.go("listado");
		}
	}])
	.controller("nuevoController", ["librosHttp", "$state", function(librosHttp, $state){
		this.titulo = "Vista Nuevo";
		this.datos = {};
		
		this.grabar = function(){
			librosHttp
				.grabar(this.datos)
				.then(function(){
					$state.go("listado");
				})
				.catch(function(err){
					console.log(err)
				})

		}
	}])