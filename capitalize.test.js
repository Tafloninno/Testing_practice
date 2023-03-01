const capitalize = require('./capitalize');

describe("capitalize", () => {
  test("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should return an empty string if the input string is empty", () => {
    expect(capitalize("")).toBe("");
  });

  test("should throw an error if the input is not a string", () => {
    expect(() => capitalize(123)).toThrowError("Input must be a string");
  });
});
