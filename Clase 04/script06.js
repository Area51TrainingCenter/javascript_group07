function Movimientos(){
	var saldo = 100;

	function nuevoSaldo(){
		return saldo;
	}

	saldo = "No hay plata";

	return nuevoSaldo;
}

var mov = Movimientos();
alert(mov());