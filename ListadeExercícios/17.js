/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/
const soma = array =>{
    let resultado =0
    for(let i = 0; i<array.length; i++){
        resultado += array[i]
    }
    return console.log(resultado)
}

soma([10, 10, 10]) // retornará 30
soma([15, 15, 15, 15]) // retornará 60


//Usando Reduce -- Achei melhor esse

const sum = array =>{
    let soma = array.reduce((acumulador,atual) =>{return acumulador+atual})
    return console.log(soma)
}
sum([10, 10, 10]) // retornará 30
sum([15, 15, 15, 15]) // retornará 60

//Usando forEach --também é válido

const somafor = array =>{
    let soma = 0
    array.forEach(element => soma += element)
    return console.log(soma)
}
somafor([10, 10, 10]) // retornará 30
somafor([15, 15, 15, 15]) // retornará 60