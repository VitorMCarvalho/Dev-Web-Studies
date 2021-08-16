/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const compara = (string1,string2) =>{
    let vetor1 = string1.split('')
    let vetor2 = string2.split('')
    for(x in vetor1)
        vetor1[x] = vetor1[x].toLowerCase()
    for(x in vetor2)
        vetor2[x] = vetor2[x].toLowerCase()
    vetor1 = vetor1.sort()
    vetor2 = vetor2.sort()    
    let armazenador = vetor1[0]
    if(vetor1[0] !== vetor2[0])
        return console.log(false)
    vetor1.shift()
    vetor2.shift()
    while(true){
        if(vetor1[0] === armazenador)
            vetor1.shift()
        if(vetor2[0] === armazenador)
            vetor2.shift()
        if(vetor1.length == 0 && vetor2.length ==0)
            return console.log(true)
        if(vetor1[0] !== armazenador && vetor2[0]!== armazenador){
            armazenador = vetor1[0]
            if(vetor2[0] !== armazenador)
                return console.log(false)
        }
    }
}
compara('abAdfdfdfhjkc','cbBkjhhjfdfdfda')