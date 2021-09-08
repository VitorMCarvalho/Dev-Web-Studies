const fs = require("fs")

const produto ={
    nome: 'pichau',
    preco: 2000,
    desconto: 0.20
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || "arquivo escrito e salvo")
})