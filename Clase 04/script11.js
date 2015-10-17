var aceleracionX, aceleracionY;

function cambioMovimiento(evento) {
	aceleracionX = evento.accelerationincludingGravity.x;
	aceleracionY = evento.accelerationincludingGravity.y;
	
}



if(window.DeviceMotionEvent){

	window.addEventListener("devicemotion", cambioMovimiento);

} else {
	alert("Compra uno mejor");
}