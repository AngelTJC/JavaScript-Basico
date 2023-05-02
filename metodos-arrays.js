let articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

/* Metodos que nos ayudan a recorrer un ARRAY */

/* "filter()"
        -Se utiliza para filtrar los elementos de un array
         segun un condicion determinada.
        -Esta funcion devuelve un nuevo array con los datos
         filtrados.
*/

let articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});

/*  "map()"
        -Permite crear un nuevo array a patir de la
         transformacion de cada elemento del array original
         mediante una funcion de devolucion de llamada(callback)
        -"map()" se enfoca en transformar elementos
*/

let nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});


/*  find()
        -para buscar elemento
        -devuelve el elemento completo en un nuevo array
*/

let encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

/*  forEach()
        -Es muy parecido al bucle for
        -tambien se parece al metodo map() (no tanto)
        -No devuelve un nuevo array, lo que quier decir
*/

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

/*  "some()"
        -devuelve un valor booleano
        -sirve para validacion
*/

let articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});