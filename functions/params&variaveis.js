function soma(){
    let soma = 0
    for(i in arguments){ // arguments é um artificio que resgata todos os valores passados como parametro
        soma += arguments[i]
    }
    return soma
}
console.log(soma(0))
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2, "999"))
console.log(soma('a','b','c'))