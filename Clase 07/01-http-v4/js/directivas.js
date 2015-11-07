angular
	.module("app.directivas", [])
	.directive('cargador', [function () {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "directivas/cargador.html"
		};
	}])
	.directive("tarjetaLibro", function(){
		return {
			restrict: "E",
			templateUrl: "directivas/tarjeta.html",
			scope: {
				"titulo": "=",
				"autor": "=",
				"lanzamiento": "@",
				"mostrar": "&"
			}
		}
	})