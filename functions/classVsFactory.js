//class
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jacó')
p1.falar()

//Factory

const pessoa = nome =>{ 
    return {
        falar: () => console.log(`meu nome é `+nome)
    }
}
const p2 = pessoa('Ivanir')
p2.falar()

//desafio
function Desafio(nome = 'Edelson'){
    this.nome = nome
    this.falar = () => console.log(`meu nome é ${this.nome}`) 
    
}

const novo = new Desafio()
novo.falar()