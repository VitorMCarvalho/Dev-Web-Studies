//ES6
const pessoa ={
    nome: 'vitor',
    idade: 22,
    endereco : {
        rua: 'Monte Belo',
        num: 30
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const{ endereco: {rua, num, cep} } = pessoa
console.log(rua, num, cep)