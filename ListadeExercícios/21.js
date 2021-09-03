/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

const menor = array =>{
    let result = array[0]
    for(let i = 1; i< array.length; i++){
        if(result > array[i])
            result = array[i]
    }
    console.log(result)
}
menor([10, 5, 35, 65]) // retornará 5
menor([5, -15, 50, 3]) // retornará -15

//utilizando forEach

const menorFor = array =>{
    let result = array[0]
    array.forEach(element => {if(element<result) result = element})
    return(console.log(result))
}
menorFor([10, 5, 35, 65]) // retornará 5
menorFor([5, -15, 50, 3]) // retornará -15

//utilizando Reduce -- nao pensei nisso
function menorNumero(numeros) {
    return console.log(numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual))
    }
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3])

//utilizando Math e operador "..."
function menorNumero(numeros) {
    return Math.min(...numeros);
    }