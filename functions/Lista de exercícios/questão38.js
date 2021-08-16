/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const impares = (inicio=0,fim=100) =>{
    for(let x = inicio; x <= fim; x++){
        if(x%2 !==0)
            console.log(x)
    }
}
impares()
impares(1,9)