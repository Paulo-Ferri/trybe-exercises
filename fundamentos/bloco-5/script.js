// Crie um irmaão para o elementoOndeVoceEsta;
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML --> como usar o insertAdjacentHTML;
// let ondeEsta = document.querySelector("#elementoOndeVoceEsta");
// let irmao = document.createElement('p');
// ondeEsta.insertAdjacentHTML("afterend", "<p>teste porra</p>");

// crie um filho para elementoOndeVoceEsta;
// let pai = document.querySelector("#elementoOndeVoceEsta");
// let filho = document.createElement('p');
// filho.innerText = "teste filho";
// pai.appendChild(filho);

// crie um filho para primeiroFilhoDoFilho
// let filho = document.querySelector("#primeiroFilhoDoFilho");
// let filhoDoFilho = document.createElement("p");
// filhoDoFilho.innerText = "teste";
// filho.appendChild(filhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho;
// let filho = document.querySelector("#primeiroFilhoDoFilho");
// let filhoDoFilho = document.createElement("p");
// filhoDoFilho.innerText = "teste";
// filho.appendChild(filhoDoFilho);
// let irmaoDoPai = filhoDoFilho.parentElement.parentElement.nextElementSibling;
// console.log(irmaoDoPai);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho

// let paiElement = (document.getElementById('pai'));
// paiElement.firstElementChild.remove();
// //remove terceiro filho
// paiElement.firstElementChild.nextElementSibling.remove();
// //remove último filho
// paiElement.lastElementChild.remove();
       


// // Com o template literals
// let um = "primeira linha";
// let dois = "segunda linha";
// let tres = "terceira linha";
// console.log(`${um};
// ${dois};
// ${tres}`
// )

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('A string original é: "' + stringToSplit + '"');
//   console.log('O separador é: "' + separator + '"');
//   console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
// }

// var tempestString = 'Oh brave new world that has such people in it.';
// var monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez';

// var space = ' ';
// var comma = ',';

// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
