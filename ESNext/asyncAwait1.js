
const esperarPor = (tempo =2000) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(_=>resolve(),tempo)
    })
}

esperarPor(2000)
    .then(_=>console.log("promise 1"))
    .then(esperarPor)
    .then(_=>console.log("promise 2"))
    .then(esperarPor)
    .then(_=>console.log("promise 3"))

function retornaVal(){
    return new Promise((resolve, reject)=>{
        setTimeout(_=>{resolve(10),5000})
    })
}

async function retornaValor(){
    return 20 //isso vai ser uma promisse e para ser lido precisa ser passado por um parametro await ou por um then
}

//equivalencia
async function executar(){
    //const valor = await retornaValor()
    const valor = await retornaVal() //as funções abaixo esperarão "valor" exister para funcionarem "sincronamente"

    await esperarPor(2000) //sem o await, as funções sao executadas ao msm tempo (sincronamente)
    console.log(`valor = ${valor}`)

    await esperarPor(2000)
    console.log(`valor = ${valor*2}`)

    await esperarPor(2000)
    console.log(`valor = ${valor*3}`)
    
    return valor + 101
}

executar().then(console.log)

// o debaixo da no mesmo que a linha 42
async function executarDeVDD(){
    const valor = await executar()
    console.log(valor)
}
executarDeVDD()