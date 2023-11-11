'use strict';

const pagina = document.querySelector("body");
const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");
const imagem = document.querySelector("#imagem");

let faustao = "faustao.gif";
let miseravi = "miseravi.gif";



/* Gerar valores aleatorios
Usamos math.ramdom()*11 para gerar valores entre 0 e 10, e passamos o valor para o parseInt para descartar parte quebrada do número.
*/
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

/* Detectando acionamento do formulario para capturar e analisar o palpite */
formulario.addEventListener("submit", function(event){
    // Anulando o comportamento padrão do evento
    event.preventDefault();
    
    // Capturando o palpite (valor do campo)
    let palpite = campoPalpite.value;
    console.log(palpite);


    // Comparando o palpite com o numero aleatorio do computador
    if (palpite == numeroAleatorio ) {
        resultado.textContent = "Boa acertou 🥳🧨🧨";
        resultado.style.color = "blue";
        pagina.style.background = "lightblue";
        resultado.style.animation = "tada 3s";
        imagem.src = miseravi; 

        // console.log("Boa acertou miseravel");
        // location = "http://www.sp.senac.br";
    }else{
        resultado.textContent = "Vish errou 💣💣";
        resultado.style.color = "red";
        pagina.style.background = "salmon";
        resultado.style.animation = "zoomInRight 1s";
        imagem.src = faustao;
       // console.log("erroou!!!!");
       //location = "https://www.rihappy.com.br/barbie";
    }
});