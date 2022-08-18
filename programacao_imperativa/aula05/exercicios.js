/* 
1º Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
*/

/*--------------------------------------------*/
function conversao(polegada){

    const calculo = (polegada * 2.54)

    return calculo 
}
console.log(conversao(5))
/*--------------------------------------------*/

function conversao1(polegada = 0, centimetro = 2.54){
    
    return (polegada * centimetro)
}
console.log(conversao1(5))
/*--------------------------------------------*/



/*
2º Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
*/

/*--------------------------------------------*/
function teste(nome){

    const url = `O seu site é http://www.${nome}.com.br`

    return url
}
console.log(teste('funcaojs'))
/*--------------------------------------------*/

function site(nome){

    return('funcaojs')
}
console.log('O seu site é http://www.' + site() +'.com.br' )
/*--------------------------------------------*/



/*
3º Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
*/

/*--------------------------------------------*/
function alteracao(nome){

    const frase = `${nome}!`

    return frase
}
console.log(alteracao('É isso ai meus amigos'))
/*--------------------------------------------*/

function alteracao2(nome){

    nome = 'É isso ai meus amigos'

    return nome +"!"
}
console.log(alteracao2())
/*--------------------------------------------*/




/*
4º Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
*/

/*--------------------------------------------*/
function idadeDog(idade){
    
    const idadeDoguinho = idade * 7

    return idadeDoguinho
}
console.log(idadeDog(5))
/*--------------------------------------------*/

function idadeDog2(idade){

    idade = idade * 7

    const idadeDoguinho2 = `A idade do seu dog é de ${idade} anos!`

    return idadeDoguinho2
}
console.log(idadeDog2(10))
/*--------------------------------------------*/




/*
5º Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.PS: considere que você trabalhe 160 horas no mês.
*/

/*--------------------------------------------*/
function valorHora(salario){
    
    return salario = salario / 160

}
console.log(valorHora(2000))

/*--------------------------------------------*/
function valorHora2(salario){
    salario = salario / 160

    const valor = `A sua hora trabalhada é de ${salario} reais.`

    return valor
}
console.log(valorHora2(2000))
/*--------------------------------------------*/




/*
6º Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.
*/

/*--------------------------------------------*/
function valorImc(peso, altura){
    imc = peso /(altura * altura)

    return imc.toFixed(2)
}
console.log(valorImc(100,1.80))

/*--------------------------------------------*/
function valorImc2(peso, altura){

    imc = peso/(altura * altura)

    const imccalculo = `O seu IMC atual é de ${imc.toFixed(2)}`

    return imccalculo
}
console.log(valorImc2(100,1.80))
/*--------------------------------------------*/

function valorImc3(peso, altura){

    altura = altura / 100

    imc2 = peso/ (altura * altura)
    
    const imccalculo2 = `O seu IMC atual é de ${imc2.toFixed(2)}`

    return imccalculo2

}
console.log(valorImc3(100,180))
/*--------------------------------------------*/




/*
7º Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
*/



/*
8º Investigue o que o método de .toUpperCase() faz.

9º Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

10º Dica: Isso te ajudará a entender o que o operador typeof faz.

11º Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
 Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi. */
