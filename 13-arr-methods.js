var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]

//Recuerda que dentro de un array pueden haber objetos, como es el ejemplo de arriba. [{}]


// METODOS PARA RECORRER ARRAYS


//   METODO FILTER

/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */
});

console.log(articulosFiltrados);

//Me resulta un poco confuso el parametro "articulo" dentro de la function. Sin embargo interpreto que al estar siendo llamada la funcion dentro de un metodo de una variable, seguimos "dentro" de la misma y por eso guardan estrecha relacion


 //  ------------------- Metodo Map ------------------
 //Tambien va a generar un nuevo array

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);


 //   ------------------ Metodo Find --------------------
 /* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);

//   --------------------- Metodo forEach ----------------------
// Realiza un filtrado sobre el array sin modificarlo, tampoco genera un nuevo array

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Every

/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal); 

//   Metodo Includes

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2); 

console.log(incluyeNumero);


// ELiminando elementos de un array

// https://platzi.com/clases/1814-basico-javascript/28608-eliminando-elementos-de-un-array/