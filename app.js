//PAGINA DEL JUEGO
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
condicionesIniciales(); 

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto de Silvia Milena';

let parrafo =document.querySelector('p');
parrafo.innerHTML = 'Por favor indica un número del 1 al 10';

function intentoDeUsuario(){
    alert("pase por aca clic desde el boton")
}


function reiniciar() {
    limpiarCaja();
    condicionesIniciales();
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto de Silvia Milena!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    return numeroGenerado;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades....Acertaste el número en: ${intentos} ${(intentos === 1) ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function inicio() {
  window.location.href = "index.html"; // o la ruta que corresponda a tu página principal
}

