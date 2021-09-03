/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.*/

const entre = (numero, minimo, maximo, inclusivo = false)=>{
    if(inclusivo){
        if(numero >= minimo && numero <= maximo)
            return console.log(true)
        else
            return console.log(false)
    }
    else
        if(numero> minimo && numero < maximo)
            return console.log(true)
        else
            return console.log(false)
}

entre(50, 10, 100) // retornará true
entre(160, 16, 100) // retornará false
entre(3, 3, 150) // retornará false
entre(3, 3, 150, true) // retornará true