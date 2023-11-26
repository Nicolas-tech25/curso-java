'use strict';

// Selecionando o formulario e seus elementos
const formulario = document.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");
const resultado = document.querySelector("#resultado");

// Selecionando a tabela e seus elementos
const tabela = document.querySelector("table");
const corpoTabela = document.querySelector("tbody");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    /* verificando se a tabela está oculta, ou seja, se ela tem o atributo hidden */
    if(tabela.hasAttribute("hidden")){
        // Se estiver, então removemos o atributo e com isso a tabela volta a aparecer 
        tabela.removeAttribute("hidden");
    }

    /* Capturando dados digitados */
    let nome = campoNome.value;

    // Usamos parseFloat para garantir que é tratado como número
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    /*  Calculando média */
    let media = (nota1 + nota2) / 2;

    /* Verificando a situação do aluno de acordo com a média */
    let situacao; // undefined/indefinido
    let classe;

    if(media >= 7){
        situacao = "Aprovado(a)";
        classe = "ap";
    }else{
        situacao = "Reprovado(a)";
        classe = "rp";
    }

    /* Rotinas para criar uma nova linha e colunas para exibição dos dados no corpo da tabela */

    // 1) criar elemento
    let linha = document.createElement("tr");
    linha.classList.add(classe);

    // 2) Montar o conteúdo do elemento
    linha.innerHTML = `<td>${nome}</td>
                       <td>${media}</td>
                       <td>${situacao}</td>`;

    // 3) Adicionar na área da pagina desejada
    corpoTabela.appendChild(linha);

    //resetar o formulário
    formulario.reset();

    // Devolver o foco do cursor para o nome
    campoNome.focus();

});