function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    this.getVelocidadeAtual = _ => console.log(velocidadeAtual)
}

const carro = new Carro // ou Carro()
carro.acelerar()
carro.getVelocidadeAtual()

const unão = new Carro(105, 15)
unão.acelerar()
unão.acelerar()
unão.getVelocidadeAtual()