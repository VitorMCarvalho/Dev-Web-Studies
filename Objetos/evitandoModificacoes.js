//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'qualquer', preco:300, tag:"promo"
})
console.log("extensivel", Object.isExtensible(produto))
produto.nome = "jax"
produto.descicao = "campeão"
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {
    nome: "joao",
    idade: 77
}
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))
pessoa.sobrenome = "campos"
delete pessoa.nome
pessoa.idade = 7
console.log(pessoa)

//Object.freeze

const jogo ={
    nome: 'lol',
    categoria: 'moba',
    qualidade: 'ruim'
}
Object.freeze(jogo)
jogo.qualidade = 'boa'
console.log(jogo)