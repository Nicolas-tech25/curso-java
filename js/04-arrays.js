let alunos = ["Marcelinho Carioca","Cássio Ramos","Renato Augusto","Emerson Sheik"];

/* O acesso aos dados do array, é feito através do nome do array e do índice correspondente á posição do dado. */

console.log(alunos[3]);
console.log(alunos[0]);

let artistas = ["Kage","Kayblack","Dfideliz","Derek"];

console.log("O artista que eu mais gosto é o "+artistas[1]+" 🐊🐊");
console.log("O artista que eu menos gosto é o "+artistas[3]+" mentira 😱😱");
console.log(`O artista que eu gosto pra caramba é o ${artistas[0]} 💸💸`);

// Matrizes (array com uma ou mais dimensões)
let linguagens = [
    ["HTML","CSS","JS"],
    ["PHP","ASP.NET","JAVA","PYTHON"]
];

// CSS é para estilos.
console.log(linguagens[0][1]+" é para estilos");
// PHP é back-end.
console.log(linguagens[1][0]+" é back-end");