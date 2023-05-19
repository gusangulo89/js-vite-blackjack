import _ from 'underscore';

/**
 * 
 * @param {Array <string>} tiposCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
