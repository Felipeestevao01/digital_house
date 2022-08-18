var readlineSync = require('readline-sync');


const altura = readlineSync.question('Qual sua Altura: ')

function podeSubir(altura){
    if (altura >= 1.40 && altura <= 2.00){
        return ('Voce Pode subir!')
    } else if (altura >= 1.20 && altura <= 1.39){
        return('Você pode ir somente acompanhada!')
    } else if(altura >= 0.50 && altura <= 1.19){
        return('Não pode subir nem com acompanhante!')
    } else if(altura >= 2.01 ){
        return('Vocé é alto demais!')
    } else if(altura <= 0.49 )
        return('Vocé é baixo demais!')
}
console.log(podeSubir(altura))