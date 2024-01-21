function escrevaMeuNome (nome) {
    return 'Seu nome é ' + nome;
}


function verificarIdade (idade){
    if (idade < 18) {
        console.log( escrevaMeuNome('Mariana') + ', você é de menor, porque tem ' + idade + ' anos de idade.');
    } else {
        console.log('Você já é maior de idade, porque tem ' + idade + ' anos de idade.');
    }
}

verificarIdade(17);

