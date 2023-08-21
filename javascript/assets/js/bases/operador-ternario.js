/**
 * Entre semana se abre a las 11 amm
 * Fines de semana se abre las 09 am
 */

// Entra a un sitio web, para consultar si está abierto hoy.

const dia = 4;
const horaActual = 8;

let horaApertura;
let mensaje; //Está abierto, está cerrado, abrimos a las xx hs.

// if ( dia === 0 || dia === 6) {
//     console.log('Hoy es fin de semana!');
//     horaApertura = 9;
// } else {
//     console.log('Hoy es entre semana...');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }


mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log(horaApertura, mensaje);