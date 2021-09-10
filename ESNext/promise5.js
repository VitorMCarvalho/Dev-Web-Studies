function funcionaOuNao(valor, chance){
    return new Promise((resolve, reject)=>{
        if (Math.random()<chance)
            reject("ocorreu um erro");
        else
            resolve(valor);
    })
}

funcionaOuNao('teste', 0.9)
    .then(x =>console.log(x)/*,
        err => console.log('erro específico, caso seja tratado aqui, o catch nao será tratado')*/)
    .catch(console.log)