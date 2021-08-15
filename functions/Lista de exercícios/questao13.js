/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const dia = day =>{
    switch(day){
        case 1:
            return console.log('Fim de Semana')
        case 2:
            return console.log('Dia útil')
        case 3:
            return console.log('Dia útil')
        case 4:
            return console.log('Dia útil')
        case 5:
            return console.log('Dia útil')
        case 6:
            return console.log('Dia útil')
        case 7:
            return console.log('Fim de Semana')
        default:
            return console.log('Dia Inválido')     
    }
}
dia(1)
dia(5)
dia(7)
dia(8)