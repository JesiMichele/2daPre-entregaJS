/*Agregar productos que ya se encuentran definidos(nombre, talle), sumando el precio y la cantidad fijados por el usuario. Se filtran la cantidad de productos que superen el valor de 1500 y se devuelve el total de productos ingresados mas su valor*/
const tiposProductos = ["remera", "jean", "buzo"];
const talles = ["s", "m", "l"];

const productos = [];

class Producto {

  constructor(nombre, precio, talle, cantidad) {

    this.nombre = nombre;

    this.precio = precio;

    this.talle = talle;

    this.cantidad = cantidad;

  }

}

function agregarProducto() {

  let nombre = prompt("Ingrese el nombre del producto (opciones: " + tiposProductos.join(", ") + ")");

  let precio = parseInt(prompt("Ingrese el precio del producto"));

  let talle = prompt("Ingrese el talle deseado (opciones: " + talles.join(", ") + ")");

  let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));


  while (!tiposProductos.includes(nombre) || !talles.includes(talle)) {

    alert("Alguno de los datos es incorrecto. Por favor ingrese un dato valido!");

    nombre = prompt("Ingrese el nombre del producto (opciones: " + tiposProductos.join(", ") + ")");

    precio = parseInt(prompt("Ingrese el precio del producto"));

    talle = prompt("Ingrese el talle deseado (opciones: " + talles.join(", ") + ")");

    cantidad = parseInt(prompt("Ingrese la cantidad deseada"));

  }

  const nuevoProducto = new Producto(nombre, precio, talle, cantidad);

  productos.push(nuevoProducto);

  console.log("Sus productos son: " + JSON.stringify(productos));

}

let agregarMas = true;

while (agregarMas) {

  agregarProducto();

  agregarMas = confirm("¿Quiere seguir agregando productos al carrito?");

}

const precioMayor = productos.filter((producto) => producto.precio >= 1500).length;

console.log("La cantidad de productos que superan el valor de 1500 son: " + precioMayor);

const total = productos.map((producto) => producto.precio * producto.cantidad).reduce((a, b) => a + b);

console.log("Su total es de " + total);

alert("Su total es de " + total);




