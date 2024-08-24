const readline = require('readline');

// Tabela de preços pré definida
const valores = {
    '0-1,0-5': 10.0,
    '0-1,6-10': 15.0,
    '1-5,0-5': 20.0,
    '1-5,6-10': 25.0,
    '5-10,0-5': 30.0,
    '5-10,6-10': 35.0
};

const cauculadorafrete = (peso, distancia, valores) => {
    let parametroPeso;
    let parametroDistancia;

    if (peso <= 1) {
        parametroPeso = '0-1';
    } else if (peso <= 5) {
        parametroPeso = '1-5';
    } else if (peso <= 10) {
        parametroPeso = '5-10';
    } else {
        return "Não trabalhos com envios desse peso";
    }

    if (distancia <= 5) {
        parametroDistancia = '0-5';
    } else if (distancia <= 10) {
        parametroDistancia = '6-10';
    } else {
        return "Não trabalhos com envios dessa distancia";
    }

    const chave = `${parametroPeso},${parametroDistancia}`;
    const valorFrete = valores[chave];

    return valorFrete !== undefined ? `O valor do frete é: R$ ${valorFrete.toFixed(2)}` : "Não foi possível calcular o frete";
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Interação com usuário
rl.question('Qual o peso do pedido (kg)?: ', (pesoInput) => {
    const peso = parseFloat(pesoInput);

    rl.question('Qual a distancia de entrega (km)?: ', (distanciaInput) => {
        const distancia = parseFloat(distanciaInput);

        const valorFrete = cauculadorafrete(peso, distancia, valores);
        console.log(valorFrete);

        rl.close();
    });
});
