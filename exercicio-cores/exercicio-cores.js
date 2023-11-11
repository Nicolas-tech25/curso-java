"use strict";

const botao1 = document.querySelector("#botaoA");
const botao2 = document.querySelector("#botaoV");
const botao3 = document.querySelector("#botaoL");
const pagina = document.querySelector("body");
const subtitulo = document.querySelector("h2");
const titulos = document.querySelectorAll("#area1, #area2");

botao1.addEventListener("click", function(){
    pagina.style.backgroundColor = "cornflowerblue";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Azul significa Harmonia e Maturidade";
    subtitulo.style.color = "#c4d9ff";
});

botao2.addEventListener("click", function(){
    pagina.style.backgroundColor = "green";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Verde significa Saúde e Esperança";
    subtitulo.style.color = "#65ee65";

});

botao3.addEventListener("click", function(){
    pagina.style.backgroundColor = "darkorange";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Laranja significa Força e Energia";
    subtitulo.style.color = "#ffd7a5";
});