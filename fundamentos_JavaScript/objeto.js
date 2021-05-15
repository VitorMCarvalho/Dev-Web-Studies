//diferente de JSON - JAVASCRIPT OBJECT NOTATION
const produto = {}
produto.nome = 'Samsung S10 Lite'
produto.preco = 2000.00
produto["desconto"] = 0.3//30%
console.log(produto)

//ou

const produto2 = {
    nome: "play 5",
    preco: 5000.00,
    CasaBahia: {
        desconto: 0.3,
        frete : '18 dias'
    }
}
console.log(produto2)