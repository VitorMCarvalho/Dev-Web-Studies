/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/
const contador = string =>{
    return console.log(string.split(' ').length)
}
contador("Sou uma frase") // retornará 3
contador("Me divirto aprendendo a programar") // retornará 5