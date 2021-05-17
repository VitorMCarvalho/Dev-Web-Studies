for(let i = 0; i < 10; i++){
    console.log(i)
}
//console.log('i = ', i) //error undefined contexto local
const funcs = []
for(let y = 0; y<10; y++){
    funcs.push(function(){
        console.log(y)
    }
    )
}

funcs[2]()
funcs[8]()