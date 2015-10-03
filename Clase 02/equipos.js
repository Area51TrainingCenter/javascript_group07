/* Definición de la clase Equipos (Padre) */
function Equipos(nombre, marca, modelo, numInventario){
	this.nombre = nombre;
	this.marca = marca;
	this.modelo = modelo;
	this.numInventario = numInventario;

	var nombreCompleto;

}

Equipos.prototype.nombre;
Equipos.prototype.marca;
Equipos.prototype.modelo;
Equipos.prototype.numInventario;

Equipos.prototype.setearValoresIniciales = function(nombre, marca, modelo, numInventario) {
		this.nombre = nombre;
		this.marca = marca;
		this.modelo = modelo;
		this.numInventario = numInventario;
}	