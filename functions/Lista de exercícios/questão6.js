/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const juros_simples = (capital, taxa, tempo) =>{
    return console.log('R$'+(capital + (capital*taxa)*tempo).toFixed(2))
}
juros_simples(5000, 0.1, 3)

const juros_compostos = (capital, taxa, tempo) =>{
    for(let i = 0; i<tempo; i++){
        capital = capital + capital*taxa
    }
    return console.log('R$'+capital.toFixed(2))
}
juros_compostos(356, 0.25, 7)