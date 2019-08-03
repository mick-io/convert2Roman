const table = new Map([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
]);

/**
 * Converts a base 10 integer into  it's equivalent roman numeral.
 * @param {number} int An integer greater than 0 that will be converted to a Roman Numeral.
 * @returns {string} The roman numeral representation of the input integer.
 * @throws {Error} An error is thrown if the input is not of type "number", the
 *  input is not an whole number, or the input is less than 1.
 */
module.exports = function(int) {
  // if int is not of type number, not an integer, or is less than 1
  if (typeof int !== "number" || int % 1 !== 0 || int < 1) {
    throw new Error("convert2Roman must be called with an positive integer");
  }
  let output = "";
  for (let [char, n] of table) {
    while (int - n >= 0) {
      output += char;
      int -= n;
    }
  }
  return output;
};
