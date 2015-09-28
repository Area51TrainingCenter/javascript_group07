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


		/* Creación de objeto */
		var objPerro1 = new Perro("Dandy", "Siberiano", "Mediano", true, 13, "", "foto01.jpg", "guau.mp3");
		var objPerro2 = new Perro("Tati", "Siberiano", "Mediano", true, 13, "", "foto02.jpg", "guau.mp3");
		var objPerro3 = new Perro("Dana", "Siberiano", "Mediano", true, 13, "", "foto03.jpg", "guau.mp3");
		var objPerro4 = new Perro("Tabata", "Siberiano", "Mediano", true, 13, "", "foto04.jpg", "guau.mp3");


		/* Creación de celdas */
		var td1 = document.createElement("td");
		td1.innerHTML = objPerro1.nombreDelPerro();

		var td2 = document.createElement("td");
		td2.innerHTML = objPerro2.nombreDelPerro();

		var td3 = document.createElement("td");
		td3.innerHTML = objPerro3.nombreDelPerro();		
		var td4 = document.createElement("td");
		td4.innerHTML = objPerro4.nombreDelPerro();

		/* Creación de filas */
		var tr1 = document.createElement("tr");
		tr1.appendChild(td1);

		var tr2 = document.createElement("tr");
		tr2.appendChild(td2);

		var tr3 = document.createElement("tr");
		tr3.appendChild(td3);

		var tr4 = document.createElement("tr");
		tr4.appendChild(td4);

		/* Creación de tabla */
		var tabla = document.createElement("table");
		/* Añadir clase a etiqueta Table */
		tabla.className = "table table-striped";

		/* Creación del tbody */
		var tbody = document.createElement("tbody");
		/* Añadir filas */
		tbody.appendChild(tr1);
		tbody.appendChild(tr2);
		tbody.appendChild(tr3);
		tbody.appendChild(tr4);

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