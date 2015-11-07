angular
	.module("app.servicios", [])
	.service("utiles",["$window", function($window){
		this.confirmacion = function(mensaje) {
			return $window.confirm(mensaje)
		}
	}])