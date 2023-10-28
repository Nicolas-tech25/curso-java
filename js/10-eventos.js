"use script"

/* Exemplo 01 */
// Selecionando elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body"); // OU document.body

// Detectando um evento de clique
exemplo01.addEventListener("click", function(){
    mensagem01.innerHTML = "salve";
    mensagem01.style.fontSize = "32px";
    pagina.style.fontFamily = "verdana";

    // Removendo um elemento
    // exemplo01.remove();

    // Escondendo um elemento
    exemplo01.style.display = "none";
});

const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function(){
    exemplo01.style.display = "block";
    mensagem01.textContent = "É o KAGE, né 🎥🎬";
});

/* Exemplo 02 */
const mensagem02 = document.querySelector("#mensagem02");
const janela = document.querySelector("#janela-modal");
const botaoFechar = document.querySelector("#janela-modal button");

// document.addEventListener("mouseout", function(event){
//     if(event.clientY < 0){
//         // alert("Vai sair? 👀");
//         // mensagem02.innerHTML = "<i> Vai sair 👀 ? </i>"
//         // mensagem02.style.background = "black";
//         // mensagem02.style.color = "white";
//         // mensagem02.style.fontSize = "50px";
//         janela.showModal();
//     }
// });

document.addEventListener("mouseout", verificaSaida);

function verificaSaida(event){
    if(event.clientY < 0){
        janela.showModal();

        document.removeEventListener("mouseout", verificaSaida);
    }
}

botaoFechar.addEventListener("click", function(){
    janela.close();
});


/* Exemplo 03 */
const botaoNoturno = document.querySelector("#noturno");

botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
    pagina.style.transition = "2s"

    /* Se o modo noturno estiver ativado ou seja se a classe modo noturno está aplicada na pagina   */

    if (pagina.classList.contains("modo-noturno") ) {
        // então ,mudamos o texto do botão para desativar
        botaoNoturno.textContent = "desativar";
    } else {
        botaoNoturno.textContent = "ativar";
    }
});