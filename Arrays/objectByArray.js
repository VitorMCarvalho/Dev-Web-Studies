const simularray = {0:"joe", 1:"jan", 2:"joao"}
console.log(simularray)
Object.defineProperty(simularray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable:false
})
console.log(simularray[0])

const array = ['joe', 'jan', 'joao']
console.log(simularray.toString(), array)