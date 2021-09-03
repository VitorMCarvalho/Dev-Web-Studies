const alunos = [
    {nome: "joe", nota:7.3, bolsista:true},
    {nome: "jeff", nota:9.2, bolsista:true},
    {nome: 'jim', nota:9.8, bolsista:false},
    {nome: 'john', nota:8.7, bolsista:true}
]

//all bolsista?
const all = alunos.map(b=>b.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})
console.log(all)
//some bolsista?
const some = alunos.map(b=>b.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})
console.log(some)