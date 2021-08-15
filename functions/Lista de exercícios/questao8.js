/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

const teste = lista => {
    let pontos = lista.split(',')
    let vitorias = 0
    let derrotas = 0
    let melhor = pontos[0]
    let pior = pontos[0]
    for(let i = 1; i<pontos.length; i++){
        if(Number(pontos[i])> Number(melhor)){
            melhor = Number(pontos[i])
            vitorias++
        }
        if(Number(pontos[i]) < Number(pior)){
            pior = 1+i
            derrotas++
        }
    }
    return console.log([vitorias, pior])
}
let lst = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
teste(lst)