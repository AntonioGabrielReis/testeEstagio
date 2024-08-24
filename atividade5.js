const readline = require('readline');

//relatorio definido
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

//leituda da data e SKU pra somatoria dos valores
function gerarRelatorioDeVendas(vendas, dataEscolhida) {
    const vendasNaData = vendas.filter(venda => venda.data === dataEscolhida);

    const relatorio = {};

    vendasNaData.forEach(venda => {
        if (!relatorio[venda.sku]) {
            relatorio[venda.sku] = {
                quantidadeTotal: 0,
                valorTotal: 0
            };
        }
        relatorio[venda.sku].quantidadeTotal += venda.quantidade;
        relatorio[venda.sku].valorTotal += venda.valorTotal;
    });

    const valorTotalData = vendasNaData.reduce((total, venda) => total += venda.valorTotal, 0);

    return {
        relatorioPorSKU: relatorio,
        valorTotalData: valorTotalData
    };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//interação usuario
rl.question('Escolha uma data para ver o relatório de vendas (01 ou 02 de Janeiro de 2021): ', (diaEscolhido) => {
    let dataEscolhida = '';
    if (diaEscolhido === '01') {
        dataEscolhida = '2021-01-01';
    } else if (diaEscolhido === '02') {
        dataEscolhida = '2021-01-02';
    } else {
        console.log('Data inválida. Escolha 01 ou 02.');
        rl.close();
        return;
    }

//interação usuario retorno

    const resultado = gerarRelatorioDeVendas(vendas, dataEscolhida);
    console.log(`Relatório de vendas para ${dataEscolhida}:`);
    console.log(resultado);

    rl.close();
});
