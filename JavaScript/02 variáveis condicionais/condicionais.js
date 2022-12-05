var numero =10
var isNumPar= (numero%2)===0;/*por convenção como essa é uma variável booleana coloca o prefixo de is. 
Não precisava criar essa variável a parte, podia colocar (numero%2)===0 dentro do lugar da condição em 
vez do nome da variável mas ele preferiu assim. */

if (isNumPar) {
    console.log('É um número par')
    
} else {
    console.log('É um número ímpar')
    
}