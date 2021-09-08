const fs = require("fs")//modulo interno do node, busca nos modulos nativos do node

const caminho = __dirname + '/arquivo.json'

//sincrono, arquivos pesados podem travar o event loop

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono, melhor
fs.readFile(caminho, 'utf-8', (err,conteudo)=>{
    // err === 0 -> sucesso
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`) 
})

// em casos de arquivos Json -- Sincrono tbm...
const conf = require("./arquivo.json")
console.log(conf.db)

//leitura de pasta
fs.readdir(__dirname, (err,arquivos)=>{
    console.log("conteudo")
    console.log(arquivos)
})