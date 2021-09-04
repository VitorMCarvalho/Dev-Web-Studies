const moduloA = require('./moduloA') // importa os dados exportados pelo módulo
const moduloB = require('./moduloB.js') //.js opcional
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.tchau)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)