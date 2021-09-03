/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

const repete = (caractere,string) =>{
    const vetor = string.split('')
    let resultado = 0
    for(let i = 0; i<vetor.length; i++){
        if(vetor[i] === caractere)
            resultado++
    }
    return console.log(resultado)
}

repete("r", "A sorte favorece os audazes") // retornará 2
repete("c", "Conhece-te a ti mesmo") // retornará 1