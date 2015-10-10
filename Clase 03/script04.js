
function entregarCarta(){
	console.log("PASO", "Entregar la carta");

	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();
	}, 3000);

	return diferido.promise;
}

function llamadaCliente(){
	console.log("PASO", "Llamada del cliente");
	
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();
	}, 3000);

	return diferido.promise;
}

function tomarPedido(){
	console.log("PASO", "Tomar el pedido");
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.reject("Tomar el Pedido: No hay el plato que quiere el cliente");
	}, 3000);

	return diferido.promise;

}

function entregarPedidoALaCocina(){
	console.log("PASO", "Entregar Pedido a la Cocina");	
}


entregarCarta()
	.then(llamadaCliente)
	.then(tomarPedido)
	.fail(function(mensaje){
		console.log(mensaje);
	})
	.done(function(){
		console.log("Proceso concluido");
	});









