/*) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const divisãoCompleta = (divisor, dividendo) =>{
    console.log(dividendo/divisor)
    //console.log((dividendo-(dividendo%divisor))/divisor) //divisão com resultado inteiro
    console.log(dividendo%divisor)
}
divisãoCompleta(3,16)
divisãoCompleta(3,5)