function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const Produto = {
    nome: 'bombril',
    preco: 4,
    desc: 0.15,
    getPreco
}
global.preco = 5
global.desc = 0.1
console.log(getPreco())
console.log(Produto.getPreco())

const carro = {preco: 70000, desc:0.1}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.13, "U$")) //diferença
console.log(getPreco.apply(carro, [0.13, "U$"])) //sem array da erro