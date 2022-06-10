/* en la consola aparece Hola, si le pones false
no aparece nada */
if (true) {
  console.log("Hola");
} else if () {
  
}
// ejemplo condiciones de votación
if (edad === 18) {
  console.log("Puedes votar por primera vez");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aún no puede votar");
}

//operador ternario, es igual a if o else
condicion ? true : false
/* ejemplo */
var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno"
console.log(resultado);
