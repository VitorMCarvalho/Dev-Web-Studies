/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/


const soma = a => a.preco
const func = array =>{
    const resultado = array.map(soma)
    let total = 0
    for(let i = 0; i<resultado.length; i++)
        total += resultado[i]
    return console.log(total) 
}
func([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) // retornará 239.99
func([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89


//METODO ALTERNATIVO COM REDUCE --melhor método

const somaai = array =>{
    const soma = array.reduce((acumulador,atual)=> acumulador.preco + atual.preco)
    return console.log(soma)
}
somaai([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) // retornará 239.99)
somaai([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89
