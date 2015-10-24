var app = angular.module("appPrincipal", ["angular-ladda"]);

app.controller("formController", ["$http", "$timeout", function($http, $timeout){
	this.formulario = {};

	this.cargando = false;
	this.mensajeCargando = "";

	this.enviarFormulario = function(){
		this.cargando=true;
		this.mensajeCargando = "Cargando datos. Por favor espere."
		var ref = this;
		$timeout(function(){
			ref.cargando=false;
			ref.mensajeCargando="";
		}, 3000);
		console.log(this.formulario);
	}
}]);