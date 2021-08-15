/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

const aumento = (tipo,salario = 0) =>{
    switch(tipo){
        case 'A':
            return console.log(salario + salario*0.1)
        case 'B':
            return console.log(salario + salario*0.15)
        case 'C':
            return console.log(salario + salario*0.2)
        default:
            return console.log("plano inválido")
    }
}

aumento('A', 1500)
aumento('B', 1500)
aumento('C', 1500)
aumento('D', 1500)