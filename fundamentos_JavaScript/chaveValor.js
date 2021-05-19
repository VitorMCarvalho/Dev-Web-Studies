//par     chave/valor
const saudacao = 'ola' // contexto 1

function exec(){
    const saudacao = "eai" //contexto 2
    return saudacao
}
//const saudacao = 'erro'

//objetos sao grupos aninhados de pares chaves/valor
const cliente = {
    nome: 'vitor',
    idade: 22,
    peso: 80,
    endereco:{
        rua: 'monte belo',
        numero: 83
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)