const aprovado = ['jan', 'joe', 'jemm', 'jimmy']

aprovado.forEach(function(nome, indice, array, undefi){ //3 parametros => conteudo, indice, proprio array, undefined...
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
    console.log(undefi)
})

aprovado.forEach((nome) => console.log(nome))

const print = nome => console.log(i++ +") "+ nome)
let i = 1
aprovado.forEach(print)