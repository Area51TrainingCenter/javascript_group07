angular
	.module("app", [
			"ngResource"
		])
	.factory("recursos", ["$resource", function($resource){
		return $resource(
			"http://vet.tibajodemanda.com/clientes/:id",
			{
				id: "@idCliente"
			},
			{
				update:{
					method: "PUT"
				}
			}
		);
	}])
	.controller("controlador", ["recursos", function(recursos){
		var ref = this;
		this.clientes = [];
		this.cliente = {};
		this.objCliente = {nombre:'Sergio'};

		/*Trae todos los resultados*/
		recursos.query(
			function(registros) {
				ref.clientes = registros;
			}
		);

		/*Trae un solo resultado*/
		recursos.get({id: 1}, function(reg) {
			ref.objCliente = reg;
		});

		this.actualizar = function(cliente) {
			/*var entidad = new recursos();
			entidad.idCliente = cliente.idCliente;
			entidad.nombre = cliente.nombre;
			entidad.correo = cliente.correo;
			entidad.sexo = cliente.sexo;*/

			cliente.$save();

			/*recursos.update(cliente, function(registro) {
				console.log(registro);
			});*/ 
		}

		this.editar = function(cliente) {
			ref.cliente = cliente;
		}

		this.eliminar = function(cliente) {
			cliente.$remove();
			/*recursos.remove({}, cliente, function(registro){
				console.log("registro eliminado");
			})*/
		}





		/*$http
			.get("url")
			.then(function(respuesta){

			})
			.catch(function(err){

			})*/

	}])