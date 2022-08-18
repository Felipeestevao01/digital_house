//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(num1, num2){
    return num1 + num2
}

//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(num1, num2){
    return num1 - num2
}

//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(num1, num2){
    return num1 * num2
}

//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(num1, num2){
    return num1 / num2
}

//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(num1){
    return multiplicacao(num1, num1);
}



//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
// Fazer uma media é pegar a quantidade de valores e somar e depois dividir pela quantidade de valores. ex 5 + 5 + 5 + 5 /4

// Tem um rio e eu tenho que atravessar com 1 cachorro , 1 galinha e 1 saco de trigo eu nao podeixar o cachorro com a galinha, nem a galinha com o saco de trigo.
//   ----------- 3T 1C 2G

function mediaDeTresNumeros(num1, num2, num3){
    let soma = adicionar(num1, num2)
    let soma2 = adicionar(num3, soma)
    return divisao(soma2,3)
}


//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function calculaPorcentagem(num1, percentual) {
    let valorPercentual = divisao(percentual, 100);
    return multiplicacao (num1, valorPercentual);
}

//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(valorPercentual, valorTotal){
    let valorPorce = divisao(valorPercentual, valorTotal)
    return multiplicacao(valorPorce, 100)
}

//console.log ("-------------- Teste de Operações / Calculador --------------")

console.log('A soma é ' + '' + adicionar(5,5))
console.log('A subtração é ' + '' + subtracao(10,5))
console.log('A multiplicação é ' + '' + multiplicacao(10,5))
console.log('A divisão é ' + '' + divisao(10,5))
console.log('O quadrado do numero é ' + '' + quadradoDoNumero(20))
console.log('A media dos 3 numeros é ' + '' + mediaDeTresNumeros(5,5,5))
console.log('O calculo da porcentagem é ' + '' + calculaPorcentagem(300, 15))
console.log('O gerador de procentagem é ' + '' + geradorDePorcentagem(100,200))