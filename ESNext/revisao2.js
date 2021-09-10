//arrow function

const soma = (a=0,b=0) => a+b
console.log(soma(3,2))

//Arrow function  -- this
const lexico = () => console.log(this === exports) //se fosse função normal, seria false, pois this seria apontado para global
const lexico1 = lexico.bind({})
lexico()
lexico1()

//param default
function log(texto = "node"){
    console.log(texto)
}
log()
log("agr tem texto")

//operador spread/rest

function total(...num){
    let total = 0
    num.forEach(n=>total +=n)
    return total
}
console.log(total(2,3,4,5,8,9))