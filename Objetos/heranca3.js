const pai = { nome: 'joel', cabelo: 'preto'}
const filho1 = Object.create(pai)
filho1.nome = "joe"
console.log(filho1.cabelo)

const filho2 = Object.create(pai, {
    nome:{value: "jesus", writable: false, enumerable:true}
})

console.log(filho2.nome)
filho2.nome = "jennifer"
console.log(`${filho2.nome} tem cabelo ${filho2.cabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))
for(let key in filho2){
    filho2.hasOwnProperty(key)? console.log(key): console.log('heranca')
}
