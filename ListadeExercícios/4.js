/*Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

const mes = numero =>{
    switch(numero){
        case 1:
            return console.log('janeiro')
        case 2:
            return console.log('fevereiro')
        case 3:
            return console.log('março')
        case 4:
            return console.log('abril')
        case 5:
            return console.log('maio')
        case 6:
            return console.log('junho')
        case 7:
            return console.log('julho')
        case 8:
            return console.log('agosto')
        case 9:
            return console.log('setembro')
        case 10:
            return console.log('outubro')
        case 11:
            return console.log('novembro')
        case 12:
            return console.log('dezembro')
        default:
            return console.log('mês inválido')
    }
}
mes(2)
mes(12)
mes(5)
mes(-1)
mes(4)
mes(13)