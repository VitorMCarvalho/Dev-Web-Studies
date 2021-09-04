const moduloA = require("../../moduloA") // <-esse modo é preferível //moduloa apenas em MacOS ou windows
//OU
//const moduloA = require("/home/vitor/Área de Trabalho/Dev-Web-Studies/node/moduloA.js")
console.log(moduloA.ola)

const saudacao = require('saudacao') // pasta criada dentro de node_modules
console.log(saudacao.ola) //foi identificado por causa da pasta index.js

const c = require("./pastaC/index") // ou require("./pastaC") por conta do index.js
console.log(c.ola)
/* const http = require('http') //modulo core do node
http.createServer((req, res) =>{
    res.write('ola peter')
    res.end()
}).listen(8080) */