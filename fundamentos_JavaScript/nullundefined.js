let d // nao inicializado
console.log(d)
d = null // ausencia de valor
console.log(d)

const produ = {}
console.log(produ.preco)
console.log(produ)
produ.preco = '10kdol'
console.log(produ.preco)
produ.preco = undefined // evitar fazer isso :p
console.log(!!produ.preco) 
console.log(produ) 

produ.preco = null
console.log(produ.preco)