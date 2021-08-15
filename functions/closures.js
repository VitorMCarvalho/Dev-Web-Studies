//Closures é o escopo criado quando uma função é declarada
//Esse escopo permite a furnção acessar e manipular variáveis externas a função
//contexto lexico

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}
const func = fora() 
console.log(func())