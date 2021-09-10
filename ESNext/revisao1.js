// let e const --nao usar var, tem escopo apenas global
{
    var a = 2
    let b = 3
    console.log(b) //ok
}
console.log(a)
//console.log(b) // error

// template String
const produto = 'videogame'
console.log(`${produto} é caro`)

//desctructuring
const [l,e,...tra] = 'coder'
console.log(l,e,tra)

const [x, ,y] = [1,3,2]
console.log(x,y)

const {nome, idade:i} = {nome: "joe", idade: 19}
console.log(nome, i)