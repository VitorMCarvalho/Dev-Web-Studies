/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const negativos = vetor =>{
    let negativos = 0
    for(x of vetor){
        if(x<0)
            negativos++
    }
    return console.log(negativos)
}

negativos([1,2,3,5,-1,-10,-50,3,-7999,-1,0,2])