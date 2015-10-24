var $ = function(identificador) {
	var elementos = document.querySelectorAll(identificador);

	this.on = function(evento, cb) {
		for(var i=0; i<elementos.length; i++) {
			elementos[i].addEventListener(evento, cb);
		}
	}
	return this;
}

$("div").on("click", function(e){
	alert("Clic en el elemento div");
});
