const fab = ['ruffles', 'elma', 'pringles', 'pipos']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fab.forEach(imprimir)
fab.forEach(fabs => console.log(fabs))