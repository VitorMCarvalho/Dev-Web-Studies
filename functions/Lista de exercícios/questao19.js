/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

const cardapio = (code, qtd=0) => {
    switch(code){
        case 100:
            return console.log('R$'+3*qtd)
        case 200:
            return console.log('R$'+4*qtd)
        case 300:
            return console.log('R$'+5.5*qtd)
        case 400:
            return console.log('R$'+7.5*qtd)
        case 500:
            return console.log('R$'+3.5*qtd)
        case 600:
            return console.log('R$'+2.8*qtd)
        default:
            return console.log("produto inexistente")
    }
}

cardapio(100,3)
cardapio(500,2)
cardapio(600,5)
cardapio(700,3)
