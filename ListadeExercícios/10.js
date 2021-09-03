/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/
const mais = num =>{
    string = ""
    for(let i = 0; i<num; i++){
        string += "+"
    }
    return console.log(string)
}

mais(2)
mais(4)

//resolução alternativa -- Resposta da lista

function simboloMais(quantidade) {
    return console.log(Array(quantidade).fill('+').join(''))
    }

simboloMais(2)
simboloMais(4)