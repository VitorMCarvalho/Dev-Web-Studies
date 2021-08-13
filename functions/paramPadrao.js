// estratergia 1 para gerar valor padrao
function soma1(a, b, c ){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))
//estratergia 2, 3 e 4 para gerar valor padrao
function soma2(a,b,c){
    a = a !== undefined? a:1 // comparando se A é estritamente diferente de undefined 
    b = 1 in arguments? b:1 // comparando se o valor de indice 1 exite no vator arguments
    c = isNaN(c) ? 1:c // comparando se C is NaN, caso seja, cai para o valor default
    return console.log(a+b+c)
}
soma2()
soma2(3)
soma2(1,2,3)
soma2(0,0,0)

//valor padrao do ES6 (2015)
function soma3(a=0, b=0, c=0){
    return console.log(a+b+c)
}
soma3()
soma3(3)
soma3(1,2,3)
soma3(0,0,0)