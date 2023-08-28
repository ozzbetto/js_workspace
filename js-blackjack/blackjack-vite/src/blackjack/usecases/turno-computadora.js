import { pedirCarta } from "./pedir-carta.js";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, deck ) => {

    if (!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck); 
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
        crearCarta(carta, puntosJugadores.length -1);

    } while ( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );
    determinarGanador();
}