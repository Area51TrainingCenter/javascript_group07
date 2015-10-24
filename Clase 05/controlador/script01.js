var app = angular.module("appPrincipal", []);

app.controller("formController", ["$http", function($http){
	this.formulario = {};

	this.enviarFormulario = function(){
		//console.log(this.formulario);
		$http.post("http://api.com/insertar", this.formulario)
			.then(function(data){
				console.log(data);
			})
			.catch(function(error){
				console.log(error);
			});
	}
}]);