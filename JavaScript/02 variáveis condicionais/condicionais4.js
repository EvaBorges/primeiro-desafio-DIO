/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

let precoEtiqueta = 100;
let condPg = 2;
let valor = 0

if (condPg == 1) { valor = (precoEtiqueta-(precoEtiqueta*0.10))
    
} else if (condPg == 2){ valor = (precoEtiqueta-(precoEtiqueta*0.15))
    
} else if (condPg == 3){ valor = precoEtiqueta

} else {valor = (precoEtiqueta+(precoEtiqueta*0.10))}

console.log(`O preço final é R$ ${valor} reais`)





