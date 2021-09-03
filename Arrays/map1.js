const num = [1,2,3,4,5]

//for com propósito
let resultado = num.map(x => 2*x)

console.log(resultado)

const soma10 = x=> x+10
const triplo = y => y*3 
const toMoney = z => `R$ ${parseFloat(z).toFixed(2).replace('.',',')}`
resultado = num.map(soma10).map(triplo).map(toMoney)
console.log(resultado)