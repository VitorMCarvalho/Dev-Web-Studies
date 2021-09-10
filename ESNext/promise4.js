const numerosEntre = (min,max, tempo)=>{
    if(min >max)
        [max, min] = [min, max]
    return new Promise((resolve, reject)=>{
        setTimeout(_ =>{
        const aleatorio = parseInt(Math.random()*(max-min+1))+min
        resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([ // so vai ser printado no then, quando todos acontecerem, ou seja, depois dos 4000ms
        numerosEntre(1,60,2000),
        numerosEntre(1,60,4000),
        numerosEntre(1,60,500),
        numerosEntre(1,60,3000),
        numerosEntre(1,60,100),
        numerosEntre(1,60,1500),
    ])
}
console.time('promise')
gerarVariosNumeros()
    .then(x => console.log(x))
    .then(_ => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })