var funcion01,
	funcion02,
	funcion03;

function Movimientos(){
	var num = 20;

	funcion01 = function(){
		console.log(num);
	};


	funcion02 =  function(){
		console.log(num+=60);
	};


	funcion03 =  function(){
		console.log(num="No hay plata");
	};

}

Movimientos();

funcion01();
funcion02();
funcion01();
funcion03();

funcion01();




