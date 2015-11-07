angular
	.module("app.directivas", [])
	.directive('cargador', [function () {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "directivas/cargador.html"
		};
	}])