let pedidos = {
    data: "25/12/2004",
    produtos: ["Geladeira", "Notbook", "Mike"],
    preco: 1800,
    prazo: [7, 5, 3]
};

// Original puro
console.log("A "+pedidos.produtos[0]+" tem o preço de "+pedidos.preco);

//preco formatado
let precoFormatado = pedidos.preco.toLocaleString( "pt-br",{style: "currency", currency: "BRL"});
console.log(precoFormatado);