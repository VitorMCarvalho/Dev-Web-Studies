// notacao literal
const obj1 = {}
console.log(obj1)

//Object
console.log(typeof Object, typeof new Object )
const obj2 = new Object
console.log(obj2)

//funcao construtora
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoCDesc = () =>{
        return 'R$' + preco * (1-desconto)
    }
}

const prod1 = new Produto('caneta', 2, 0.1)
const prod2 = new Produto('VideoGame', 5000, 0.15)

console.log(prod1.getPrecoCDesc(), prod2.getPrecoCDesc())

// funcao factory
function criarObjeto(nome, salario, falta){
    return {
        nome, 
        salario,
        falta,
        getSalario(){
            return(salario/30)*(30-falta)
        }
    }
}

const f1 = criarObjeto('john', 7502, 3)
const f2 = criarObjeto('joel', 1000, 7)
console.log(f1.getSalario(), f2.getSalario())

//object.create 
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//retorna um objeto
const fromJSON = JSON.parse('{"info": "é um JSON"}')
console.log(fromJSON.info)