const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

//retornar um array apenas com os preços

//método rudimentar
/*const quebra = x=>{
    x = x.split(':')
    //x = JSON.stringify(x)
    x = x[2].split('}')
    console.log(x)
    return x[0]
}
*/


const quebra = x => {
    x = JSON.parse(x) //transforma um JSON em  Objeto
    //console.log(x)
    return x.preco
}
console.log(carrinho.map(quebra))