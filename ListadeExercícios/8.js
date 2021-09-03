/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

const multsemplicação = (num1, num2) =>{
    let resultado = 0
    for(let i = 0; i <num1; i++)
        resultado += num2
    return console.log(resultado)
}

multsemplicação(2,4)
multsemplicação(3,7)
multsemplicação(100,3)
multsemplicação(5,5)
multsemplicação(7,0)