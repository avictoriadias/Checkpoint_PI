function microondas(opcao, tempo) {
    let mensagem = 'Esse é o Microondas Super Veloz, selecione a opção desejada e os segundos: \n'
    let texto = ''

    switch(opcao) {
        case 'Pipoca' :
            texto += 'Que delícia, pipoquinha!\n';
            if (tempo >= 10 * 2 & tempo < 10 * 3) {
                texto += 'Hmmm, cheirinho de queimado...\n';
            }
            else if (tempo >= 10 * 3) {
                texto += 'KABUMM!\n';
            }
            else if (tempo < 10) {
                texto += 'Tempo insuficiente.\n';
            }
            else if (tempo >= 10 & tempo < 10 * 2) {
                texto += 'Seu prato está pronto. Bom apetite!'
            }
            break;
        case 'Macarrão':
            texto += 'Opa, vamos comer macarrão?\n ';
            if (tempo >= 8 * 2 & tempo < 8 * 3) {
                texto += 'Hmmm, cheirinho de queimado...\n';
            }
            else if (tempo >= 8 * 3) {
                texto += 'KABUMM!\n';
            }
            else if (tempo < 8) {
                texto += 'Tempo insuficiente.\n';
            }
            else if (tempo >= 8 & tempo < 8 * 2) {
                texto += 'Seu prato está pronto. Bom apetite!'
            }
            break;
        case 'Carne':
            texto += 'É carne vegetal?\n';
            if (tempo >= 15 * 2 & tempo < 15 * 3) {
                texto += 'Hmmm, cheirinho de queimado...\n';
            }
            else if (tempo >= 15 * 3) {
                texto += 'KABUMM!\n';
            }
            else if (tempo < 15) {
                texto += 'Tempo insuficiente.\n';
            }
            else if (tempo >= 15 & tempo < 15 * 2) {
                texto += 'Seu prato está pronto. Bom apetite!'
            }
            break;
        case 'Feijão':
            texto += 'Acabou a anemia!\n';
            if (tempo >= 12 * 2 & tempo < 12 * 3) {
                texto += 'Hmmm, cheirinho de queimado...\n';
             }
            else if (tempo >= 12 * 3) {
                texto += 'KABUMM!\n';
            }
            else if (tempo < 12) {
                texto += 'Tempo insuficiente.\n';
            }
            else if (tempo >= 12 & tempo < 12 * 2) {
                texto += 'Seu prato está pronto. Bom apetite!'
            }
             break;
        case 'Brigadeiro':
            texto += 'Cansou de lavar panela, né?!\n';
            if (tempo >= 8 * 2 & tempo < 8 * 3) {
                texto += 'Hmmm, cheirinho de queimado...\n';
             }
            else if (tempo >= 8 * 3) {
                texto += 'KABUMM!\n';
            }
            else if (tempo < 8) {
                    texto += 'Tempo insuficiente.\n';
            }
            else if (tempo >= 8 & tempo < 8 * 2) {
                texto += 'Seu prato está pronto. Bom apetite!'
            }
            break;
             default: 
             texto += 'Prato inexistente.\n';
    }


    return mensagem + texto
}

console.log(microondas('Pipoca', 30))
console.log(microondas('Carne', 5))
console.log(microondas('Batata', 15))
console.log(microondas('Brigadeiro', 8))