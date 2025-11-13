/*
Nome do produto
Quantidade
Valor de uma unidade
Nome Cliente

Seu programa deverá calcular o total da compra e imprimir:

Exemplo de Saida
############

Nome do Cliente: xxxxx
Produto: xxxxx
Valor Unitário: xxxxx
Total da Compra: xxxxx

############
Obrigado e Volte sempre

*/


var nomeCliente = prompt('Nome');
var produto = prompt('Produto');
var quantidade = prompt('quantidade')
var valorUn = prompt('Valor Unitário');
var valorTotal = valorUn*quantidade

console.log(`############

Nome do Cliente: ${nomeCliente}
Produto: ${produto}
Valor Unitário: ${valorUn}
Total da Compra: ${valorTotal}

############`)



