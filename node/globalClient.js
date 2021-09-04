require("./global")
console.log(MinhaApp.saudacao())

MinhaApp.nome = "jesus" // por isso deve-se evitar variáveis globais e usar módulos
console.log(MinhaApp.nome)