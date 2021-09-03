const alunos = [
    {nome: 'keio', nota: 7.9},
    {nome: 'pato', nota: 9.2}
]

//imperativo
let total1 = 0
for(let i = 0; i< alunos.length; i++)
    total1 += alunos[i].nota
console.log(total1/alunos.length)

//declarativo
const getNota = a => a.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)