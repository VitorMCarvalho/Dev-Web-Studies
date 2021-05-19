console.log(Math.ceil(6.1))
const obj = {}
obj.nome = 'vitor'
// obj['nome'] = 'vitor'
console.log(obj.nome)

function OBJ(nome){
    this.nome = nome
    this.executando = function(){
        console.log('executando')
    }
}

const OBJ2 = new OBJ('nomequalquer')
const OBJ3 = new OBJ('outronome')

console.log(OBJ2.nome)
console.log(OBJ3.nome)
OBJ2.executando()