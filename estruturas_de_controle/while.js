let x = 0
while(x<10){
    console.log('x ='+ x )
    x++
}

function getrand(min, max){
    const valor = Math.random()*(max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getrand(-1,10)
    console.log("resultado =" + opcao)
}