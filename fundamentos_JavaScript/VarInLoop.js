for(var i = 0; i< 10; i++){
    console.log(i)
}
console.log('i =', i) //contexto global

const funcs = []

for(var y = 0; y<10; y++){
    funcs.push(function(){
        console.log(y)
    }
    )
}

funcs[2]()
funcs[8]()


