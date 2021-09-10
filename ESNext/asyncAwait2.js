const numerosEntre = (min,max,duplicado)=>{
    if(min >max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject)=>{
        const aleatorio = parseInt(Math.random()*(max-min+1))+min
        if(duplicado.includes(aleatorio)){
            reject(`número duplicado :${aleatorio}`)
        }
        else{
            resolve(aleatorio)
        }
    }) 
}
async function megaSena(quantidade){
    const num = []
    
    try{
        for(let _ of Array(quantidade).fill()){
        num.push(await numerosEntre(1,60,num))
        }
        return num
    } catch{
        throw "deu ruim"
    }
}

numerosEntre(1,5,[1,2,4])
    .then(console.log)
    .catch(console.log)

megaSena(8)
    .then(console.log)
    .catch(console.log)