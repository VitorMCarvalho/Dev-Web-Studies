//retornando a funcao numa variavel
const printDif = function(a = 0, b = 0){
    console.log(a - b)
}
printDif(null,7)
printDif(50, -1)

//funcao arrow
const dif = (a=0,b=0) => {
    return a - b
} 
console.log(dif(5,2))

//retorno implicito
const sum = (a=0, b=0) => a + b
console.log(sum(10,3))

const print = a => console.log(a)
print('isso está ficando cada vez mais pythonico')