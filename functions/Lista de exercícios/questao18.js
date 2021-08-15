/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const conversor = numero => {
    switch(numero){
        case 0:
            return console.log("zero")
        case 1:
            return console.log("um")
        case 2:
            return console.log("dois")
        case 3:
            return console.log("três")
        case 4:
            return console.log("quatro")
        case 5:
            return console.log("cinco")
        case 6:
            return console.log("seis")
        case 7:
            return console.log("sete")
        case 8:
            return console.log("oito")
        case 9:
            return console.log("nove")
        case 10:
            return console.log("dez")
        default:
            return console.log('Número fora do intervalo.')
    }
}
conversor(1)
conversor(3)
conversor(5)
conversor(9)
conversor(11)