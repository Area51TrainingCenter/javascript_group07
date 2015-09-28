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
			this.saltar = function(){};
			this.correr = function(){};
			this.ladrar = function(){};
			this.informacion = function(){
				/* Creación de etiquetas HTML */
				var etiquetaH1 = document.createElement("h1");
				/* Asignando valor a la etiqueta */
				etiquetaH1.innerHTML = "Nombre: " + this.nombre; 


				document.body.appendChild(etiquetaH1);
			};
		}

		/* Creación de objeto */
		/* nombrePerro, razaPerro, tamanoPerro, entrenadoPerro, edadPerro, color */
		var objPerro = new Perro("Dandy", "Siberiano", "Mediano", true, 13);

		/* Ejecutando el método informacion */
		objPerro.informacion();

		/* Inspeccionar el objeto */
		console.log(objPerro);