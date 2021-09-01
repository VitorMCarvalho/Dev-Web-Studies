class Lancamento {
    constructor(nome = "generico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinancieiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l=> this.lancamentos.push(l))
    }
    sumario(){
        let valorcons = 0
        this.lancamentos.forEach(l=>{
            valorcons += l.valor
        })
        return valorcons
    }
}
const salario = new Lancamento('Salario', 10000)
const contaLuz = new Lancamento('Luz', -500)
const contas = new CicloFinancieiro(6,2018)

contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())