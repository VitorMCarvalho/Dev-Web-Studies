//simulação de DB
//atualiza o indice
const sequence ={
    _id:1,
    get id(){return this._id++}
}
//o armazenador
const produtos ={}
//o adicionador
function salvarProduto(produto){
    if(!produto.id)
        produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
//retorna um item do DB
function getProduto(id){
    return produtos[id] ||{}
}
//retorna o DB
function getProdutos(){
    return Object.values(produtos)
}
//Remove um item do Db
function excluirProduto(id){
    return delete produtos[id]
}
//exporta
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}
