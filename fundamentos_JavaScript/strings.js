const escola = 'cod3r'
console.log(escola.charAt(4)) //local da letra
console.log(escola.charCodeAt(3)) // valor unicode do indice 3
console.log(escola.indexOf('3')) // retorna o indice da letra escolhida
console.log(escola.substring(1)) // cria uma substring a partir do indice escolhido
console.log(escola.substring(0, 3)) // mostra apenas o string no range escolhido

console.log('Escola '.concat(escola).concat("!!!")) // concatena
console.log('Escola '+ escola +"!!!") // concatena
console.log(escola.replace(3, 'e')) // substitui o indice escolhido
console.log(escola.replace(/\d/, 'e')) // substitui os digitos -- Regex
console.log(escola.replace(/\w/g, 'e')) // substitui os digitos e letras -- Regex
console.log("joao,vitor,claudio,etc".split(','))