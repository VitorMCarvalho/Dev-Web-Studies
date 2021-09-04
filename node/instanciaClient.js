const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require('./instanciaNova')()//função factory
const contadorD = require("./instanciaNova")()

contadorA.inc()
contadorB.inc()
console.log(contadorB.valor, contadorA.valor) //cache do valor, logo doi incrementado 2 vezes

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //independem as instancias