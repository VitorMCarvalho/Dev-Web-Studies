/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

const div3 = param => {
    param%3 === 0? param = true:param= false
    return console.log(param) 
}
div3(3)
div3(4)
div3(12)
div3(15)
div3(2)
