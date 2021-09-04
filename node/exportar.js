console.log(module.exports) // o valor retornar será oq module.exports aponta
console.log(module.exports === this) // this e exports sao apenas duas referencias para o module.exports
console.log(module.exports === exports)

this.a=1
exports.b = 2
module.exports.c = 3
exports = null
console.log(module.exports)

exports ={ // nao será retornado
    nome: "teste"
}
console.log(module.exports)
module.exports ={ publico:true} //será retornado, pois o objeto em module.exports foi modificado