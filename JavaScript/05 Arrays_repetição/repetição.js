const notas = [];//como coloquei entre [] estou criando uma lista que será adicionada por cada push

notas.push(9);
notas.push(10);
notas.push(8);



let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);