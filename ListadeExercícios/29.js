/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.*/
const segundo = array =>{
    let aux = []
    for(let i = 0; i<array.length; i++){
        aux = array.filter(a => a>=array[i])
        if(aux.length === 2)
            return console.log(array[i])
    }
}

segundo([12, 16, 1, 5]) // retornará 12
segundo([8, 4, 5, 6]) // retornará 6