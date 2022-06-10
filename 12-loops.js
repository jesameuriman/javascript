/* Los loops (bucles), son manera rápida y sencilla de hacer 
algo (una tarea) repetidamente. */

// FORMA 1 (FOR)
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i]); /* length (longitud) saber 
  los elementos, si es menor i va aumentar en 1, saluda a todos 
  aumentando en 1 */
}

// FORMA 2 (FOR ...OF)
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
  saludarEstudiante(estudiante);
} /* igualmente salida a todos */

// FORMA 3 (WHILE)
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  /* Aquí la tarea se hará siempre y cuando sea true, 
  cuando llegué a false, dejará de hacer la tarea */
  var estudiante = estudiantes.shift();
  /* shift() es un método que saca un elemento del 
  array de la posición 0 a la última, Pop() comienza 
  de la última a la primera. */
  saludarEstudiante(estudiante);
}
