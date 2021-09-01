const produto= new Object
produto.nome = "Celular"
produto['marca'] = 'Samsung'
produto.preco = 2999
console.log(produto)

delete produto.preco
delete produto.marca
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 90000,
    dono: {
        nome: 'John',
        idade: 37,
        endereco:{
            rua: "José Bonifácio",
            numero: 777
        }
    },
    condutores: [{
        nome: 'Joel',
        idade: 59
    },{
        nome: 'Santana',
        idade: 25
    }],
    dirigir: _ =>{
        //...
    }
}
console.log(carro.dono.nome)