if(window.localStorage) {
	/*
	localStorage.setItem("ciudad", "Lima");
	localStorage.getItem("ciudad");

	localStorage.ciudad = "Lima";
	var ciudad = localStorage.ciudad;
	*/

	if(localStorage.ciudad != undefined) {
		document.getElementById("ciudadActual").innerHTML = localStorage.ciudad;
	}
}