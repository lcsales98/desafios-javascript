/*
 * Calcular o MDC
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que calcula e retorna o MDC
 * (máximo divisor comum) entre dois números.
 * Para isso você pode usar as seguintes informações:
 *
 * 1. O MDC de um número N com 0 é o próprio N.
 *
 * 2. O MDC entre dois números M e N, onde M > N é
 * igual ao MDC de N e do resto da divisão de M por N.
 *
 * Você pode considerar que nas entradas dos testes
 * a > b sempre.
 */

const MDC = (a, b) => {
  // Se a > b na primeira iteração do while será ajutado pois nº menor % nº maior = nº menor.
  // O nº maior que está em 'b' passa para 'a' e o menor (resto) passa para 'b'
  let resto

  while (resto !== 0) {
    resto = a % b
    a = b
    b = resto
  }

  return a
}

module.exports = MDC
