'use strict';

/* Coiceito sobre Funções. Funções são blocos de código responsáveis por executar determinadas tarefas
Vantagens de usar funções:

- Reutilizção do código
- Organização de código, permitindo a separação de diferentes lógicas 
- perfotmance melhor

Desvantagens ( no JS)

- Existem várias dormas de fazer funçao 
- Se a lógica for confusa, a função também será. 
*/

/* Exemplos: */

/* Sintaxe 1 (tradicional) Função literal anônima */
// const exemplo1 = function(){
//     console.log("Função Literal/anônima");
// };

// exemplo1(); //chamada

// /* Sintaxe 2 (tradicional) função nomeada/declarada */
// function exemplo2() {
//     console.log("Função nomeada/declarada");
// };

// exemplo2(); //chamada (exemplo2)

// /* Sintaxe 3 (moderna) função flecha/seta (Arrow function) */
// const exemplo3 = () => {
//     console.log("Arrow Function");
// };

// exemplo3(); //chamada (exemplo3)


/* Função parâmetros */
function soma(valor1,valor2) {
    /* variável local: existe só dentro da função */
    let  total = valor1 + valor2;

    return total;
}
let resultado = soma(10,5);
// console.log(total); dá erro, pois total não existe aqui

// Agora da certo pois retornamos o resultado fora da função
console.log(resultado);

let outroResultado = soma(150,75);
let outraCoisa = soma(50,23);

console.log(outroResultado);
console.log(outraCoisa);

console.log("--------");

// function dobra(valor) {
//     let valorDobrado = valor * 2;
//     return valorDobrado;
// }

//versão 2 (Arrow function)
// const dobra = (valor) => {
//     let valorDobrado = valor * 2;
//     return valorDobrado;
// };

// Versão 3 (Arrow function)
// const dobra = valor => {
//    return valor * 2;
// };


// Versão 4
const dobra = valor => valor * 2;

let resultadoDobro = dobra(20);
console.log(resultadoDobro);