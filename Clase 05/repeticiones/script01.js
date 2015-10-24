angular.module("app", [])
	.controller("controlador", function(){
		this.personas = [
			{
				nombre: "Sergio",
				correo: "sergio@correo",
				fecha: "2015-10-14",
				pais: "Perú",
				ciudad: "Lima"
			},
			{
				nombre: "Andrea",
				correo: "Andrea@correo",
				fecha: "2015-10-15",
				pais: "Perú",
				ciudad: "Piura"
			},
			{
				nombre: "José",
				correo: "jose@correo",
				fecha: "2015-10-16",
				pais: "Perú",
				ciudad: "Lima"
			},
			{
				nombre: "Mónica",
				correo: "monica@correo",
				fecha: "2015-10-14",
				pais: "Perú",
				ciudad: "Moquegua"
			},
			{
				nombre: "Raúl",
				correo: "raul@correo",
				fecha: "2015-10-17",
				pais: "Perú",
				ciudad: "Chiclayo"
			},
			{
				nombre: "Elsa",
				correo: "Elsa@correo",
				fecha: "2015-10-18",
				pais: "Ecuador",
				ciudad: "Guayaquil"
			},
			{
				nombre: "Gabriela",
				correo: "Gabriela@correo",
				fecha: "2015-10-19",
				pais: "Venezuela",
				ciudad: "Carabobo"
			},
			{
				nombre: "Mercedes",
				correo: "Mercedes@correo",
				fecha: "2015-10-20",
				pais: "Perú",
				ciudad: "Arequipa"
			},
			{
				nombre: "Janet",
				correo: "Janet@correo",
				fecha: "2015-10-21",
				pais: "Brasil",
				ciudad: "Rio de Janeiro"
			},
			{
				nombre: "Eduardo",
				correo: "Eduardo@correo",
				fecha: "2015-10-22",
				pais: "Argentina",
				ciudad: "Rosario"
			}												
		];

		this.filaSeleccionada = -1;
		this.personaSeleccionada = undefined;

		this.seleccionarFila = function(persona, indice) {
			this.filaSeleccionada = indice;
			this.personaSeleccionada = persona;
		}
	});