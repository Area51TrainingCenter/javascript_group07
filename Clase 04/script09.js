function delegar(obj, metodo) {
	return function(e) {
		e = e || window.event;
		return obj[metodo](this, e);
	}
}

function domElemento(id){
	this.elemento = document.getElementById(id);

	if(this.elemento){
		this.elemento.onmouseover = delegar(this, "personalizadoMouseOver");
		this.elemento.onmouseout = delegar(this,"personalizadoMouseOut")
	}
}

domElemento.prototype.personalizadoMouseOver = function(obj, evento){
	obj.style.cursor = "pointer";
	obj.style.color = "red";
}

domElemento.prototype.personalizadoMouseOut = function(obj, evento){
	obj.style.cursor = "help";
	obj.style.backgroundColor = "green";
	obj.style.color = "magenta";
}

var miDiv = new domElemento("aDiv");
var miButton = new domElemento("aButton");