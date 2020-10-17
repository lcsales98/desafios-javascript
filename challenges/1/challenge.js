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
  return args.reduce((acc, element) => {
    return (acc += element)
  })
}

module.exports = sumArguments
