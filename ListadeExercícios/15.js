/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

const pares = array =>{
    let vetor =[]
    for(let i = 0; i<array.length; i++){
        if(array[i]%2 === 0 && i%2 ===0)
            vetor.push(array[i])
    }
    return console.log(vetor)
}
pares([1, 2, 3, 4]) // retornará []
pares([10, 70, 22, 43]) // retornará [10, 22]