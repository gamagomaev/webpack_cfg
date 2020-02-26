const summ = require('./add.js');

describe('Summ numbers function', () => {
  it('Summ 1 and 10, should be 11', () => {
    expect(summ(1, 10)).toEqual(11);
  });

  it('Summ -1 and 10, should be 9', () => {
    expect(summ(-1, 10)).toEqual(9);
  });

  it(`Summ 1 and "ten", should be NaN`, () => {
    expect(summ(1, 'ten')).toEqual(NaN);
  });
});
