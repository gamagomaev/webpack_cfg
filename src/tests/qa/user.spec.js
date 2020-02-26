import User from './user.js'

describe('Object checking', () => {
  const user = new User('MGA');
  it(`Set name value in a new object`, () => {
    expect(user.name).toEqual('MGA');
  });

  it(`Get new name value in a new object`, () => {
    
    expect(user.getName()).toEqual('MGA');
  });

});


