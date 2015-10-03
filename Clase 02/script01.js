		/* Definición de clase */
		function Perro(nombre, raza, tamano, entrenado, edad, color, foto, ladrido){

			/* this es el contexto */
			
			/* Definición de atributos */		
			this.nombre = nombre;
			this.raza = raza;
			this.tamano = tamano;
			this.entrenado = entrenado;
			this.edad = edad;
			this.foto = foto;
			this.ladrido = ladrido;
			/* Asignado valor por defecto */
			this.color = color || "Blanco";

			/* Definición de métodos */
			this.nombreDelPerro = function() {
				return this.nombre;
			}

			this.ladrar = function(){
				var audio = document.createElement("audio");
				audio.src = this.ladrido;

				return audio.play();
			}
		}

		function mostrarInfo(){
			alert("funciona");
		}


		/* Creación de arreglo de objetos */
		var arrObjPerros = [];
		arrObjPerros.push(new Perro("Dandy", "Siberiano", "Mediano", true, 13, "", "foto01.jpg", "guau.mp3"));
		arrObjPerros.push(new Perro("Tati", "Siberiano", "Mediano", true, 13, "", "foto02.jpg", "guau.mp3"));
		arrObjPerros.push(new Perro("Dana", "Siberiano", "Mediano", true, 13, "", "foto03.jpg", "guau.mp3"));
		arrObjPerros.push(new Perro("Tabata", "Siberiano", "Mediano", true, 13, "", "foto04.jpg", "guau.mp3"));


		/* Creación de tabla */
		var tabla = document.createElement("table");
		/* Añadir clase a etiqueta Table */
		tabla.className = "table table-striped";

		/* Creación del tbody */
		var tbody = document.createElement("tbody");

		
		for(var ind=0; ind<arrObjPerros.length; ind++) {
			/* Creación de celdas */
			var td = document.createElement("td");
			td.innerHTML = arrObjPerros[ind].nombreDelPerro();

			/* Creación de las filas */
			var tr = document.createElement("tr");
			tr.appendChild(td);

			/* Agregar filas al tbody */
			tbody.appendChild(tr);
		}


		/* Agregar tbody a table */
		tabla.appendChild(tbody);

		/* Referencia al div con Id = 'listado' */
		var listado = document.getElementById("listado");

		/* Agregar la tabla al div con Id='listado' */
		listado.appendChild(tabla);

		var listaFilas = document.getElementsByTagName("tr");

		for(var ind=0; ind < listaFilas.length; ind++) {
			listaFilas[ind].addEventListener("click", mostrarInfo);
		}