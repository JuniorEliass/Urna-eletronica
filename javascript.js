let controle = 0, numero = '';
let num = document.querySelectorAll(".botoes__urna").innerHTML;
let visor = document.querySelector(".visor__dados");
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
    if(numero == '14'){
        img.src = 'https://cdn.discordapp.com/attachments/1082704038837100544/1083732378050105365/shrek.jpeg'
        img.style.display = 'block'
    } else if(numero == '23'){
        img.src = 'https://cdn.discordapp.com/attachments/1082704038837100544/1083732377127358566/bob.jpg';
        img.style.display = 'block'
    } else if(numero == '24'){
        img.src = 'https://cdn.discordapp.com/attachments/1082704038837100544/1083732377538412564/capa_goku.webp';
        img.style.display = 'block'
    } else {
        img.style.display = 'none'
    }
    mudatela() 
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
        document.querySelector('.visor__dados').innerHTML = 'Voto confirmado Shrek'
        document.querySelector('#somConfirma').play()
    } 
    else if(visor.innerHTML == candidatos[1]) {
        document.querySelector('.visor__dados').innerHTML = 'Voto confirmado Bob'
        document.querySelector('#somConfirma').play()
    } 
    else if (visor.innerHTML == candidatos[2]){
        document.querySelector('.visor__dados').innerHTML = `Voto confirmado Goku`
        document.querySelector('#somConfirma').play()
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