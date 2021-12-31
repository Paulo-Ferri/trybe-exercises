const sum = require('./sum.js')

describe('sum', () => {
  test('retorno de sum(4, 5) é 9', () =>{
    expect(sum(4,5)).toBe(9);
  })
})