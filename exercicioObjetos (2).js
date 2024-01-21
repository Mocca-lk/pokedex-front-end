class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;

    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
}

}

const uno = new Carro('Fiat', 'Preto', 1 / 12);
const palio = new Carro('Fiat', 'Branco', 1 / 10);

console.log(uno.calcularGastoDePercurso(70,5));
console.log(palio.calcularGastoDePercurso(70,5));


