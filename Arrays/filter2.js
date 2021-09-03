Array.prototype.filtrinho = function(a){
    let vetor = []
    for(let i = 0; i<this.length; i++){
        if(a(this[i], i, this)===true)
        vetor.push(this[i])            
    }
    return vetor
}
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil:true},
    {nome: 'iPad Pro', preco: 4199, fragil:true},
    {nome: 'Copo de vidro', preco:12.49, fragil:true},
    {nome: 'Copo de Plastico', preco:18.99, fragil:false}
]

console.log(produtos.filtrinho(function(a){
    return a.preco >500 && a.fragil
}))