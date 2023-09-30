console.log("Reajuste Salarial 💸💸");


let funcionario = "Juninho do Gás";
let salario = 1500;
let novo_salario = 0;


if (salario < 1500) {
    novo_salario = salario *1.15; // 15%
} else if(salario < 3000){
    novo_salario = salario *1.10; // 0%
}else{
    novo_salario = salario *1.05; // 5%
}

console.log(`O funcionario: ${funcionario} tem o salário de: ${salario}`);
console.log(`Portanto receberá um reajuste de: ${novo_salario.toFixed("R$",2)}`);