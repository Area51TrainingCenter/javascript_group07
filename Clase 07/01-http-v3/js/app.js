angular
	.module("app", 
		[
			'angularSpinner',
			"app.controladores",
			"app.factorias",
			"app.servicios",
			"app.directivas",
			"ui.router"
		])
	.config(["$stateProvider", function($stateProvider){
		$stateProvider
			.state(
				"bienvenido",
				{	
					url: "/bienvenido",
					templateUrl: "vistas/bienvenida.html"
				}
			)
			.state(
				"listado",
				{
					url: "/listado",
					templateUrl: "vistas/listado.html",
					controller: "librosListadoControlador",
					controllerAs: "ctrlListado"
				}
			)
			.state(
				"edicion",
				{
					url: "/edicion/:id",
					templateUrl: "vistas/edicion.html",
					controller: "librosEdicionControlador",
					controllerAs: "ctrlEdicion"
				}
			)
			.state(
				"nuevo",
				{
					url: "/nuevo",
					templateUrl: "vistas/nuevo.html",
					controller: "librosNuevoControlador",
					controllerAs: "ctrlNuevo"
				}
			)
	}])