/* Definición de la clase PC */
function PC(nombre, marca, modelo, numInventario, memoria, placa){
	Equipos.call(this,nombre, marca, modelo, numInventario);
	this.memoria = memoria;
	this.placa = placa;
}

/* Hereda de la clase Equipos */
PC.prototype = Object.create(Equipos.prototype);
PC.prototype.constructor = PC;

PC.prototype.mostrarInfo = function(){
	console.log("Nombre", this.nombre);
	console.log("Marca", this.marca);
	console.log("Modelo", this.modelo);
	console.log("Número de Inventariio", this.numInventario);
	console.log("Memoria (GB)", this.memoria);
	console.log("Placa", this.placa);
}
