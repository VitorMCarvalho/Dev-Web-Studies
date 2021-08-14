let comparacomthis = function(param){
    console.log( this === param)  // this global
}

comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj)
comparacomthis(global)
comparacomthis(obj)

let comparacomthisarrow = param => console.log(this === param) // this local
comparacomthisarrow(global)
comparacomthisarrow(module.exports)

comparacomthisarrow = comparacomthisarrow.bind(obj)
comparacomthisarrow(obj)
omparacomthisarrow(module.exports) //invariável