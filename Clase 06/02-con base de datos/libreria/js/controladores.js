angular
	.module("app.controladores", [])
	.controller("listadoController", ["librosHttp", "utiles", "$window", "$stateParams", function(librosHttp, utiles, $window, $stateParams){
		var pagina = $stateParams.pagina, tamano = $stateParams.tamano;
		var ref = this;

		this.paginas = [];

		this.titulo = "Vista Listado";

		librosHttp
			.listar(pagina, tamano)
			.then(function(resultado){
				ref.libros = resultado.data;
			})
			.catch(function(err){
				console.log(err);
			});

		librosHttp
			.cantidad()
			.then(function(resultado){
				var totalRegistros = resultado.data.cantidad;
				var totalPaginas = totalRegistros>0 ? Math.ceil(totalRegistros/5) : 1;
				for(var i=0; i<totalPaginas; i++) {
					ref.paginas.push(i+1);
				}
			})

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
		var ref = this;

		librosHttp
			.detallar($stateParams.id)
			.then(function(resultado){
				ref.datos = resultado.data[0];
			})
			.catch(function(err){
				console.log(err);
			})



		this.grabar = function(){
			librosHttp
				.actualizar($stateParams.id, this.datos)
				.then(function(resultado){
					$state.go("listado", {pagina: 1, tamano:5});
				})
				.catch(function(err){
					console.log(err);
				})				
		}
	}])
	.controller("nuevoController", ["librosHttp", "$state", function(librosHttp, $state){
		this.titulo = "Vista Nuevo";
		this.datos = {};
		
		this.grabar = function(){
			librosHttp
				.crear(this.datos)
				.then(function(){
					$state.go("listado", {pagina: 1, tamano:5});
				})
				.catch(function(err){
					console.log(err)
				})

		}
	}])