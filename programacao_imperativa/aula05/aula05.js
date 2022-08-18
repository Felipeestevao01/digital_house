

const nome = 'Jose'
const sobrenome = ' da Silva'
const idade = 27;
const peso = 83.5;
const altura = 1.70
const plano = 'Ouro'
const imc = peso/(altura*altura)

/* tofixed no imc significa quantas casas decimais vc quer que apareca se coloca .toFixed(2) serão 2 casas decimais.*/
console.log(nome + sobrenome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2) + '.')

//template strings
const msg = `${nome}${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(2)}.`
console.log(msg)

/*
Declaração

1º palavra reservada = function
2º nome da funcação -> seguindo as regras de nomeclatura
3º () -> abertura e fechamento de parenteses. Os parenteses () é o espaço reservado para criação de parametros.
4º {} -> Bloco de código a ser executado -> Implementação da função.
5º return -> Palavra reservarda return -> Que indica o que a nossa função retorna/devolver.

OBS1. Caso o return nao seja inserido, automaticamente sera retornado para nos o valor undefined.
Obs2.Após o return, nada será executado pois o mesmo encerra a função.
obs3. return é o resultado da função.
ex. 

console.log("Executando e testando");
return ();
2 + 6;  <- isso não será executado pois esta apos o return. 

obs4. As funções possuem uma visibilidade global parecida com o var, podendo ser executada antes da sua declaração visual.

soma(5,6) <- O valor foi declarado antes da função.

function soma(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}
 
*/

function minhaFuncao(){
    console.log("Executando e testando")
    console.log(2 + 2)
    console.log(nome + 2)
}


/*
Apos a declaração da função temos que fazer a chamada/execução/invocação de função.

Para chamar a função pelo nome que foi dado seguido dos () */

minhaFuncao()

function minhaFuncao2(){
    return "Executando e testando"
}

const teste = minhaFuncao2();
console.log(teste)

/*
Parametros
São Variaveis recebidas na hora da chamada da função
*/ 

function soma(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

soma(5,6)





/*
os parametros podem ter valores ja na hora da função quanto na execução.

function soma2(num3 = 5, num4 = 8){
    console.log(num3 + num4);
    return num3 + num4;
}

soma2()

function soma2(num3, num4){
    num3 = 5
    num4 = 5
    console.log(num3 + num4);
    return num3 + num4;
}

soma2()

*/

function soma2(num3 = 5, num4 = 8){
    console.log(num3 + num4);
    return num3 + num4;
}

soma2()

function soma3(num5, num6 ){
    num5 = 5
    num6 = 50
    console.log(num5 + num6);
    return num5 + num6;
}

soma3()



// Colocamos 5 parametros dentro da função imc2 e fizemos o calculo e colocamos dentro da const
// depois retornamos os parametros junto com umas strings.
// colocamos a msg com const e puxamos o imc2 e lembramamos os valores dos parametros.
//Depois printamos com o console.log



function imc2 (nome,sobrenome,idade,altura = 0,peso = 0){

    const imc2 = peso/(altura*altura);
    return `${nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc2.toFixed(2)}.`
}

// Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx
//Felipe Estevão tem 32 anos e seu índice de massa corporal é de xx


const msg2 = imc2("Aline","Ferreira",33,1.78,50)
const msg3 = imc2("Felipe","Silva",32,1.79,108)
console.log(msg2)
console.log(msg3)
