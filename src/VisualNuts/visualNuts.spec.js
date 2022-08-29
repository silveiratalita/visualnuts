const getInstance = require('./visualNuts');

describe('Testing VisualNuts/visualNuts.js Constructor->', () => {
  const test = 'teste';
  it('With any Arg', async() => {
    expect(() => getInstance(test)).not.toThrowError();
  });

  it('Full args', async() => {
    expect(() => getInstance()).not.toThrowError();
  });
});
