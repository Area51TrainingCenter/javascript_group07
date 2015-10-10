//Secuencia de pasos en un restaurante
var seProcede = true;

//cb = llamadaCliente
function entregarCarta(cb){
	console.log("PASO", "Entregar la carta");
	setTimeout(function(){
		console.log("CALLBACK", "Llamada del cliente");

		seProcede = false;

		if(seProcede) {
			cb(tomarPedido);	
		} else {
			console.log("El cliente desistió");
		}

		
	}, 3000);

}

//cb = tomarPedido
function llamadaCliente(cb){
	console.log("PASO", "Llamada del cliente");
	setTimeout(function(){
		console.log("CALLBACK", "Tomar pedido");
		cb(entregarPedidoALaCocina);
	}, 3000);
}

//cb = entregarPedidoALaCocina
function tomarPedido(cb){
	console.log("PASO", "Tomar el pedido");
	setTimeout(function(){
		console.log("CALLBACK", "Entregar pedido a la cocina");
		cb(llamadaCocina);
	}, 3000);	
}

//cb = llamadaCocina
function entregarPedidoALaCocina(cb){
	console.log("PASO", "Entregar Pedido a la Cocina");
	setTimeout(function(){
		console.log("CALLBACK", "Recoger pedido");
		cb(recogerPedido);
	}, 3000);		
}

//cb = recogerPedido
function llamadaCocina(cb){
	console.log("PASO", "Llamada de la cocina");
	setTimeout(function(){
		console.log("CALLBACK", "Entregar pedido");
		cb(entregarPedido);
	}, 3000);		
}

//cb = entregarPedido
function recogerPedido(cb){
	console.log("PASO", "Recoger pedido");
	setTimeout(function(){
		console.log("CALLBACK", "Cobrar");
		cb(cobrar);
	}, 3000);		
}

//cb = cobrar
function entregarPedido(cb){
	console.log("PASO", "Entregar Pedido");
	setTimeout(function(){
		cb();
	}, 3000);		
}

function cobrar(){
	console.log("COBRAR", "OK");
}


//Primera función o paso o tarea
entregarCarta(llamadaCliente);









