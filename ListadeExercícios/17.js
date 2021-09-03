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


//OU

const sum = (acumulador,atual) =>{return acumulador+atual}
console.log([10, 10, 10].reduce(sum)) // retornará 30
console.log([15, 15, 15, 15].reduce(sum)) // retornará 60