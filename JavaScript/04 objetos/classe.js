/*Classe é uma definição do que deveria ser
Instância é uma ocorrência dentro de uma classe
exemplo: classe : pessoas - instâmcia : Vítor
         classe: carros - instância hb20*/

/*Ele ensinou a usar o constructor que dá a base dentro de uma clase do que será obrigatório
nas instâncias. É como se criasse um formulário base*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

console.log(vitor)
console.log(renan)

compararPessoas(vitor, renan);