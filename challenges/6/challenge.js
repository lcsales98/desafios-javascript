/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = (htmlTemplate) => {
  function searchWidth() {
    const REGEX = new RegExp(/width:\ \d*/).exec(htmlTemplate)
    if (!REGEX) return true
    return REGEX[0].split(': ')
  }
  function searchHeight() {
    const REGEX = new RegExp(/height:\ \d*/).exec(htmlTemplate)
    if (!REGEX) return true
    return REGEX[0].split(': ')
  }

  const WIDTH = searchWidth()
  const HEIGHT = searchHeight()

  if (WIDTH & HEIGHT) return { width: 0, height: 0 }

  return JSON.parse(`{ "${WIDTH[0]}": ${WIDTH[1]}, "${HEIGHT[0]}": ${HEIGHT[1]} }`)
}

module.exports = extractSize
