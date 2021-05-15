function printSoma(a, b){
    console.log(a + b)
}
printSoma(10, 10)
printSoma(5)
printSoma(3, '-3')

function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(20,20))
console.log(soma())
console.log(soma(null,20))