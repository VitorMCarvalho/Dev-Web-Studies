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
// ES8
//simplificar o uso de promisses
let obterAlunos = async() =>{ //await so funcionará dentro de uma função chamada async
    const TurmaA = await getTurma('A')
    const TurmaB = await getTurma('B')
    const TurmaC = await getTurma('C')
    return [].concat(TurmaA,TurmaB,TurmaC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(printa => console.log(printa))