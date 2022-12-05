let peso = 66
let altura = 1.65
let imc = (peso/Math.pow(altura, 2))//Math.pow calcula potencia

console.log(imc.toFixed(2))

if (imc< 18.5) {console.log('Abaixo do peso')
    
} else if (imc<=25){console.log('Peso normal')
    
} else if (imc<=30) {console.log('Acima do peso')

} else if (imc<=40) {console.log('Obeso')

} else {console.log('Obesidade grave')}
