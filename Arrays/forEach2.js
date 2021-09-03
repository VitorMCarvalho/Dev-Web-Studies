Array.prototype.paracada = function(a){ // implementação manual do foreach
    for(let i = 0; i<this.length; i++){
        a(this[i], i, this)
    }
}

const aprovado = ['jan', 'joe', 'jemm', 'jimmy']

aprovado.paracada(function(nome, indice){ //3 parametros => conteudo, indice, proprio array, undefined...
    console.log(`${indice+1}) ${nome}`)
})