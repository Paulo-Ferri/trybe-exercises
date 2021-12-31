const sum = require('./sum.js')

describe('sum', () => {
  test('retorno de sum(4, 5) é 9', () =>{
    expect(sum(4,5)).toBe(9);
  })
  test('retorno de sum(0,0) é 0', () =>{
    expect(sum(0,0)).toBe(0);
  })
  test('erro quando parâmetros não são números', () =>{
    expect(() => sum(4,"5")).toThrow(Error);
  })
  test('mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4,"5")).toThrow('parameters must be numbers')
  })
})