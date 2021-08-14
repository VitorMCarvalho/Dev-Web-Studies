const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito de paradigma funcional com OO

const falardepessoa = pessoa.falar.bind(pessoa) //bind 'amarra' um objeto na execução, ele liga o método falar ao contexto do objeto pessoa
falardepessoa()