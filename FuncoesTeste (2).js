function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros){ //é possivel passar mais de um parametro, como nesse caso.
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 15));

//como organizar o código?
//código adicional que for sendo necessário, vamos criar novas functions.
function calcularJuros(){

}

//tudo principal vai ficar aqui dentro
function main() {
    console.log('Programa Principal');
}

main();