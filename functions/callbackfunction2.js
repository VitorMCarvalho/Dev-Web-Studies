const notas = [5, 6 , 7 , 7.5, 8, 9, 3.5, 2, 1, 10]

//sem callback
let notas_baixas = []
for(let i in notas){
    if(notas[i] < 7){
        notas_baixas.push(notas[i])
    }
}
console.log(notas_baixas)

//Com Callback

notas_baixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notas_baixas)

const notasbaixinha = notas.filter(nota => nota<7)
console.log(notasbaixinha)