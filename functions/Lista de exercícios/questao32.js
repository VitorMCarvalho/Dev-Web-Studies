/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/
const media = vetor =>{
    let total = 0
    for(x of vetor){
        total = total +x
    }
    return console.log(total/vetor.length)
}
media([6,9,8,7,5])
media([6,9,8,7,10])