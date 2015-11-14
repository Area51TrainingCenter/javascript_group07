angular
	.module("app",[
		"firebase"
	])
	.factory("referencia", ["$firebaseObject", function($firebaseObject){

		var ref = new Firebase("https://area51db.firebaseio.com/");
		var obj = {};
		obj.fireobj = function(perfil) {
			return $firebaseObject(ref.child("perfiles/" + perfil));
		}

		return obj;
	}])
	.controller("controlador", ["referencia", function(referencia){

		var ref = this;
		this.perfilProgramador = referencia.fireobj("programador");
		this.perfilDisenador = referencia.fireobj("disenador");
		this.perfilEjecutivo = referencia.fireobj("ejecutivo");
		this.perfilCommunity = referencia.fireobj("community");

		this.perfilProgramador.$loaded(function(){
			ref.perfilProgramador.nombre = "Sergio";
			ref.perfilProgramador.especialidad = "Javascript";

			ref.perfilProgramador.$save();
			console.log(ref.perfilProgramador);
		});

		this.perfilDisenador.$loaded(function(){
			ref.perfilDisenador.nombre = "Yasmine";
			ref.perfilDisenador.expertise = "Videos";
			ref.perfilDisenador.experiencia = "10 años";
			ref.perfilDisenador.edad = 25;
			ref.perfilDisenador.$save();
			
			console.log(ref.perfilDisenador);
		})		

		
	}]);