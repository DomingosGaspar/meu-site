const menuHmburger = document.getElementById ('burger-menu');
const navegacaoMenuDevice= document.getElementsByClassName('navegacao-menu-device')[0];
const pageOverlay = document.getElementsByClassName('page-overlay')[0];
const btnClose = document.getElementsByClassName('btn-close')

function abreDrawer(){
    navegacaoMenuDevice.classList.add('mostra-navegacao-menu-device');
    pageOverlay.classList.add('mostra-overlay')
}

function fechaDrawer(){
    navegacaoMenuDevice.classList.remove('mostra-navegacao-menu-device');
    pageOverlay.classList.remove('mostra-overlay');
}

menuHmburger.addEventListener('click', abreDrawer)

pageOverlay.addEventListener('click', fechaDrawer)

