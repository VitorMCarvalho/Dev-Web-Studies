//cadeia de prototipos
Object.prototype.add = 'aqui'//nao fazer isso
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: "B"}
const filho ={__proto__: pai, atributo3: "C"}
console.log(filho.atributo1)
console.log(pai.atributo0)
console.log(pai.add)
console.log(filho.atributo1,filho.atributo2, filho.atributo3, filho.add)

const carro ={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo:'f40',
    velMax:324,//shadowing
}

const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())
ferrari.aceleraMais(300)
console.log(ferrari.status())