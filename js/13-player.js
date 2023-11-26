'use strict';

// Selecionando o  <selected>
const lista = document.querySelector("#lista-de-musicas");

// Selecionando o  <audio>
const reprodutor = document.querySelector("audio");

/* Selecionando <figure> e seus elementos */
const figureCapa = document.querySelector("figure");
const imagemCapa = figureCapa.querySelector("img");
const tituloMusica = figureCapa.querySelector("figcaption");

/* Monitorando o evento de mudanças de opções na lista <select> */
lista.addEventListener("change", function(){
    
    /* Verificando se o figure está escondido */
    if(figureCapa.hasAttribute("hidden")){
        /* Estamos fazendo aparecer */
        figureCapa.removeAttribute("hidden");
    }
    /* Selecionando o <option> que foi escolhido
    dentro da lista <select> */
    let musicaSelecionada = lista.options[lista.selectedIndex];
    console.log(musicaSelecionada);

    /* Associando o value do option (musicaSelecionada) 
    ao src do elemento audio (reprodutor) */
    reprodutor.src = musicaSelecionada.value;

    /* Exibir o titulo da musica no figcaption */
    tituloMusica.textContent = musicaSelecionada.textContent;

    /* Exibindo capa no img */
    imagemCapa.src = musicaSelecionada.getAttribute("data-imagem"); 

    /* Reproduzindo a música somente se o valor de musicaSelecionada for diferente de vazio. Usamos o operador !== (diferente) */
    if ( musicaSelecionada.value !== "" ) {
        reprodutor.play();
    }
});