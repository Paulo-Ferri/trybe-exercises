// parte um
// 1)
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const testingScope = escopo => {if (escopo === true){
//     let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
//     console.log(ifScope)
//   } else {
//     let elseScope = "Não deve ser utilizada fora do meu escopo (else)";
//     console.log(elseScope)
//   }
// }
// testingScope(true);

// 2)
// const oddsAndEvens = [13,3 , 4, 10, 7, 2];

// const sortArrayBonus = array => {
//   const sortOddsAndEvens = array.sort((a, b) => a - b);
//   return sortOddsAndEvens;
// }

// const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
// Nesse caso, o .sort analisa 2 números aleatórios do array e faz a seguinte comparação:
// function comparar(a, b) {
//   if (a é menor que b em algum critério de ordenação) {
//     return -1;
//   }
//   if (a é maior que b em algum critério de ordenação) {
//     return 1;
//   }
//   // a deve ser igual a b
//   return 0;
// }
// Assim, se o resultado foi negativo, significa que a é menor do que b e deve ser ordenado antes. Se positivo, b deve ser ordenado antes e se 0 matem-se a ordem.
//
// parte dois
// const factorial = number => {
//   let result = 1;

//   for (let index = 1; index <= number; index += 1) {
//       result *= index;
//       console.log(result)
//   }

//   return result;
// }

// console.log(factorial(5));

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
