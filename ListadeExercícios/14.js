/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */

const convert = objeto =>{
    const key = Object.keys(objeto)
    const value = Object.values(objeto)
    let resultado = []
    for(let i = 0; i<key.length;i++){
        resultado.push([key[i],value[i]])
    }
    return console.log(resultado)
}
convert({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
convert({
        codigo: 11111,
        preco: 12000
        }) // irá retornar [["codigo", 11111], ["preco", 12000]]