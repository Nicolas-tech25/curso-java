console.log("condicionais 🧨🧨");

/* 
Estruturas de controle condicional

comandos mais comuns:
-if(SE)
-else(SENÃO)
-else if (SENÃO SE)

Operações relacionais (usados para comparação):
> maior que
< menor que
>= maior ou igual
<= menor igual
==igualdade
!= diferente
*/

// Exemplo 01: Condicional Simples (if)
let numero = 10;

if(numero >= 5){
    console.log("Mensagem qualquer...");
    console.log(`Foi exibido porque ${numero} é maior ou igual a 5 (condição específica.)`);
}else{
    console.log("vai dar não😥😥");
}

// Exemplo 02: condicional COMPOSTA (if else)
//Dados do aluno 1
let aluno = "Neymar";
let nota1 = 8;
let nota2 = 10;
let media = (nota1+nota2) /2;
let faltas = 3;

const mediaMinima = 7;
const LimiteDeFaltas  = 10;


if (media >= mediaMinima) {
    situacao = "APROVADO 💵💸";
} else {
     situacao = "REPROVADO 📈🤦🏽‍♂️";
}


// Operador Lógico&& (E/AND)
    if( media >=mediaMinima && faltas < LimiteDeFaltas ){
        resultado = "APROVADO 💎👑";
    }else{
        resultado = "REPROVADO 📈🤦🏽‍♂️";
    }

console.log(`O aluno: ${aluno} tem a média ${media}  está, ${situacao}`);
console.log(`Faltas: ${faltas} || ${resultado}`);

// Exemplo 03: condicional Encadeada (if, else if, else)

/* Desempenhos
-Média menor que 3? PÉSSIMO 
-Média menor que 5? RUIM
-Média menor que 7? REGULAR
-Média menor que 9? BOM
-Nenhuma das condições anteriores ? ÓTIMO
*/
if(media < 3){
    console.log(("PÉSSIMO"));
}else if(media <5){
    console.log("RUIM");
}else if(media < 7){
    console.log("REGULAR");
}else if(media < 9){
    console.log("BOM");
}else{
    console.log("ÓTIMO");
}

/* Bagunça dos iguais
= igual unico -> serve para atribuir/colocar valor
== igual duplo -> serve para comparar valores
=== igual triplo -> serve para comparar valores e tipos de dados
 */

let a = 10;
let b = 10;
console.log(a === b);