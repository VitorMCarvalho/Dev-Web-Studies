/* // Callback hell
setTimeout(_ =>{
    console.log('executando callback')
    setTimeout(_ =>{
        console.log('executando callback')
        setTimeout(_ =>{
            console.log('executando callback')
        },2000)
    },2000)
},2000)*/

//equivalencia
const esperarPor = (tempo =2000) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(_=>{
            console.log('executando')
            resolve()
        },tempo)
    })
}

esperarPor()
    .then(_=>esperarPor())
    .then(esperarPor)