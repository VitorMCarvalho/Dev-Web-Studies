/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/
const retornaNum = array =>{
    let vetor = []
    for(let i = 0; i<array.length; i++){
        if(typeof array[i] === "number")
            vetor.push(array[i])
    }
    return console.log(vetor)
}

retornaNum(['aaaa', 1 ,'7', 2, 5])
retornaNum(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
retornaNum(["a", "c"]) // retornará []