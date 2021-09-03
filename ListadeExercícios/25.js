/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.*/
const filtro = (palavra,string) =>{
    const vetorAux1 = palavra.split('')
    let resultado = []
    for(let i = 0; i<string.length; i++){
        let vetor = string[i].split('')
        let aux = 0
        for(let z = 0; z<vetorAux1.length; z++){
            if(vetorAux1[z]===vetor[z])
                aux++
        }
        if(aux === vetorAux1.length)
            resultado.push(string[i])
    }
    return console.log(resultado)
}

filtro("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
filtro("python", ["javascript", "java", "c++"]) // retornará []