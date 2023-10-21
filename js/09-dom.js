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

//Alterando suporte Html
sobreFront.innerHTML = "<i>Front-end</i>";


// Css vai javascript
backEnd.style.color = "red";
backEnd.style.textAlign = "center";


// css com classes
titulo.classList.add("destaque");

let listaDeEditores = [
    "VsCode",
    "Notpad++",
    "Sublime Text",
    "Atom",
    "Dreamweaver",
    "Photoshop",
    "word"
];

// Selecionando lista vazia dentro do classe
const lista = document.querySelector(".lista");
console.log(lista);

//percorrer o array usando loop for/of
for (let programa of listaDeEditores) {
    // 1) Criar um novo elemento <li>
    let item = document.createElement("li");

    // 2) Adicionar conteúdo ao novo elemento
    item.innerHTML = programa;

    // 3) Adicionar á lista
    lista.appendChild(item);
}

/*  Adicionando atributo a diversos elementos */
 const linksreferencia = document.querySelectorAll(".referencias li a");
 console.log(linksreferencia);

 for (let link of linksreferencia) {
    link.setAttribute("target", "_blank"); 
 }