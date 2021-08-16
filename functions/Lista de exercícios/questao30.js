/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/
const extremos = vetor =>{
    let maior=vetor[0]
    let menor=vetor[0]
    for(x of vetor){
        if(x>maior)
            maior=x
        if(x<menor)
            menor=x
    }
    return console.log(`maior: ${maior} e menor: ${menor}`)
}

extremos([5,5,6,7,3,14,2,50,49,1,7])
extremos([5,5,6,7,3,55,79,-3,15,23,0])