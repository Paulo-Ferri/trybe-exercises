// const sum = require('./sum.js')

// describe('sum', () => {
//   test('retorno de sum(4, 5) é 9', () =>{
//     expect(sum(4,5)).toBe(9);
//   })
//   test('retorno de sum(0,0) é 0', () =>{
//     expect(sum(0,0)).toBe(0);
//   })
//   test('erro quando parâmetros não são números', () =>{
//     expect(() => sum(4,"5")).toThrow(Error);
//   })
//   test('mensagem de erro é "parameters must be numbers"', () => {
//     expect(() => sum(4,"5")).toThrow('parameters must be numbers')
//   })
// })

//exercicio 2
// const myRemove = require('./myRemove.js')

// describe('myRemove', () =>{
//   test('[1, 2, 3, 4], 3 retorna array esperado', () =>{
//     expect(myRemove([1,2,3,4],3)).toEqual(expect.arrayContaining([1,2,4]));
//   })
//   test('[1,2,3,4], 3 nao retornar [1,2,3,4]', () => {
//     expect(myRemove([1,2,3,4],3)).not.toEqual(expect.arrayContaining([1,2,3,4]));
//   })
//   test('[1,2,3,4],5 retorna array esperado', () => {
//     expect(myRemove([1,2,3,4],5)).toEqual(expect.arrayContaining([1,2,3,4]));
//   })
// })

//exercicio 3
const myFizzBuzz = require('./myFizzBuzz.js')

describe('myFizzBuzz', () => {
  test('número é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  test('número divisível somente por 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })
  test('número divisível somente por 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })
  test('número não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  })
  test('parâmetro não é um número', () => {
    expect(myFizzBuzz('s')).toEqual(false);
  })
})