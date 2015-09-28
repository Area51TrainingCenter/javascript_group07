		/* Definición de clase */
		function Perro(nombrePerro, razaPerro, tamanoPerro, entrenadoPerro, edadPerro, colorPerro){

			/* this es el contexto */
			
			/* Definición de atributos */		
			this.nombre = nombrePerro;
			this.raza = razaPerro;
			this.tamano = tamanoPerro;
			this.entrenado = entrenadoPerro;
			this.edad = edadPerro;
			/* Asignado valor por defecto */
			this.color = colorPerro || "Blanco";

			/* Definición de métodos */
			this.nombreDelPerro = function() {
				return this.nombre;
			}


		}

		/* Creación de objeto */
		var objPerro1 = new Perro("Dandy", "Siberiano", "Mediano", true, 13);
		var objPerro2 = new Perro("Tati", "Siberiano", "Mediano", true, 13);
		var objPerro3 = new Perro("Dana", "Siberiano", "Mediano", true, 13);
		var objPerro4 = new Perro("Tabata", "Siberiano", "Mediano", true, 13);

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

		/* Agregar la tabla al body */
		document.body.appendChild(tabla);