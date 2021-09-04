console.log(this === global) //false
console.log(this === module)//false

console.log(this === exports) //true
console.log(this === module.exports)//true

function logthis(){
    console.log("dentro da função")
    console.log(this === exports) //false
    console.log(this === module.exports) //false
    console.log(this === global)//true, tomar cuidado, atribuir valores ao this dentro de funções, muda a variávem em escopo global
    //this.perigo = 'corra' // está no escopo global
    //console.log(global)
}
logthis()
this.run = "run now"
console.log(module.exports)
