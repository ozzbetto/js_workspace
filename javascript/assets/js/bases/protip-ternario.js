const elMayor = (a, b) => ( a > b ) ? a : b

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log( elMayor(20, 15) );

console.log( tieneMembresia(false) );
 
const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (()=> 'Nick Fury')()
];

console.log( amigosArr );


