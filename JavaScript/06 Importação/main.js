/*var funcoes = require ('./funções-auxiliares') //quando eu dou um require eu estou importando o que está sendo exportado
pelo arquivo indicado no caso funções-auxiliares*/

/*console.log(funcoes)*/

var {gets, print}= require ('./funções-auxiliares')

var numerosSorteados = []

for (let i = 0; i < 5; i++) {
    var numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado)
    
}

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    var numeroSorteado = numerosSorteados[i]
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)