//Faça um algoritmo que calcule o fatorial de um número.

const fatorial = num =>{
    let resultado = 1
    for(let i = num; i>0; i--)
        resultado = resultado*i
    return console.log(resultado)
}

fatorial(6)
fatorial(4)
fatorial(9)
fatorial(3)