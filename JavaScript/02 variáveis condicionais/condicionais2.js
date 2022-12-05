let precoG = 6.66;
let precoE = 5.75;
let combustivel = 'Etanol';
let dist = 100;
let kmLitros = 11;

if (combustivel == 'Etanol') {valorGasto = ((dist/kmLitros)*precoG)    
} else {valorGasto = ((dist/kmLitros)*precoE)
    
}

console.log(valorGasto.toFixed(2))