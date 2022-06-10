// variables para cargar imagenes
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.png",
	cargaOk: false
}

var cerdoM = {
	url: "cerdo.png",
	cargaOk: false,
	movimiento: 10
};
//varialbes para movimiento 
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var xa = aleatorio(0, 7);
var ya = aleatorio(0, 7);
xa = xa * 60;
ya = ya * 60;

//registrar eventos de carga de imagenes
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdoM.imagen = new Image();
cerdoM.imagen.src = cerdoM.url;
cerdoM.imagen.addEventListener("load", cargarCerdosM);

//registrar eventos de movimiento
document.addEventListener("keydown", mover);

//funciones de dibujo de imagenes
function cargarFondo(){
	fondo.cargaOk = true;
	dibujar();
}

function cargarCerdosM(){
	cerdoM.cargaOk = true;
	dibujar();
}

function dibujar(){
	if(fondo.cargaOk){
		papel.drawImage(fondo.imagen, 0,0);
	}
	if(cerdoM.cargaOk){
		papel.drawImage(cerdoM.imagen, xa,ya)
	}
}

//funciones de movimiento
function mover(evento){
	switch(evento.keyCode){
		case teclas.UP:
			ya = ya - cerdoM.movimiento;
			dibujar(xa, ya);
		break;
		
		case teclas.DOWN:
			ya = ya + cerdoM.movimiento;
			dibujar(xa, ya);
		break;

		case teclas.LEFT:
			xa = xa - cerdoM.movimiento;
			dibujar(xa,ya);
		break;

		case teclas.RIGHT:
			xa = xa + cerdoM.movimiento;
			dibujar(xa ,ya);
		break;
	}
}

function aleatorio(min, maxi){
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado; 
}