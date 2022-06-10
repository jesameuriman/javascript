// Estructura de datos --> tipo objeto --> guarda mas valores adentro
//Puede guardar numero,string, objetos, incluso otros arrays esto se conoce como estructura de datos

// Sintasix
var frutas = ["Manzana", "Platano", "Fresa"];

// Estos elementos se separan por coma,
//podemos llamar a todo nuestro objeto que internamente tiene elementos

console.log(frutas); // me mostrar todo el array y sus elementos

// Podemos versu longitud osea cuantos elementos tengo dentro de este array

console.log(frutas.length); // con len sabemos cuantos elemntos hay en el array

// Para acceder a un elemento en especifico en el array

console.log(frutas[0]);

// Recordemos que el index del array arranca en 0, si queremos llegar a fresa seria 2

// Cuando hablamos de arrays hablamos de 2 metodos mas comunes

//Estos metodos nos ayudan a generar cosas con los arrays
// 1 es agregar elementos
//Sintaxis

var masFrutas = frutas.push("Uvas"); // Añade lun elemento al final del array

// Ahora si queremos quitar un elemento

var quitarFruta = fruta.pop("Uvas");

// Para agregar un elemento al array pero al principio, parecido a .push pero al inicio

var nuevaFruta = fruta.unshift("Uvas");

// Ahora para eliminar un elemento al inicio

var borrarFruta = fruta.shift("Uvas");

// De igual manera asi no pongamos el string y usamos shift se borrara el 1re elemento

// Podemos saber la posicion de un melemento del array tan solo con su nombre en string

//Ejemplo

var posicion = frutas.indexOf("Fresa");

console.log(posicion);
