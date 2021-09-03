/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:*/

const inverter = objeto =>{
    let result = {}
    const key = Object.keys(objeto)
    const value = Object.values(objeto)
    for(let i = 0; i<key.length; i++){
        result[value[i]] = key[i]
    }
    return console.log(result)
}

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}