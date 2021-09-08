//criação do package.json (wizard de criação de projetos) -> npm init
//para pular etapas -> npm init -y (sim pra tudo)
//instalação de modulo e anexação ao package.json -> npm install --save modulo (nesse caso o modulo foi o axios)
//lock de integridade de versao de teste na maquina -> package-lock.json (garante que o projeto que seja enviado é o que está rodando na maquina)

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require("axios") //biblioteca de requisição http

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    retorna(funcionarios)
})
//desafio -> retornar a mulher, chinesa, com menor salário da lista json
const retorna = array =>{
    let funcionarios = array.filter(x=> x.genero === 'F' && x.pais === 'China')
    let id = funcionarios[0].id
    let mulher = funcionarios.reduce((antes,atual)=>{
        if(antes.salario >atual.salario){
            antes.salario = atual.salario
            //console.log(antes.salario)
        }
        return antes
    })
    console.log(mulher)
}
