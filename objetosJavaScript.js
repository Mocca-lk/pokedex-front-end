
class Pessoa { //a classe define como aquele objeto deve ser
    nome;
    idade;
    anoDeNascimento;
    //atributos da classe

constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
    //sempre que uma pessoa for instânciada ele pede os 2 itens
}

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
   
    }
} 
//exemplo de instâncias:
function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é  mais velho que ${p2.nome}`);

} else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
} else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
}

}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);