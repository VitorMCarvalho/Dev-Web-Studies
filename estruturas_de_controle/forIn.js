const notas = [1.0 , 7.5, 9.8, 5.7, 10, 8.8, 7.7, 4, 3.2]
for(let x in notas){
    console.log(x, notas[x])
}

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Carvalho',
    idade: 22,
    peso: '80kg'
}

for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}