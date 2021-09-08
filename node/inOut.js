const anonimo = process.argv.indexOf('-a') !== -1 // le um parametro passado junto com o node inOut.js
//console.log(anonimo)

if(anonimo){
    process.stdout.write("é o anonimo\n") // vai retornar se o parametro for diferente de "" ou false
    process.exit()
}
else{
    process.stdout.write("informe o seu nome do lado de 'node inOut.js' ")
    process.stdin.on('data', data =>{ //quando houver entrada de dados por meio do Enter pressionado
        const nome = data.toString().replace("\n", '')
        process.stdout.write(`oi ${nome} :)`)
        process.exit()
    })
}