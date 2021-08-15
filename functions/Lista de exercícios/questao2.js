/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function triangulo(x=0,y=0,z=0){
    if(x === y && x===z )
        console.log("Triângulo Equilátero")
    else if(x === y || x === z || y === z)
        console.log("Triângulo Isósceles")
    else
        console.log("Triângulo Escaleno")
}

const teste1 = new triangulo(4,5,3)
const teste2 = new triangulo(5,5,3)
const teste3 = new triangulo(5,5,5)