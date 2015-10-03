var regiones = [
	{nombre: "Lima", codigo: 1},
	{nombre: "Junín", codigo: 2},
	{nombre: "Arequipa", codigo: 3}
];

var provincias = [
	{codigo:1, codigoProv: 1, nombre: "Lima"},
	{codigo:1, codigoProv: 2, nombre: "Cajatambo"},
	{codigo:1, codigoProv: 3, nombre: "Yauyos"},
	{codigo:2, codigoProv: 4, nombre: "Tarma"},
	{codigo:2, codigoProv: 5, nombre: "Huancayo"},
	{codigo:3, codigoProv: 6, nombre: "Camana"},
	{codigo:3, codigoProv: 7, nombre: "Yanahuara"}
];

var distritos = [
	{codigoProv: 1, codigoDistrito:1, nombre: "Lince"},
	{codigoProv: 1, codigoDistrito:2, nombre: "Pueblo Libre"},
	{codigoProv: 2, codigoDistrito:3, nombre: "Distrito CT01"},
	{codigoProv: 2, codigoDistrito:4, nombre: "Distrito CT02"}
];

var ubigeo;

if(window.localStorage) {

	/* Graba localStorage.ubigeo si no está definido */
	if(localStorage.ubigeo == undefined) {
		localStorage.ubigeo = JSON.stringify({rg: regiones, pr: provincias, di: distritos});
	}

	/* Leer del localStorage.ubigeo */
	ubigeo = JSON.parse(localStorage.ubigeo);

	/* Insertar una opción por defecto en el select de regiones */
	var idRegiones = document.getElementById("idRegiones");
	var idProvincias = document.getElementById("idProvincias");
	var idDistritos = document.getElementById("idDistritos");

	var opcion = document.createElement("option");
	opcion.innerHTML = "Seleccione una región";
	opcion.value = 0;
	idRegiones.appendChild(opcion);

	/* Insertar las opciones de regiones */
	for(var ind=0; ind<ubigeo.rg.length; ind++) {
		
		var opcion = document.createElement("option");
		opcion.innerHTML = ubigeo.rg[ind].nombre;
		opcion.value = ubigeo.rg[ind].codigo;

		idRegiones.appendChild(opcion);
	}

	var regionSeleccionada=0;
	var provinciaSeleccionada=0;
	var distritoSeleccionado=0;

	var listadoProvincias = [];

	function listarProvincias(){
		if(idRegiones.selectedIndex!=0){
			regionSeleccionada = idRegiones.options[idRegiones.selectedIndex].value;

			listadoProvincias = [];

			for(ind=0; ind<ubigeo.pr.length; ind++){
				if(ubigeo.pr[ind].codigo==regionSeleccionada) {
					listadoProvincias.push(ubigeo.pr[ind]);
				}
			};

			idProvincias.innerHTML = "";

			opcion = document.createElement("option");
			opcion.innerHTML = "Seleccione una provincia";
			opcion.value = 0;
			idProvincias.appendChild(opcion);			

			/* Insertar las opciones de provincias */
			for(ind=0; ind<listadoProvincias.length; ind++) {
				
				opcion = document.createElement("option");
				opcion.innerHTML = listadoProvincias[ind].nombre;
				opcion.value = listadoProvincias[ind].codigoProv;

				idProvincias.appendChild(opcion);
			}


		}
	}

	var listadoDistritos = [];

	function listarDistritos(){
		if(idProvincias.selectedIndex!=0){
			provinciaSeleccionada = idProvincias.options[idProvincias.selectedIndex].value;
			console.log(idProvincias.options[idProvincias.selectedIndex]);

			listadoDistritos = [];

			for(ind=0; ind<ubigeo.di.length; ind++){
				if(ubigeo.di[ind].codigoProv==provinciaSeleccionada) {
					listadoDistritos.push(ubigeo.di[ind]);
				}
			};

			idDistritos.innerHTML = "";

			opcion = document.createElement("option");
			opcion.innerHTML = "Seleccione una distrito";
			opcion.value = 0;
			idDistritos.appendChild(opcion);			

			/* Insertar las opciones de provincias */
			for(ind=0; ind<listadoDistritos.length; ind++) {
				
				opcion = document.createElement("option");
				opcion.innerHTML = listadoDistritos[ind].nombre;
				opcion.value = listadoDistritos[ind].codigoDistrito;

				idDistritos.appendChild(opcion);
			}


		}
	}


	/* Evento de cambio en el select de regiones */
	idRegiones.addEventListener("change", listarProvincias);
	idProvincias.addEventListener("change", listarDistritos);




}











