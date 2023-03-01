function capitalize(string) {
    if (typeof string !== "string") {
      throw new Error("Input must be a string");
    }
  
    if (string.length === 0) {
      return "";
    }
  
    const firstChar = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1);
  
    return firstChar + restOfString;
  }
  
  module.exports = capitalize;
  