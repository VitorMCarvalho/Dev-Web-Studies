// TRABALHOSO
const produto = {
    nome: 'xxxx',
    preco: 45
}
const produto2 = {
    nome: 'yyyy',
    preco: 55
}
//FUNCTION FACTORY
function criarPessoa(){
    return {
        nome: 'Vitor',
        idade: 22
    }
}
console.log(criarPessoa())

function criarProduto(nome = 'veja', preco = 2){
    return{
        nome: nome, //ou apenas nome
        preco // ou preco: preco
    }
}
console.log(criarProduto('tomate', 0.5))