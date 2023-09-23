// EXEMPLO 1: Objeto puro

let livro = {
    titulo: "Senhor dos anéis",
    ano: 1954,
    volumes: 3,
    autor: "J.R.R. Tolkien"
};

// Meu livro preferido se chama Senhor dos anéis.
console.log("Meu livro preferido é: "+livro.titulo);
console.log("Foi lançado em: "+livro.ano);
console.log("Tem: "+livro.volumes+" volumes");
console.log("Do autor: "+livro.autor);


// EXEMPLO 02: objeto contendo array e outro objeto

let cliente = {
    nome: "Emerson",
    apelido: "Sheik",
    idade: 44,
    telefones: ["11-91445-2525", "11-4002-8922"], 
    medidas: {
        peso: 75, 
        altura: 1.80
    }
};

console.log(cliente.nome,cliente.apelido);
console.log(cliente.idade+" anos");

// Acessando uma propriedade que também é um array
console.log("Telefone: "+cliente.telefones[1]);

// Acessando uma propriedade que também é um objeto
console.log("Altura: "+cliente.medidas.altura);

// Exemplo 03: Array de objetos
let livros = [  
    {
        titulo: "Sonetos",
        autor: "Shakespeare",
    },
    {
        titulo: "Macbeth",
        autor: "Shakespeare",
    },
    {
        titulo: "Romeu e Julieta",
        autor: "Shakespeare ",
    }

]; 

// Macbeth (escrito por Shakespeare) é uma tragédia sobre um regicídio e suas consequências.

console.log(`${livros[1].titulo} (escrito por: ${livros[1].autor}) é uma tragédia sobre um regicídio e suas consequências`);
