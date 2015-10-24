var app = angular.module("appPrincipal", []);

app.controller("formController", ["$http", function($http){
	this.formulario = {};

	this.enviarFormulario = function(){
		console.log(this.formulario);
	}
}]);