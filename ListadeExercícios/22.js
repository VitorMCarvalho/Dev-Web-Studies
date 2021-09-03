/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/


const sorte = num =>{
    const aux = Math.floor(Math.random()*10)+1
    if(num === aux)
        return console.log(`Parabéns! O número sorteado foi o ${aux}`)
    else
        return console.log(`Que pena! O número sorteado foi o ${aux}`)
}

sorte(10) // retornará "Parabéns! O número sorteado foi o 10"
sorte(5) // retornará "Que pena! O número sorteado foi o 3"
sorte(5) // retornará "Que pena! O número sorteado foi o 1"