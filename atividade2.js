const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];

const verificador = (sku, listaDeProdutos) => {
    const produto = listaDeProdutos.find(produto => produto.sku === sku);
    return produto ? produto.quantidade > 0 : false;
};

// Resultados
console.log(verificador(1000, produtos)); 
console.log(verificador(1001, produtos)); 
console.log(verificador(1002, produtos)); 
console.log(verificador(1003, produtos)); 
console.log(verificador(1004, produtos));