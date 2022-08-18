var readlineSync = require('readline-sync');


console.log('Bem-vindo! Segue o cardapio:\n', 'Pipoca\n','Macarrao\n','Carne\n','Feijao\n','Brigadeiro\n')

//Informar um prato
let prato = readlineSync.question('Qual Prato voce deseja? ')

//Informa o tempo
let tempo = readlineSync.question('Quanto tempo voce deseja colocar? ')


function microOndas(comida, tempo){

    let prato = comida.toLocaleLowerCase()

    if ((prato == 'pipoca' && tempo >= 10 && tempo <= 20) ||
        (prato == 'macarrao' && tempo >= 8 && tempo <= 16) ||
        (prato == 'carne' && tempo >= 15 && tempo <= 30) ||
        (prato == 'feijao' && tempo >= 12 && tempo <= 24) ||
        (prato == 'brigadeiro' && tempo >= 8 && tempo <= 16 )){
        
        if ((prato == 'pipoca') || 
            (prato == 'carne')){
            return `${prato} está pronta, bom apetite!`
            
        }else ((prato == 'macarrao') || 
            (prato == 'feijao') || 
            (prato == 'brigadeiro'))
            return `${prato} está pronto, bom apetite!`

    }else if ((prato =='pipoca' && tempo <= 9) ||
        (prato =='macarrao' && tempo <= 7) || 
        (prato == 'carne' && tempo <= 14) ||
        (prato == 'feijao' && tempo <= 11 ) ||
        (prato == 'brigadeiro' && tempo <= 7 )){
        return `Tempo insuficiente`

    }else if ((prato == 'pipoca' && tempo >= 21 && tempo <= 29) || 
        (prato == 'macarrao' && tempo >= 17 && tempo <= 23) || 
        (prato == 'carne' && tempo >= 31 && tempo <= 44) || 
        (prato == 'feijao' && tempo >= 25 && tempo <= 35 ) || 
        (prato == 'brigadeiro' && tempo >= 17 && tempo <= 23)){
        return `A comida queimou!`
        
    }else if ((prato == 'pipoca' && tempo >= 30) || 
    (prato == 'macarrao' && tempo >= 24) || 
    (prato == 'carne' && tempo >= 45) || 
    (prato == 'feijao' && tempo >= 36) || 
    (prato == 'brigadeiro' && tempo >= 24)){
        return `Kabummmmm!!!`
        
    }else {
        return `Opção inválida, Favor repetir o pedido.`
    }
}

console.log(microOndas(prato, tempo))

