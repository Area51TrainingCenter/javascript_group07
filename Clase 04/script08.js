function saludos(nombre){
	function hola(){
		return texto + nombre;
	}

	var texto = "Buenos Días ";
	return hola;
}


var Saludo01 = saludos("Sergio");
var Saludo02 = saludos("Andrea");

alert(Saludo01());
alert(Saludo02());