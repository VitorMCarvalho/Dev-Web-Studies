/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

const contador = vetor => {
    let dentro = 0 
    let fora = 0
    for(x of vetor){
        if(x>=10 && x<=20)
            dentro++
        else
            fora++
    }
    return console.log(`Dentro: ${dentro}, Fora:${fora}`)
}
contador([1,2,3,4,5,11,10,20,21])
contador([11,10,12,13,14,15,20,1])