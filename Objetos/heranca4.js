function MyObject(){}
console.log(MyObject.prototype)
console.log(MyObject.__proto__)

const obj1 = new MyObject
const obj2 = new MyObject
console.log(obj1.__proto__ == obj2.__proto__)
console.log(MyObject.prototype === obj1.__proto__)

MyObject.prototype.nome = "Anomino" // hehe
MyObject.prototype.falar = function() {
    console.log(`hello world, eu sou ${this.nome}`)
}
obj1.falar()

obj2.nome = "ferjesson"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.nome = 'Obj3'
obj3.falar()

//resumo
console.log((new MyObject).__proto__ === MyObject.prototype)
console.log((new MyObject).__proto__ )
console.log(MyObject.__proto__ === Function.prototype)
console.log(MyObject.__proto__)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Function.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)