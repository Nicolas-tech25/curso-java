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
let aluno = "Neymar";
let nota1 = 8;
let nota2 = 9.9;
let media = (nota1+nota2) /2;
const mediaMinima = 7;

if (media >= mediaMinima) {
    situacao = "APROVADO 💎👑";
} else {
    situacao = "REPROVADO 📈🤦🏽‍♂️";
}

console.log(`O aluno: ${aluno} tem a média ${media} Portanto está, ${situacao}`);
