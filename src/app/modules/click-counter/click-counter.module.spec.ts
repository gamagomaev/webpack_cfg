import { ClickCounter } from './click-counter.module'

describe('ClickCounter', () => {
  const user = new ClickCounter();
  it(`Check base click number. Should be 0.`, () => {
    expect(user.clickNumber).toEqual(0);
  });

});