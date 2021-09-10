function falarDepois(segundos,frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase) //aceita apenas um unico parametro
            //reject(frase)
        },segundos*1000)
    })
}
//                         o resultado dos then's é encadeado, o que sai do promeiro entra no segundo e sucessivamente
falarDepois(3,"promessa")
    .then(frase=>frase.concat('???'))
    .then(outrafrase=>console.log(outrafrase))
    .catch(err => console.log(err))//chamado apenas uma vez para tratar o erro