let controle = 0, numero = ''
let num = document.querySelectorAll(".botoes__urna").innerHTML
let visor = document.querySelector(".visor__dados")
var img = document.querySelector("#imagem");



window.alert("Olá!")
window.alert("Candidatos : 14, 23, 24 e 00")

const candidatos = [
    nome = '14',
    nome = '23',
    nome = '24',
    nome = '00',
]

function teclar (num) {
    numero = numero + num
    mudatela()
    img.style.display = 'none'
}

function mudatela (){
    document.querySelector('.visor__dados').innerHTML = numero
}

function corrigir () {
    numero = ''
    mudatela()
    img.style.display = 'none'
}

function votoBranco () {
    document.querySelector('.visor__dados').innerHTML = 'Voto em branco'  
    img.style.display = 'none'
}

function confirma () {
    if(visor.innerHTML == candidatos[0]) {
        document.querySelector('.visor__dados').innerHTML = 'Voto confirmado'
        document.querySelector('#somConfirma').play()
        img = document.querySelector("#imagem");
        img.setAttribute('src', './imgens/shrek.jpeg');
        img.style.display = 'block'
    } 
    
    else if(visor.innerHTML == candidatos[1]) {
        document.querySelector('.visor__dados').innerHTML = 'Voto confirmado Bob'
        document.querySelector('#somConfirma').play()
        var img = document.querySelector("#imagem");
        img.style.display = 'block'
        img.setAttribute('src', './imgens/bob.jpg');
    } 
    
    else if (visor.innerHTML == candidatos[2]){
        document.querySelector('.visor__dados').innerHTML = `Voto confirmado Goku`
        document.querySelector('#somConfirma').play()
        var img = document.querySelector("#imagem");
        img.style.display = 'block'
        img.setAttribute('src', './imgens/capa goku.webp');
    }

    else if(visor.innerHTML == candidatos[3] ) {
        document.querySelector('.visor__dados').innerHTML = 'Voto confirmado'
        document.querySelector('#somConfirma').play()
    } 
    
    else if(visor.innerHTML == 'Voto em branco') {
        document.querySelector('.visor__dados').innerHTML = 'Voto confirmado'
        document.querySelector('#somConfirma').play()
    } 
    
    else {
        document.querySelector('.visor__dados').innerHTML = 'Candidato não encontrado'
    }
    numero=''
    
}


