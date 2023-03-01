const stringLength = require('./stringLength');

test('String', () => {
  //arange
  const string = 'This is how we do it fo iy ifs vsdv';
  //act
  const result = () => stringLength(string);

  //assert
  expect(result).toThrow(Error);
});