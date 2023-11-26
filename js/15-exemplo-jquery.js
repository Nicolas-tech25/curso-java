/*  Exemplo 01 manipulação do Dom
$() significa "função Jquery" */
const titulo = $("h1");
const subtitulos = $("h2");

console.log(titulo);
console.log(subtitulos);

// Modificando os elementos
// titulo.text("Bem-vindo jQuery");
titulo.html("<i>Bem-vindo jQuery</i>");

// Acessando determinados elementos selecionados
console.log($(subtitulos).eq(0).text());
console.log($(subtitulos).eq(1).text());

const sub1 = $(subtitulos).eq(0);
const sub2 = $(subtitulos).eq(1);

// Aplicando css inline
sub1.css("color", "red");
sub2.css("text-transform", "uppercase");

titulo.css({
    "color" : "purple",
    "text-align" : "center",
    "font-family" : "Geneva"
});

// Aplicando classe a um elemento
const classicRock = $("h3");
classicRock.addClass("destaque");

/* ------------ */
/* Exemplo 02: Dom e evento */
const pagina = $("body");
const formulario = $("form");
const nome = $("#nome");
const tema = $("#tema");

// Manipulando evento
formulario.on("submit", function(event){
    event.preventDefault();

    // Capturando dados
    let usuario = nome.val();
    let cor = tema.val();
    let textoDaCor = tema.find("option:selected").text();

    // Aplicando cor na pagina
    pagina.css("background-color",cor);

    // Personalizando o titulo
    titulo
    .hide()
    .html(`Olá <b>${usuario}</b>, você escolheu ${textoDaCor}`)
    // .fadeIn(6000)
    .slideDown(2000)

    console.log(usuario,cor, textoDaCor);

});