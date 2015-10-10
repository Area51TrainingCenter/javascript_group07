var btn = document.getElementById("btn"),
	resultado = document.getElementById("resultado");

var saldo = 0;
var param1 = "Sr. Sergio", param2 = "Bienvenido ";

function callBackEscribirSaldo(){
	resultado.innerHTML=saldo;
}

function callBackAplicarDescuento(param1, param2){
	var mensaje = param2 + param1 + ". Su saldo es " + saldo*0.75;
	//resultado.innerHTML=saldo*0.75;	
	resultado.innerHTML = mensaje;
}

function actualizarSaldo(cb){
	for(var i=0; i<2000000000; i++) {
		if(i==8000) {
			saldo = 4500;
			cb(param1, param2);
		}
	}		
}


function botonEvento() {
	//actualizarSaldo(callBackEscribirSaldo);
	actualizarSaldo(callBackAplicarDescuento);

	
}

btn.addEventListener("click", botonEvento);

