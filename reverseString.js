const reverseString = (string) => {
    return string.split('').reverse().join('');
  };
  reverseString('hello');
  
  module.exports = reverseString;