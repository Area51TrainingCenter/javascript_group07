function saludos(nombre){
	function hola(){
		return texto + nombre;
	}

	var texto = "Buenos Días ";


	return hola;
}


var Saludo = saludos("Sergio");
alert(Saludo());