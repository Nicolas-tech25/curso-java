/* Arquivo 02-sintaxe-geral.html */
console.log("Exemplo Sintaxe Geral");
        
        /* Variáveis e Constantes São espaços na memória RAM para armazenamento de dados. */

        // Variáveis (valor pode mudar)
        var aluno = "Nicolas";  // método antigo

        let produto = "Monitor LG"; // método   novo

        //Contantes (um valor fixo, que não muda)
        const escola = "Senac";

        // Saída/Exibição de dados da memória
        console.log(aluno);
        console.log(produto);
        console.log(escola);

        console.log(aluno,produto,escola); 

        // Somente declaração
        let servico,prestador,unidade;

        // Atribuição
        servico = "Drible";
        prestador = "Neymar";
        unidade = "Aubilau";

        console.log(prestador, servico);

        // Dados numéricos

        let ano = 2023; // inteiro

        let preco = 1950.42;  // decimal

        /* Valores quebrados devem ter . não virgula */

        /* Nomes compostos para variáveis */

     // let cursode tecnologia; // errado
        let cursodetecnologia; // certo
        let curso_de_tecnologia; // certo
        let cursoDeTecnologia; // certo

        /* Operadores matemáticos + * / -  */

        let valor1 = 10;
        let valor2 = 5;

        let soma = valor1 + valor2;

        let subtracao = valor1 - valor2;
        let multiplicacao = valor1 * valor2;
        let divisao = valor1 / valor2;

        console.log(soma, subtracao, multiplicacao,divisao );

        /* Saída de dados elaborada */
        
        // Concatenação (utiliza o operador "+" para juntar dados )
        console.log("Olá "+aluno+", bem-vindo ao "+escola+"👽");

        // Template Literal/STRING
            console.log(`Olá ${prestador} bem-vindo ao ${unidade}👳🏽‍♂️👳🏽‍♂️`);

            /* Sobre aspas (simples '' ou duplas ""
            usadas para textos/strings) */
            let estilo_musical_1 = "Rock 'n' Roll";
          //let estilo_musical_2 = 'Rock 'n' Roll'; // errado
            let estilo_musical_3 = 'Rock "n" Roll'; // certo
            let estilo_musical_4 = 'Rock \'n \' Roll'; // certo
            
            console.log(estilo_musical_3);

            /* A barra invertida significa "ESCAPE" */