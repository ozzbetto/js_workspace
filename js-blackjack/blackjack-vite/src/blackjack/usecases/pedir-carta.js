/**
 * 
 * @param {Array<string>} deck es un arreglo de strings
 * @returns {string} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if( !deck || deck.length === 0 ) {
        throw 'No hay más cartas en el mazo';
    }

    // Toma la última carta del mazo y la elimina del deck
    
    return deck.pop();
}