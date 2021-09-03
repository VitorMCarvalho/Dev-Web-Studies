const alunos = [
    {nome: "joe", nota:7.3, bolsista:false},
    {nome: "jeff", nota:9.2, bolsista:true},
    {nome: 'jim', nota:9.8, bolsista:false},
    {nome: 'john', nota:8.7, bolsista:true}
]

const result = alunos.map(a=>a.nota).reduce(function(acomulador, atual){
    console.log(acomulador,atual)
    return acomulador + atual
}, /*10*/ /* <-valor inicial */)

console.log(result)
