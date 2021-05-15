const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
valores[700] = 'sete'
console.log(valores[700])
console.log(valores)
console.log(valores.length)
valores.push(false, null, "teste")
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
