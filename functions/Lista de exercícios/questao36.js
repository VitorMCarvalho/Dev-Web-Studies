/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/
let vetor = [1, 2, 3, 4, 5]
const func1 = (vetor,param) =>{
    for(x in vetor){
        vetor[x] = vetor[x]*param
    }
    return vetor
}
const func2 = (vetor, param) =>{
    for(x in vetor){
        if(vetor[x]>5)
            vetor[x] = vetor[x]*param
    }
    return console.log(vetor)
}
func2(func1(vetor,2),2)
