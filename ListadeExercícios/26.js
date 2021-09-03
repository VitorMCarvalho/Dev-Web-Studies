/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/

const semVogal = string =>{
    const vetor = string.split('')
    let resultado = []
    for(x of vetor){
        if(x!=='a' && x!== 'e'&& x!== 'i' && x!== 'o' && x!== 'u' )
            resultado.push(x)
    }
    return console.log(resultado.join(''))
}
semVogal("Cod3r") // retornará "Cd3r"
semVogal("Fundamentos") // retornará "Fndmnts"