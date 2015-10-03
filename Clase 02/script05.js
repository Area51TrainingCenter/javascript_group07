var btn = document.getElementById("btn");
var btnActivar = document.getElementById("btnActivar");

function grabando(){
	btn.classList.add("cargador");
	setTimeout(
		function(){
			btn.classList.remove("cargador");
		}, 3000
	)
}

function activacion(){
	btnActivar.classList.toggle("desactivado");
	btnActivar.innerHTML = "Desactivado";
}

btn.addEventListener("click", grabando);
btnActivar.addEventListener("click", activacion);