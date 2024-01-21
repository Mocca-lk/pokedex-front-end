const precoOriginal = 100;
const formaDePagamento = 4; 
//criamos uma lógica para as formas de pagamento;
/*1- Débito recebe-  10% de desconto 
2-Dinheiro ou Pix  - 15% desconto 3-Em duas vezes
4- Acima de duas vezes - mais juros de 10% */



if (formaDePagamento === 1) {
   console.log(aplicarDesconto(precoOriginal, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoOriginal, 15));
} else if (formaDePagamento === 3) {
    console.log(precoOriginal);
} else {
    console.log(aplicarJuros(precoOriginal, 10));
}

function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros (valor, juros) { 
    return (valor + (valor * (juros/100)));

}



