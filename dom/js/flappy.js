function newElement(tag, classe){
    const elemento = document.createElement(tag)
    elemento.className = classe
    return elemento
}

function Barr(reversed = false){
    this.elemento= newElement('div', 'barreira')
    const borda = newElement('div','topo')
    const corpo = newElement('div', 'corpo')
    this.elemento.appendChild(reversed? corpo:borda)
    this.elemento.appendChild(reversed? borda:corpo)
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

const b1 = new Barr(true)
b1.setAltura(300)
document.querySelector('[flap]').appendChild(b1.elemento)