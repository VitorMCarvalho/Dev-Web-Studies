//ler dados de texto.txt usando promises

const fs = require('fs')
const path = __dirname + '/dados.txt'

const lerArquivo = caminho =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(caminho, 'utf-8', (err,conteudo)=>{
            if(err === null)
                resolve(conteudo.toString())
            else
                reject(err)
        })
    })
}
lerArquivo(path).then(console.log).catch(console.log)