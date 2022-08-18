const nome = 'Jose'
const sobrenome = ' da Silva'
const idade = 27;
const peso = 83.5;
const altura = 1.70
const plano = 'Ouro'
const imc = peso/(altura*altura)

/* tofixed no imc significa quantas casas decimais vc quer que apareca se coloca .toFixed(2) serão 2 casas decimais.*/
console.log(nome + sobrenome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2) + '.')

