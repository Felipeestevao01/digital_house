var readlineSync = require('readline-sync');
let media = 1;
let frequencia = 100;

// Se a media do aluno form aior ou igual do que 7 então o aluno é aprovado
// Caso contrário a média seja menor então aluno reprovado

if(media >= 7 && frequencia >= 90 && frequencia <= 100){
    console.log('Aluno Aprovado');
} else if (media >= 5 && media < 7 ||  frequencia>= 59 && frequencia <= 89 ){
    console.log('Aluno de recuperação')
} else if (media >= 1 && media < 5 || frequencia <= 59){
    console.log('Aluno reprovado');
}


//Escolha o seu lanche
//Caso escolha 01 faça algo.
//Caso escolha 02 faça algo.
//Caso escolha 03 faça algo.
//caso nao seja nenhuma das opçoes faça algo que no caso foi para o default.


const opcao = readlineSync.question('Escolha a sua opção: ')

switch(opcao){
    case '01':
        console.log("X- Bacon selecionado");
        break;
    case '02':
        console.log("X-Salada selecionado");
        break;
    case '03':
        console.log("X-Egg selecionado");
        break;
    // Caso contrário dos cases acima uso default
    default:
        console.log("Opção inválida");
}

//switch case tem uma pegadinha.. se vc selecionar o 01 ele vai adicionar todos os caso do 01 em diante.
//Mesmo coisa se selecionar 02 aparecer todos os case apartir do 02.
//Precisa dar um "break" em cada caso.

if(opcao == '01'){
    console.log("X- Bacon selecionado");
} else if (opcao =='02'){
    console.log("X-Salada selecionado");
} else if (opcao =='03'){
    console.log("X-Egg selecionado");
} else {
    console.log("Opção inválida");
}


