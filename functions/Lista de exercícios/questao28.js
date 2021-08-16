/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const ler = vetor =>{
    let par = 0
    let impar = 0
    for(x of vetor){
        if(x%2 ===0)
            par++
        else
            impar++
    }
    return console.log('pares: '+par+', impares:'+impar)
}
ler([1,2,4,6,8,9,10])