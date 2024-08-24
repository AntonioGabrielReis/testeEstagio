const vendas = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

const estoqueAtual = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

function atualizarEstoque(vendas, estoqueAtual) {
    for (const vendaRealizada of vendas) {
        const produtoEstoque = estoqueAtual.find(produto => produto.sku === vendaRealizada.sku);

        if (produtoEstoque) {
            produtoEstoque.quantidade -= vendaRealizada.quantidade;
        }
    }
    return estoqueAtual;
}

const estoqueAtualizado = atualizarEstoque(vendas, estoqueAtual);
console.log('Estoque atualizado após as vendas realizadas.' , (estoqueAtualizado));
