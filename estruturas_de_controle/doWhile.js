function randint(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1
do{
    opcao = randint(-1,10)
    console.log('result = '+ opcao)
}while(opcao != -1)
