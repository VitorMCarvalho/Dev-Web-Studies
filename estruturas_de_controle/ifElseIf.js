Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if (nota.entre(9,10))
        console.log("nota alta")
    else if(nota.entre(7,8.99))
        console.log("nota média")
    else if(nota.entre(0, 6.99))
        console.log("reprovado")
    else
        console.log('nota inválida')
    console.log('fim')
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(29)