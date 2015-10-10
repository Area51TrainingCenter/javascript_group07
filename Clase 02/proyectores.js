function Proyector(nombre, marca, modelo, numInventario, lumens, proveedor){
	Equipos.call(this,nombre, marca, modelo, numInventario);
	this.lumens = lumens;
	this.proveedor = proveedor;
}

Proyector.prototype = Object.create(Equipos.prototype);
Proyector.prototype.constructor = Proyector;