/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let vetorInteiro = [1,2,3,4]
let vetorString = ['a','b','c','d']
let vetorDouble = [1.1,2.2,3.3,4.4]

const concatenar = (vetor1,vetor2) =>{
    return console.log(vetor1.concat(vetor2))
}
concatenar(vetorInteiro,vetorDouble)
concatenar(vetorDouble,vetorString)