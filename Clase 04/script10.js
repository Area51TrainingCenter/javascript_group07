var ejeZ, ejeY, ejeX;

function girarPerro(){
	var perro = document.getElementById("imgPerro");

	perro.style.webkitTransform = "rotate(" + ejeY+"deg) rotate3d(1,0,0, "+(ejeX*-1)+"deg)";

	perro.style.MozTransform = "rotate(" + ejeY+"deg)";

	perro.style.transform = "rotate(" + ejeY+"deg) rotate3d(1,0,0, "+(ejeX*-1)+"deg)";

}

function cambioOrientacion(evento) {
	ejeZ = evento.alpha;
	ejeX = evento.beta;
	ejeY = evento.gamma;

	girarPerro();
}


if(window.DeviceOrientationEvent){

	window.addEventListener("deviceorientation", cambioOrientacion);



} else {
	alert("Comprate uno mejor");
}