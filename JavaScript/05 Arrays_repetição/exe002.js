/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

let lista = [0,1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < lista.length; i++) {
    
    let numero = lista[i]

    if (numero%2 == 0) {
        
        console.log(numero)
    }


    
}


