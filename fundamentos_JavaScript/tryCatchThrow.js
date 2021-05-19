function tratarerro(){
    throw new Error('deu erro')
    //throw 10
    //throw true
    //throw "error"
}
function printnome(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    }   catch(e){
        tratarerro(e)
    } finally{
        console.log('operação finalizada')
    }
}

const obj = { name: "vitor"}
printnome(obj)