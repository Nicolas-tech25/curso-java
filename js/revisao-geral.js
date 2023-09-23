console.log("Revisão!");
/* O que estudamos até o momento?

-sintaxe
-variáveis e constantes e tipos de dados(string,int)
-Formas de saída (concatenação e templete literal/string)
-janelas
-Array
-Objeto*/

// Variavel
let clube = "Conthians";

// Constante (valor fixo)
const estado = "SP";

//Saída de dados
console.log(clube);
console.log(estado);

// o Corinthians é do estado de SP.
console.log("O "+clube+" é do estado de "+estado+".");

//Template literal/string
console.log(`O ${clube} é do estado de ${estado}.`);

// Janela de dialogo
// let nome = prompt("Qual é o seu nome?");
// console.log("Bem vindo(a) "+nome);

/* Arrays (listas de dados indexados) */

let comidas = ["paçoca", "Brigadeiro", "Pizza"]

console.log(`Adoro ${comidas[0]} e ${comidas[2]}`);

// Objeto (listas de dados Não indexados)
// Os dados são formados por propriedades com nome e valor
let aluno = {
    nome: "fulano",
    sobrenome: "da Silva",
    idade: 18
};

console.log(`${aluno.nome} tem ${aluno.idade} anos.`);