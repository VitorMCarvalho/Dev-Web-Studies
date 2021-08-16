/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const jurosCompostos = (mes, valor) =>{
    if(mes < 13 && mes > 0){
        for(let i = 0; i<mes; i++)
            valor = valor + valor*0.05
        return console.log('R$'+valor.toFixed(2))
    }
    else
        console.log('mês invalido')
}
jurosCompostos(8, 1500)
jurosCompostos(12, 2000)
jurosCompostos(13, 1500)