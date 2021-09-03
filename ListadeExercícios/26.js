/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/


//método ruim
const semVogal = string =>{
    const vetor = string.split('')
    let resultado = []
    for(x of vetor){
        if(x!=='a' && x!== 'e'&& x!== 'i' && x!== 'o' && x!== 'u' && x!=='A' && x!== 'E'&& x!== 'I' && x!== 'O' && x!== 'U')
            resultado.push(x)
    }
    return console.log(resultado.join(''))
}
semVogal("Cod3r") // retornará "Cd3r"
semVogal("Fundamentos") // retornará "Fndmnts"

//metodo melhor -- nao pensei nisso

const vogal = string =>{
    const vogais = ['a','e','i','o','u','A','E','I','O','U']
    vogais.forEach(element => string = string.replace(element,''))
    return console.log(string)
}
vogal("Cod3r") // retornará "Cd3r"
vogal("Fundamentos") // retornará "Fndmnts"