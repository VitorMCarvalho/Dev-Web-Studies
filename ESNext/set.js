//nao aceita repetição, nao indexado
const times = new Set()
times.add('sport').add('santa cruz').add('nautico')
times.add('sport').add('palmeiras')
times.add('flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('Sport'))
console.log(times.has('sport'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['joe', 'jim', 'june', 'jim', 'jess', 'joao']
const nomesSet = new Set(nomes)
console.log(nomesSet)