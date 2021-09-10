//ES8 : Object.values / Object.entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal

const nome = "joe"
const pessoa ={
    nome, 
    ola(){
        return "novidade de nao passar um param function"
    }
}

console.log(pessoa.nome, pessoa.ola())

//class
class Animal{}
class Cachorro extends Animal{
    latir(){
        return "au au"
    }
}

const tony = new Cachorro()
console.log(tony.latir())