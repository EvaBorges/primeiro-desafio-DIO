function incrementarJuros(valor, percentualJuros) {
    let valorAcrescimo = (percentualJuros/100)* valor
    return valor + valorAcrescimo
    
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))