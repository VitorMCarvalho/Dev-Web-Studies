/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

const PA = (n,a1,r) =>{
    for(let x = 1; x<=n; x++)
        console.log(a1 + (x-1)*r)
}
const PG = (n,a1,r) =>{
    for(let x = 1; x<=n; x++)
        console.log(a1*r**(x-1))
}

PA(5,2,3)
PG(5,2,3)