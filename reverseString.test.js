const reverseString = require('./reverseString.js');

test('String is reversed', () => {
  
    
  expect(reverseString('hello')).toBe('olleh');
});