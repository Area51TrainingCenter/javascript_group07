angular
	.module("app", 
			[	"ui.router", 
				"app.controladores",
				"app.factorias",
				"app.servicios"
			])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

	/*	$stateProvider.state( 
			nombre del estado, 
			url que se muestra, 
			plantilla) */
		$stateProvider
			.state("bienvenido",
				   {url:"/bienvenido",
				   templateUrl: "vistas/bienvenido.html"
			})
			.state("listado",
				   {url: "/listado",
					templateUrl: "vistas/listado.html",
					controller: "listadoController",
					controllerAs: "ctrlLibros"
			})
			.state("edicion",
				   {url: "/edicion/:id",
					templateUrl: "vistas/edicion.html",
					controller: "edicionController",
					controllerAs: "ctrlLibros"
			})
			.state("nuevo",
				   {url: "/nuevo",
					templateUrl: "vistas/nuevo.html",
					controller: "nuevoController",
					controllerAs: "ctrlLibros"
			});
	}])
	.run(function($state){
		$state.go("bienvenido");
	});