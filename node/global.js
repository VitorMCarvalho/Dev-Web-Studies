//console.log(global) //tornar ele imutável, caso vá usar variáveis globais
global.MinhaApp = Object.freeze({
    nome: 'onipresente',
    saudacao(){
        return "isso é global"
    }
})