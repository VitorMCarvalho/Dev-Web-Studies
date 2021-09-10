for(let letras of 'cod3r')
    console.log(letras)

const assuntosJava = ['map', 'set', 'promise']

for(let i in assuntosJava){
    console.log(i)
}

for(let assunto of assuntosJava){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promisse',{abordado: false}]
])
for(let assunto of assuntoMap.keys()){
    console.log(assunto)
}
for(let assunto of assuntoMap.values()){
    console.log(assunto)
}
for(let [ch,vl] of assuntoMap){
    console.log(ch,vl)
}

const s = new Set(['a','b','c'])
for(let letra of s)
    console.log(letra)