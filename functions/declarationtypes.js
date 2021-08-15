console.log(soma(3,5))//sem erro, função interpretada antes
console.log(sub(3,1))// erro, pois a função foi declarada numa const
console.log(mult(3,1))// erro, pois a função foi declarada numa const
//function declaration
function soma(x,y){
    return x+y
}

//function expression
const sub = function(x,y){
    return x-y
}

//named function expression
const mult = function mult(x,y){
    return x*y
}