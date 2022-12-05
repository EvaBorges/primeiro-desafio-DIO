

function calcularImc(peso, altura) {
    return peso/Math.pow(altura, 2)
    
}


function classificarImc(imc) {
    if (imc< 18.5) {return'Abaixo do peso'
    
} else if (imc<=25){return 'Peso normal'
    
} else if (imc<=30) {return'Acima do peso'

} else if (imc<=40) {return 'Obeso'

} else { return 'Obesidade grave'

}
}

//As duas funções acima estão com as linhas ocultas
// Ele ocultou clicando ao lado para dar enfase que elas estão auxiliando a função principal

/*function main() {
var peso = 66
var altura = 1.65
var imc = calcularImc(peso, altura) A função main está puxando das duas outras funções
Assim eu posso ter funções base que irão ajudar outras funções.
No jS as funções são como objetos, posso chamar, modificar

console.log(imc.toFixed(2))
console.log(classificarImc(imc))
    
}

main() /*se eu colocar a função entre parenteses e logo em seguida parenteses de novo sem nada dentro (funçãoblalbla)()
Ela retorna na hora que está rodando sem precisar pedir depois. Faz o que o main() está fazendo aqui. Como abaixo*/

(function main() {
    var peso = 66
    var altura = 1.65
    var imc = calcularImc(peso, altura) 
    
    console.log(imc.toFixed(2))
    console.log(classificarImc(imc))
        
    })()

    /*com isso eu posso até tirar o nome da função pq eu não preciso chamar ela do lado de fora.
    Ela fica isolada ali. Geralmente usado na web quando quero executar algo uma vez só*/