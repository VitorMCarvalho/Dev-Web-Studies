/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

const filtro = (array,num) =>{
    let result = []
    for(x of array){
        let vetor = x.toString().split('')
        if(vetor.length === num)
            result.push(x)
    } 
    return console.log(result)
}

filtro([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtro([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]

const thefilter = (array,num) =>{
    const vetor = array.filter(element =>{return String(element).length === num})
    return console.log(vetor)
}
thefilter([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
thefilter([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]