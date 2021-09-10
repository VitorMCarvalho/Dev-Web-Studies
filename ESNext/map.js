const tecno = new Map()
tecno.set('react', {framework:false})
tecno.set('angular', {framework:true})

console.log(tecno.react) //errado -- undefined
console.log(tecno.get('react').framework)

const chaves = new Map([
    [function(){}, "Função"],
    [{},"objeto"],
    [123, "numero"]
])

chaves.forEach((valor, chave)=>{
    console.log(chave,valor)
}) 
console.log(chaves.has(123))
chaves.delete(123)
console.log(chaves.has(123))
console.log(chaves.size)

chaves.set(123,'a')
chaves.set(123,'b')
chaves.set(466, 'b')
console.log(chaves)