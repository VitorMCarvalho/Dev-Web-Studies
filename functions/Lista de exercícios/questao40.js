/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const conceito = vetor =>{
    for(x of vetor){
        if(x<4.9 && x>0)
            console.log('D')
        else if(x>=5 && x<7)
            console.log('C')
        else if(x>=7 && x<9)
            console.log('B')
        else if(x>=9 && x<=10)
            console.log('A')
        else
            console.log("nota invalida")
    }
}
let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
conceito(notas)