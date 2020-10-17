/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...args) => {
    let acc;
    args.forEach(element => (acc === undefined) ? acc = element : acc = acc + element );
    return acc;
}

module.exports = sumArguments
