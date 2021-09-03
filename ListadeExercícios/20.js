/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.*/

const area = (base, altura) =>{
    return console.log(((base*altura)/2).toFixed(2))
}

area(10, 15) // retornará 75.00
area(7, 9) // retornará 31.50
area(9.25, 13.1) // retornará 60.59