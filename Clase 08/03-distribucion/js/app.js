var app = 
	angular.module("app", 
		[
			"ui.router",
			"ui.load"
		]
	)
  	.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
    }])
	.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider
			.state("app",
				{
					url:"/app",
					templateUrl: "vistas/base.html"
				}
			)
			.state("app.mascotasListado",
				{
					url:"/mascotas/listado",
					templateUrl: "vistas/mascotas/listado.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/mascotas/mascotaControlador.js",
												"js/mascotas/mascotaFactoria.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("app.mascotasEdicion",
				{
					url:"/mascotas/edicion",
					templateUrl: "vistas/mascotas/edicion.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/mascotas/mascotaControlador.js",
												"js/mascotas/mascotaFactoria.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("app.mascotasNuevo",
				{
					url:"/mascotas/nuevo",
					templateUrl: "vistas/mascotas/nuevo.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/mascotas/mascotaControlador.js",
												"js/mascotas/mascotaFactoria.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("app.clientesListado",
				{
					url:"/clientes/listado",
					templateUrl: "vistas/clientes/listado.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/clientes/clienteControlador.js",
												"js/clientes/clienteFactoria.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("app.clientesEdicion",
				{
					url:"/clientes/edicion",
					templateUrl: "vistas/clientes/edicion.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/clientes/clienteControlador.js",
												"js/clientes/clienteFactoria.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("app.clientesNuevo",
				{
					url:"/clientes/nuevo",
					templateUrl: "vistas/clientes/nuevo.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/clientes/clienteControlador.js",
												"js/clientes/clienteFactoria.js"
											   ]);
									}
							  ]
					}				
				}
			)



		$urlRouterProvider.otherwise("/app");
		//$locationProvider.html5Mode(true);
	}]);


	