function goodnews(nota) {
    if (nota >= 7){
        console.log("aprovado com " + nota)
    } else{
        console.log('reprovado com ' + nota)
    }
}

goodnews(8.1)
goodnews(6.9)

function verdade(val){
    if(val){
        console.log('é verdade ' + val)
    } else{
        console.log('não é verdade ' + val)
    }
}

verdade(true)
verdade(false)
verdade(undefined)
verdade()