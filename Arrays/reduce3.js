Array.prototype.reduzido = function(r,init = 0){
    if (init !== 0){
        let acomulador = init
        for(let i = 0; i<this.length; i++){
            acomulador = r(acomulador, this[i], i, this)
        }
        return acomulador
    }
    else if(init === 0){
        acomulador = this[0]
        for(let i = 1; i<this.length; i++){
            acomulador = r(acomulador, this[i], i, this)
        }
        return acomulador
    }
}

const alunos = [
    {nome: "joe", nota:7.3, bolsista:false},
    {nome: "jeff", nota:9.2, bolsista:true},
    {nome: 'jim', nota:9.8, bolsista:false},
    {nome: 'john', nota:8.7, bolsista:true}
]

const result = alunos.map(a=>a.nota).reduzido(function(acomulador, atual){
    console.log(acomulador,atual)
    return acomulador + atual
}, 10/*10*/ /* <-valor inicial */)

console.log(result)
