// não sabia se era para criar um array novo com os valores da divisão ou ir imprimindo conforme o for funcionava, por isso fiz das duas formas: 
// modelo 1:
newArray = [];

for (index = 1; index <= 25; index +=1){
    newArray.push(index);
    divisao = index / 2;
    console.log(divisao);
}

//modelo 2
newArray = [];
arrayDivisao = []

for (index = 1; index <= 25; index +=1){
    newArray.push(index);
    arrayDivisao.push(index / 2);
}
console.log(newArray);
console.log(arrayDivisao);