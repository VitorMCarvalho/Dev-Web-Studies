/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/
const firstLast = array =>{
    vetor = []
    vetor.push(array[0])
    vetor.push(array[array.length-1])
    return console.log(vetor)
}
firstLast([1,2,3,4,5])
firstLast([7,14,"olá"])
firstLast([-100, "aplicativo", 16])