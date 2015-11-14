var app = 
	angular.module("app", 
		[
			"ui.router",
			"ui.load"
		]
	)
  	.config(['$controllerProvider', function ($controllerProvider) {
        app.controller = $controllerProvider.register;
    }])
	.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider
			.state("listado",
				{
					url:"/listado",
					templateUrl: "vistas/listado.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/listado.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("edicion",
				{
					url:"/edicion",
					templateUrl: "vistas/edicion.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/edicion.js"
											   ]);
									}
							  ]
					}				
				}
			)
			.state("nuevo",
				{
					url:"/nuevo",
					templateUrl: "vistas/nuevo.html",
					resolve: {
						deps: ["uiLoad", 
									function(uiLoad){
										return uiLoad.load([
												"js/nuevo.js"
											   ]);
									}
							  ]
					}				
				}
			);

		$urlRouterProvider.otherwise("/listado");
		//$locationProvider.html5Mode(true);
	}]);


	