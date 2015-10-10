function Impresora(nombre, marca, modelo, numInventario, localRed){
	Equipos.call(this,nombre, marca, modelo, numInventario);
	this.localRed = localRed;
}

Impresora.prototype = Object.create(Equipos.prototype);
Impresora.prototype.constructor = Impresora;


