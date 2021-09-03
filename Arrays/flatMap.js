const escola =[{
    nome: 'turma M1',
    alunos:[{
        nome:'jeff',
        nota:8.1
    },{
        nome:'jim',
        nota:9.3
    }]},
    {
    nome:'turma M2',
    alunos:[{
        nome:'kim',
        nota:8.9
    },{
        nome:'key',
        nota:7.3
    }]
    }
]

const getNotaAluno = a => a.nota
const getNotaTurma = t => t.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log([].concat(notas1[0],notas1[1]))

Array.prototype.flatmap = function(a){
    return Array.prototype.concat.apply([], this.map(a))
}
const notas2 = escola.flatmap(getNotaTurma)
console.log(notas2)