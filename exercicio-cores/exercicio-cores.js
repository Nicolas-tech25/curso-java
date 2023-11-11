"use strict";

const botaoA = document.querySelector("#botaoA");
const botaoV = document.querySelector("#botaoV");
const botaoL = document.querySelector("#botaoL");
const pagina = document.querySelector("body");
const subtitulo = document.querySelector("h2");
const titulos = document.querySelectorAll("#area1, #area2");

botaoA.addEventListener("click", function(){
    pagina.style.backgroundColor = " dodgerblue";
    pagina.style.transition = "5s";
    subtitulo.innerHTML = "Azul significa Harmonia e Maturidade";
    subtitulo.style.color = "#ffffff";
});

botaoV.addEventListener("click", function(){
    pagina.style.backgroundColor = "rgb(139, 179, 139)";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Verde significa Saúde e Esperança";
    subtitulo.style.color = "#ffffff";

});

botaoL.addEventListener("click", function(){
    pagina.style.backgroundColor = "darkorange";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Laranja significa Força e Energia";
    subtitulo.style.color = "#fffff";
});