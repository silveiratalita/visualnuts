const index = require('./index');

describe('Testing index.js export ->', () => {
  it('Should Export Function getInstance', async() => {
    expect(index.getInstance).toEqual(jasmine.any(Function));

    index.getInstance();
  });
});
