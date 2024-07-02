// Vamos criar um jogo simples de frutas!
console.log("Bem vindo ao Jogo de Frutas");

// Função que escolhe uma fruta aleatória
function escolherFruta() {
    const frutas = ["Maçãs 🍎", "Laranjas 🍊", "Bananas 🍌", "Uvas 🍇", "Kiwis 🥝"];
    const frutaEscolhida = frutas[Math.floor(Math.random() * frutas.length)];
    console.log("Fruta escolhida :", frutaEscolhida);
    return frutaEscolhida;
}


function jogarJogo() {
    console.group("Jogo das Frutas!");
    console.time("Tempo de Processamento");

    const frutasEscolhidas = [];

    for (let i = 0; i < 3; i++) {
        console.group(`Rodada ${i + 1}`);

        const fruta = escolherFruta();
        frutasEscolhidas.push(fruta);
        console.trace("Ponto de rastreamento para depuração");
        console.groupEnd();
    }
    
    console.groupEnd();

    console.log("Frutas escolhidas nas rodadas:");
    console.table(frutasEscolhidas);
    console.timeEnd("Tempo de Processamento");
    console.dir(escolherFruta);

    console.log("Legal que chegou aqui, tira um Print e me manda no Linkedin");

}

// Iniciando o jogo
jogarJogo();
