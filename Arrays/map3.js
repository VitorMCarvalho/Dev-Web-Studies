Array.prototype.mapinha = function(x){
    let vetor = []
    for(let i = 0; i< this.length; i++){
        vetor.push(x(this[i], i, this))
    }
    return vetor
}
const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

const quebra = x => {
    x = JSON.parse(x) //transforma um JSON em  Objeto
    //console.log(x)
    return x.preco
}
console.log(carrinho.mapinha(quebra))