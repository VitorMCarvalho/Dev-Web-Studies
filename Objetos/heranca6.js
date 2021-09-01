function Aula(nome, video){
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('intro', 111)
const aula2 = new Aula('chapter 1', 222)
console.log(aula1, aula2)

//simular new
function novo(f,... params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "intro", 111)
const aula4 = novo(Aula, "chapter 1", 222) 
console.log(aula3, aula4)