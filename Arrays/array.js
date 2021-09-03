console.log(typeof Array, typeof new Array, typeof [])
let aprovado = new Array("bia", "joel", 'joe')
console.log(aprovado)
aprovado = ['jay', 'james', 'janna']
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3]) //undefined

aprovado[3] = 'jessica'
aprovado.push('jennifer')
aprovado[10] = 'doContra'
console.log(aprovado)
console.log(aprovado.length)
console.log(aprovado[7]=== undefined)

aprovado.sort()
console.log(aprovado)

delete aprovado [3]
console.log(aprovado)

aprovado = ['jax', 'leesin', 'sett']
aprovado.splice(1,0,"nasus", "singed")
console.log(aprovado)
aprovado.splice(3,2)
console.log(aprovado)