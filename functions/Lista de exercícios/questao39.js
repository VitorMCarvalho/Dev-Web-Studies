/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

const troca = (vetor1,vetor2) =>{
    vetor1 = vetor1.concat(vetor2)
    let i = vetor2.length
    while(i--){
        vetor2.shift()
        vetor2.push(vetor1[0])
        vetor1.shift()
    }
    console.log('Novo vetor A: ' + vetor1)
    console.log('Novo vetor B: ' + vetor2)
}
let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

troca(vetorA,vetorB)

// no gabarito ele usa um for, ou seja ele tambem declara uma variavel para o laço que depende do tamanho do vetor