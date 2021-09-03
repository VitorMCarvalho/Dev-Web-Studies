const piloto = ["vettel", 'alonso', 'hamilton', 'rubinho']
piloto.pop() // F rubinho
console.log(piloto)

piloto.push('senna')
console.log(piloto)

piloto.shift() // F vettel
console.log(piloto)

piloto.unshift('massa')
console.log(piloto)

//splice add e remove elementos
//add
piloto.splice(2,0, 'bottas',  'sapatos')
console.log(piloto)
//remover
piloto.splice(3,1)
console.log(piloto)

const separate = piloto.slice(3) //outro array
console.log(separate)

const separate2 = piloto.slice(1,4)
console.log(separate2)