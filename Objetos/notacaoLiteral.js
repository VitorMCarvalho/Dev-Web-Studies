const a = 1
const b = 2
const c = 3

const objeto = {
    a: a,
    b: b,
    c: c
}

const objetonovo = {
    a,
    b,
    c
}

console.log(objeto, objetonovo)

const nomeAtributo = 'nota'
const valorAtributo = 5.9

const objeto3 = {}
objeto3[nomeAtributo] = valorAtributo
console.log(objeto3)

const objeto4 = {[nomeAtributo]: valorAtributo}
console.log(objeto4)

const objeto5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}
console.log(objeto5)