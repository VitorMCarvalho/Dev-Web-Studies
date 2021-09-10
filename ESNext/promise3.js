const numerosEntre = (min,max)=>{
    if(min >max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject)=>{
        const aleatorio = parseInt(Math.random()*(max-min+1))+min
        resolve(aleatorio)
    }) 
}

numerosEntre(10,50).then(x => console.log(x))