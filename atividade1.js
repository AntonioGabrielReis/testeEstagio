const valorFinanciamento = (valorBaseProduto, numeroParcelas, juros) => {
    const i = juros / 100; // Para transformar em porcetagem 
    const P = valorBaseProduto / numeroParcelas; 
  
    const valorTotal = P * (((1 + i) ** numeroParcelas - 1) / i);
  
    return valorTotal;
  };
  
  // Valores definidos

  // Valor do produto
  const valorBaseProduto = 1000;
  // Número de parcelas definidas pelo comprador
  const numeroParcelas = 12; 
  // Taxa de juros mensal pré definida
  const juros = 1.5; 
  
  const valorFinal = valorFinanciamento(valorBaseProduto, numeroParcelas, juros);
  console.log(`O valor total a ser pago no financiamento é: R$ ${valorFinal.toFixed(2)}`);
  