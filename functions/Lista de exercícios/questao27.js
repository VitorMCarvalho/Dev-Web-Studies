/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const dados = (alt1, tax1, alt2, tax2)=> {
    if(alt1 === alt2){
        if(tax1 >tax2)
            console.log('A criança 2 nunca passará a criança 1')
        else if(tax1 < tax2)
            console.log('A criança 1 nunca passará a criança 2')
        else
            return console.log('as alturas e taxas de crescimentos são iguais')
    }
    let menor = alt1<alt2? 1:2
    if(alt1 !== alt2)
        console.log('a '+menor+'º criança é a menor')
    if(menor ===1){
        if(tax1 < tax2)
            return console.log('A criança 1 nunca passará a criança 2')
    }
    if(menor ===2){
        if(tax2 < tax1)
            return console.log('A criança 2 nunca passará a criança 1')
    }
    for(let i = 1; i<1000; i++){
        alt1 = alt1+tax1
        alt2 = alt2+tax2
        if(menor === 1 && alt1>alt2){
            console.log(`a criança 1 passará a criança 2 em ${i} ano(s)`)
            break
        }
        if(menor === 2 && alt1<alt2){
            console.log(`a criança 2 passará a criança 1 em ${i} ano(s)`)
            break
        }
    }

}
dados(150, 2, 130, 4)
dados(150, 2, 150, 4)
dados(150, 2, 150, 2)
dados(110, 2, 150, 4)
dados(150, 2, 120, 4)