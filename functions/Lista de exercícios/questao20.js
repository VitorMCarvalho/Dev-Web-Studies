/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

const quantidade = valor =>{
    let cem = 0
    let cinquenta = 0
    let dez = 0
    let cinco = 0
    let um = 0
    let val1 =''
    let val2 =''
    let val3 =''
    let val4 =''
    let val5 =''
    if(valor/100 >= 1){
        while(valor>=100){
            valor = valor-100
            cem++
        }
        val1 = cem +' nota(s) de R$ 100. '
    }
    if(valor !== 0 && valor/50 >= 1){
        while(valor>=50){
            valor = valor-50
            cinquenta++
        }
        val2 =cinquenta +' nota(s) de R$ 50. '
    }
    if(valor !== 0 && valor/10>=1){
        while(valor>=10){
            valor = valor-10
            dez++
        }
        val3 =dez +' nota(s) de R$ 10. '
    }
    if(valor !== 0 && valor/5>=1){
        while(valor>=5){
            valor = valor-5
            cinco++
        }
        val4 =cinco +' nota(s) de R$ 5. '
    }
    if(valor !== 0 && valor>=1){
        while(valor>=1){
            valor = valor-1
            um++
        }
        val5 =um +' nota(s) de R$ 1. '
    }
    return console.log(val1+val2+val3+val4+val5)
    
}

quantidade(101)
quantidade(63)
quantidade(78)
quantidade(1017)