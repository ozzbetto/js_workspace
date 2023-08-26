import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposDeCarta Ejemplo: ['C','D', 'H', 'S'];
 * @param {array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta ) throw new Error('Tipos de carta es obligatorio');
    if ( tiposDeCarta.lenght === 0 ) throw new Error('TiposDeCarta tiene que ser un arreglo de string')
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo );
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let especial of tiposEspeciales ) {
            deck.push(especial + tipo);
        }
    }
    
    return _.shuffle( deck );
}