function Fotocopiadora(nombre, marca, modelo, numInventario, multifuncional){
	Equipos.call(this,nombre, marca, modelo, numInventario);
	this.lumens = multifuncional;
}

Fotocopiadora.prototype = Object.create(Equipos);
Fotocopiadora.prototype.constructor = Fotocopiadora;