function compras(trab1, trab2){
    const comprarsorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2
    const mantersaudavel = ! comprarsorvete
    return {comprarsorvete, comprarTv50, comprarTv32, mantersaudavel} // object ES6 (2015)
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))