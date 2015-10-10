var btn = document.getElementById("btn"),
	resultado = document.getElementById("resultado");

var saldo = 0;

function botonEvento() {
	for(var i=0; i<2000000000; i++) {
		if(i==8000) {
			saldo = 4500;
			resultado.innerHTML=saldo;
		}
	}		

	
}

btn.addEventListener("click", botonEvento);

