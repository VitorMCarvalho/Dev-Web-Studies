let a = 3 
global.b = 55
this.c = 99
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
// variavel global sem sentido
abc = 564631365431256 // nao fazer isso
console.log(global.abc)