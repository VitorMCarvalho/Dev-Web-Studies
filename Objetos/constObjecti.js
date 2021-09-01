//pessoa -> endereço ->{dado1}
const pessoa = {
    nome: 'john'
}
pessoa.nome = 'joel'
console.log(pessoa)

//pessoa -> novoEndereço -> {dado2} 
//pessoa = {nome: "KAisa"} // erro

Object.freeze(pessoa) // torna o objeto constante/imutável
pessoa.nome = "Elvis"
pessoa.endereco = "Rua 1"

console.log(pessoa.nome)
console.log(pessoa)

const estatico = Object.freeze({nome: 'Jeff'})
estatico.nome = 'leal'
console.log(estatico)