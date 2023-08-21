let juegos = ['Call of Duty','Resident Evil','Horizon'];
console.log('Cantidad de elementos en el array: ',juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log('Primer elemento: ', primero);
console.log('Ultimo elemento: ', ultimo);

// Barrer todos los elementos del array
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// Insertar elemento al final al array
let nuevaLongitud = juegos.push( 'Spiderman' );
console.log('La nueva longitud es: ', juegos.length);
console.log( juegos );

juegos.unshift('The Evil Within I');
console.log('Nueva cantidad de elementos: ',juegos.length);
console.log( juegos );

// Borrar el ultimo elemento del array
let juegoBorrado = juegos.pop();
console.log( juegoBorrado );

// Borrar un elemento en especifico
let pos = 1;
juegos.splice( pos, 1)

// Posicion de un elemento dentro del array
let indiceElemento = juegos.indexOf('Horizon');
console.log(indiceElemento);
