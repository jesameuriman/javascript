// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax

var miAuto = {
  marca: "Toyota", // key - value
  modelo: "Corolla",
  annio: 2020,
  detallesDelAuto: function () {
    // Metodo de un objeto (una función dentro de un objeto)
    return `Auto ${this.modelo} ${this.annio}`;
    // this es una variable que hace referencia a un objeto en este caso a miAuto
  },
};

miAuto.annio;
miAuto.modelo;

miAuto.detallesDelAuto();

// Función constructora

function auto(marca, modelo, annio) {
  // Creas una función con los parametros que va a recibir,
  this.marca = marca; // Utilizamos el "this" para asignar valores a las propiedades del objeto (objeto: auto)
  this.modelo = modelo;
  this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);
// operador new: genera una nueva instancia de nuestra funcion contructora(auto), que es un objeto que deriva de otro objeto
var newAuto2 = new auto("Tesla", "Model X", 2018);
var newAuto3 = new auto("Toyota", "Corolla", 2020);
