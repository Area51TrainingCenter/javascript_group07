angular
	.module("app.factorias", [])
	.factory("librosHttp", ["$q", "$timeout", function($q, $timeout){
		var obj = {};

		var libros = [
			{
				id: 1,
				titulo: "La Ciudad y Los Perros",
				autor: "Mario Vargas Llosa",
				isbn: "133-888455-aba"
			},
			{
				id:2,
				titulo: "Yawar Fiesta",
				autor: "José María Arguedas",
				isbn: "455-6666-art"
			}
		];		

		obj.listar = function(){

			return libros;
		};

		obj.detallar = function(id) {
			var libros = [
				{
					id:2,
					titulo: "Yawar Fiesta",
					autor: "José María Arguedas",
					isbn: "455-6666-art"
				}
			];

			return libros;
		}

		obj.grabar = function(datos){
			var defer = $q.defer();
			libros.push(datos);

			$timeout(function(){
				defer.resolve();
			}, 1000);

			return defer.promise;
		}

		obj.eliminar = function(id) {
			var defer = $q.defer();
			var itemAEliminar = -1;

			for(var i=0; i<libros.length; i++) {
				if(libros[i].id == id) {
					itemAEliminar = i;
				}
			}

			libros.splice(itemAEliminar,1);

			$timeout(function(){
				defer.resolve();
			}, 1000);

			return defer.promise;			
		}

		return obj;
	}])