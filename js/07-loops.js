'use strict'; // habilitando o modo estrito do JS
/* Principais comandos de repetição

-while ENQUANTO
-do/WHILE  faça/ ENQUANTO
for / Para
 */

//Exemplo 1:While
// let i = 1;

// while (i <= 5 ) {
//     console.log(`Contador vale: ${i}`);
//     i++;
// }

//Exemplo 2 do/WHILE
// let i= 1;
// do{
//     alert("Oláaaaa");
//     i++; //incremento
// }while(i <= 10 );

// // Exemplo 03 for / Para(inicialização; condição; atualização)
// for(let i = 1; i <=50; i++){
//     console.log(`I vale ${i}`);
// }

// /* Exemplo 4: loop com array */
// let clientes = ["Neymar 👑","Vini jr 👼🏾","Messi 👽","CR7 🤖", "Rodrygo ⚡", "Murilo 💣"];

// // cache de quantidade de clientes (guardando o tamanho do array)
// let quantidadedeClientes = clientes.length;

// for (let i = 0; i < quantidadedeClientes; i++) {
//     console.log(`Cliente: ${clientes[i]}`);

// }

/* Loops exclusivos do JS para arrays e objetos */

// Loop for/of: útil para arrays
// let artistas = ["Kage 🏆", "Kayblack 🐊", "Derek 🐱‍👤"];
// for (let artista of artistas) {
//     console.log(`Artista: ${artista}`);
// }

// // Loop for/in: útil para objetos
// let pessoa = {
//     nome: "Fulano da Silva",
//     idade: 25,
//     cidade: "são Paulo"
// }


// for(let dados in pessoa){
//     // console.log(dados);
//     console.log(pessoa[dados]);
// }

// let pessoas = [
//     {
//         nome: "Nicolas",
//         idade: 20
//     },
//     {
//         nome: "Phelipe",
//         idade: 19
//     },
//     {
//         nome: "Sarah",
//         idade: 20
//     }
// ];

// // console.log(pessoas[2].nome);

// for (let pessoa of pessoas) {
//    console.log(pessoa.nome);
//    console.log(pessoa.idade);

// }

/* ============================================================== */
                        /* Mini Exercicio */
/* ============================================================== */


let meses = [
    {
        nome: "Janeiro",
        numero: 1
    },
    {
        nome: "Fevereiro",
        numero: 2
    },
    {
        nome: "Março",
        numero: 3
    },
    {
        nome: "Abril",
        numero: 4
    },
    {
        nome: "Maio",
        numero: 5
    },
    {
        nome: "Junho",
        numero: 6
    },
    {
        nome: "Julho",
        numero: 7
    },
    {
        nome: "Agosto",
        numero: 8
    },
    {
        nome: "Setembro",
        numero: 9
    },
    {
        nome: "Outubro",
        numero: 10
    },
    {
        nome: "Novembro",
        numero: 11
    },
    {
        nome: "Dezembro",
        numero: 12
    }
];


for (let mes of meses) {
    console.log(`${mes.numero} -> ${mes.nome}`);

    // console.log(mes.numero, "->" ,mes.nome);
}

