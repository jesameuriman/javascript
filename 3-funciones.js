/* Las funciones son procedimientos, un conjunto de sentencias o pasos 
que realizarán una tarea o cálculo con ciertos valores */

/* Tenemos dos tipo de funciones en js, 
                              function declativas y 
                              function de expresión */

// el nombre reservado de function y parametros que recibira esa function

// FUNCIÓN DECLARATIVA

function miFuncion() {
  return 3; // return finaliza la funcion con cualquier numero
}

miFuncion(); // mandamos llamar la funcion

// FUNCIÓN DE EXPRESIÓN

var miFuncion = function (a, b) {
  /* function Expression (también conocidas como funciones anónimas, 
  porque la llamamos por la variable) */
  return a + b;
};

miFuncion(); // mandamos llamar la variable como funcion

/* ============En consola de Google crome================= */

function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`); // template strings (Plantillas de cadena de texto) pone variables en un string
}

function suma(a, b) {
  // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
  var resultado = a + b;
}

// Return, cómo regresamos un valor con una function.

function suma(a, b) {
  var resultado = a + b;
  return resultado;
}

function suma(a, b) {
  return a + b;
}

suma(20, 30);
