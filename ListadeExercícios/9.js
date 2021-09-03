/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/
const repete = (param1,param2) =>{
    result = []
    for(let i = 0; i<param2; i++){
        result.push(param1)
    }
    return console.log(result)
} 
repete("código", 2)
repete(7,3)

//resolução alternativa -- Resposta da lista
function repetir(param1, param2) {
    return console.log(Array(param2).fill(param1))
    }

repetir("código", 2)
repetir(7,3)