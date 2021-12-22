// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.

let newArray = [];
let soma = 0;

for (let index = 1; index <=1000; index +=1){
    newArray.push(index);
}
for (let index = 0; index < newArray.length; index +=1){
    soma += newArray[index];
}
console.log("A soma de 1 a 1000 é: ", soma);