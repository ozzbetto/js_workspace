import _ from 'underscore'

import { crearDeck, pedirCarta , valorCarta, turnoComputadora} from './usecases';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const miModulo = (() => {
  'use strict'


  let deck            = [];
  const tipos         = ['C','D', 'H', 'S'];
  const especiales    = ['A', 'J', 'Q', 'K']

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');
  const btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas');

  const puntosHTML = document.querySelectorAll('small');

  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck( tipos, especiales );
      puntosJugadores = [];

      for( let i = 0; i < numJugadores; i++ ) {
          puntosJugadores.push(0);
      }

      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }

  deck = crearDeck( tipos, especiales );

  // Turno 0 Primer jugador, 1 Computadora
  const acumularPuntos = ( carta, turno ) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];

    }

  const crearCarta = (carta, turno) => {
      const imgCarta = document.createElement('img');
      imgCarta.src = `cartas/${ carta }.png`;
      imgCarta.classList.add('carta');
      divCartasJugadores[turno].append( imgCarta );
  }

  const determinarGanador = () => {
      const [puntosMinimos, puntosComputadora ] = puntosJugadores;

      setTimeout(() => {
          // Verificar si la computadora gana
          if( puntosComputadora === puntosMinimos ) {
              alert('No hay ganadores')
          } else if( puntosMinimos > 21 ) {
              alert('Gana la computadora');
          } else if( puntosComputadora > 21 ) {
              alert('Humano gana.')
          } else {
              alert('Gana la computadora');
          }
      }, 10);
  }

  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck); 
      const puntosJugador = acumularPuntos(carta, 0);

      crearCarta(carta, 0);

      if( puntosJugador > 21 ) {
          alert('Lo siento, ha perdido')   
          btnPedir.disabled = true; 
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador );
      } else if( puntosJugador === 21 ) {
          alert('21 logrado, Gano!')
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador )
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugadores[0] );
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  };
})();