//COM promise

const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{
        http.get(url,res =>{
            let resultado = ''
            res.on('data',dados =>{
                resultado += dados
            })
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(err){
                    reject(err)
                }
            })
        })
    })
}

let nomes = []

//substituindo as callbacks por promises
getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
    getTurma('B').then( alunos => {
        nomes = nomes.concat(alunos.map(a=> `B: ${a.nome}`))
        getTurma('C').then( alunos => {
            nomes = nomes.concat(alunos.map(a=> `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
//a mesma coisa usando promise
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(aluno => aluno.map(indice =>indice.nome))
    .then(nome=>console.log(nome))
    .catch(err => console.log(err))

getTurma('E').catch(err => console.log(err)) //turma nao existe