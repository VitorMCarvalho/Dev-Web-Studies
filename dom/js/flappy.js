function newElement(tag, classe){
    const elemento = document.createElement(tag)
    elemento.className = classe
    return elemento
}

function barreira(reversed = false){
    this.elemento= newElement('div', 'barreira')
    const borda = newElement('div','topo')
    const corpo = newElement('div', 'corpo')
    this.elemento.appendChild(reversed? corpo:borda)
    this.elemento.appendChild(reversed? borda:corpo)
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b1 = new Barreira(true)
// b1.setAltura(300)
// document.querySelector('[flap]').appendChild(b1.elemento)

function parDeBarreira(altura, espaco, posicaoHorizontal){
    this.elemento = newElement('div', 'par-de-barreira')
    this.superior = new barreira(true)
    this.inferior = new barreira()

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.randomSpaceBetween = ()=>{
        const aberturaSuperior = Math.random()*(altura-espaco)
        const aberturaInferior = altura-aberturaSuperior-espaco
        this.inferior.setAltura(aberturaInferior)
        this.superior.setAltura(aberturaSuperior)
    }

    this.getPosicaoHorizontal = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setPosicaoHorizontal = posicaoHorizontal => this.elemento.style.left = `${posicaoHorizontal}px`
    this.largura = () => this.elemento.clientWidth

    this.randomSpaceBetween()
    this.setPosicaoHorizontal(posicaoHorizontal)
}

// const b = new parDeBarreira(700,200,700)
// document.querySelector('[flap]').appendChild(b.elemento)

function Barreiras(altura,largura, abertura, espaco, avisoPontos){
    this.pares =
    [
        new parDeBarreira(altura,abertura,largura),
        new parDeBarreira(altura,abertura,largura + espaco),
        new parDeBarreira(altura,abertura,largura + espaco*2),
        new parDeBarreira(altura,abertura,largura + espaco*3)
    ]

    const deslocamento = 5

    this.animar = () =>{
        this.pares.forEach(par =>{
            par.setPosicaoHorizontal(par.getPosicaoHorizontal()-deslocamento)

            if(par.getPosicaoHorizontal() < -par.largura()){
                par.setPosicaoHorizontal(par.getPosicaoHorizontal() + espaco*this.pares.length)
                par.randomSpaceBetween()
            }
            const meio = largura/2
            const cruzouMeio = par.getPosicaoHorizontal() + deslocamento >= meio 
                && par.getPosicaoHorizontal() < meio
            if(cruzouMeio) avisoPontos()
        })
    }
}

function Passaro(alturaJogo){
    let voando = false

    this.elemento = newElement('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getPosicaoVertical = ()=> parseInt(this.elemento.style.bottom.split('px')[0])
    this.setPosicaoVertical = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () =>{
        const novoY = this.getPosicaoVertical() + (voando? 8 : -5)
        const alturaMax = alturaJogo - this.elemento.clientWidth

        if(novoY <=0)
            this.setPosicaoVertical(0)
        else if(novoY >= alturaMax)
            this.setPosicaoVertical(alturaMax)
        else
            this.setPosicaoVertical(novoY)
    }

    this.setPosicaoVertical(alturaJogo/2)
}


function Progess(){
    this.elemento = newElement('span', 'progresso')
    this.atualizarPontos = pontos => this.elemento.innerHTML = pontos
    this.atualizarPontos(0)
}

// const Altura = 700
// const passaro = new Passaro(Altura)
// const barreiras = new Barreiras(Altura,1200,300,400)
// const jogo = document.querySelector('[flap]')
// jogo.appendChild(passaro.elemento)
// jogo.appendChild(new Progess().elemento)
// barreiras.pares.forEach(par=> jogo.appendChild(par.elemento))
// setInterval(()=>{
//     barreiras.animar()
//     passaro.animar()
// },20)

function Sobreposicao(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left +b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top+ b.height >=a.top


    return horizontal && vertical
}

function Colidiu(passaro, barreiras){
    let colidiu = false
    barreiras.pares.forEach(par =>{
        if(!colidiu){
            const superior = par.superior.elemento
            const inferior = par.inferior.elemento
            colidiu = Sobreposicao(passaro.elemento, superior) || Sobreposicao(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function oJogo(){
    let pontos = 0

    const areaJogo = document.querySelector('[flap]')
    const altura = areaJogo.clientHeight
    const largura =areaJogo.clientWidth

    const progresso = new Progess()
    const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos))

    const passaro = new Passaro(altura)

    areaJogo.appendChild(progresso.elemento)
    areaJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento))

    this.start = () =>{
        const temporizador = setInterval(()=>{
            barreiras.animar()
            passaro.animar()

            if(Colidiu(passaro, barreiras)){
                clearInterval(temporizador)
            }
        },20)
    }
}

new oJogo().start()