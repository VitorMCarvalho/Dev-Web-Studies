//tagget template ->processar uma template String numa function
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}
const aluno = 'joe'
const situacao = "aprovado"
console.log(tag `${aluno} está ${situacao}.`)