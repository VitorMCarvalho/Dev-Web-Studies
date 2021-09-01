const pessoa = {
    nome: 'joel',
    idade: 55,
    peso: 80
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/07/1995'
})

pessoa.dataNascimento = '01/01/0101'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ES6

const dest = { a:1}
const ob1 = {b:2}
const ob2 = {c:3, a:7}
const final = Object.assign(dest, ob1,ob2)
console.log(final)
Object.freeze(final)
final.a =7777
console.log(final)