let a = 5;

if( a > 2 ) {
    console.log('Es mayor a dos');
} else {
    console.log('Es menor');
}
// console.log('Fin de programa');


// // const hoy = new Date();

// // let dia = hoy.getDay();

// // console.log( {dia} );

// // if (dia === 0){
// //     console.log('Domingo');
// // } else if(dia === 1) {
// //     console.log('Lunes');
// }

di = 3;
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}
console.log(diasLetras[di]);

const hoy = new Date();

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diasLetras[di]);


const clasficaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio']
console.log( {clasficaciones});

clasficaciones[2] = 'Celia';
clasficaciones[3] = 'Raúl';
clasficaciones.pop;
clasficaciones.splice(1,0, 'Roberto','Amaya');
clasficaciones.unshift('Marta');

console.log( { clasficaciones});


function ultimoElemento(arr) {
    const resultado = arr[arr.length - 1];
    return resultado;
}

const respuesta = ultimoElemento([3, 4, 9]);
console.log(respuesta);
