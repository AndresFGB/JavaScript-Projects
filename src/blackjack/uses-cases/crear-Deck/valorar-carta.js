/**
 * Obtener el valor de la carta
 * @param {String} carta  Retorna 1 valor tipo: 1D 2J ..
 * @returns {Number } retorna un valor de la carta si es una  J Q K 10 si es A es 10
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}