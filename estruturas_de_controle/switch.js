const printresult = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log("Aprovado, nota "+ nota)
            break
        case 9:
            console.log("Aprovado, nota "+ nota)
            break
        case 7:
            console.log("Aprovado, nota "+ nota)
            break
        case 6: case 5: case 4: case 3:case 2: case 1:case 0:
            console.log("Reprovado, nota "+ nota)
            break
        default:
            console.log('nota invalida')
    }
}

printresult(10)
printresult(6)
printresult(6.55)
printresult(11)
