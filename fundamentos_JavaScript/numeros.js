const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const av1 = 9.15636
const av2 = 6.1565146

const total = av1 * peso1 + av2 * peso2
const media = total/ (peso1+ peso2)
const aux = media.toString(2)
console.log(media.toFixed(5))
console.log(media.toString())
console.log(media.toString(2)) //binário da média
console.log(typeof Number)