"use strict";

/* Funções/Métodos de seleção de elementos no dom

- getElementById()
Seleciona UM elemento através do id

- querySelector()
Seleciona um elemeto atráves de seletores(mesma lógica do CSS)

-querySelectorAll()
Seleciona varios elementos através de seletores 
*/

/* Exemplos de seleção no dom */
/* Exemplo 01: getElementById() */
const legenda = document.getElementById("legenda");
console.log(legenda);


/* Exemplo 02: querySelector() */
const titulo = document.querySelector("h1");
const sobreFront = document.querySelector("#sobre");

console.log(titulo, sobreFront);

/* Exercício */
const backEnd = document.querySelector(".back-end");
const editores = document.querySelector(".editores h2");

console.log(backEnd,editores);

/* Exemplo 03: querySelectorAll() */
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
const varios = document.querySelectorAll("p,a");
console.log(varios);

/* Modificando elementos DOM (conteúdo mudança de tag cores e crição de elementos) */

// Alterando o conteúdo
legenda.textContent = "Dom -Hierarquia Geral";

sobreFront.textContent = "<i>Front-end</i>";

