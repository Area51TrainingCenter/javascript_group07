angular
	.module("app",[
		"firebase"
	])
	.factory("referencia", ["$firebaseArray", function($firebaseArray){

		var ref = new Firebase("https://area51db.firebaseio.com/");

		return $firebaseArray(ref.child("mensajes"));
	}])
	.controller("controlador", ["referencia", function(referencia){
		this.mensajes = referencia;
		this.msg = {};

		this.agregarMensaje = function(){
			this.mensajes.$add(this.msg);
			this.msg = {};
		}

		//referencia.$add({usuario: "sergio", mensaje: "hola mundo"});

		
	}]);