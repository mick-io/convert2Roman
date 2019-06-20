var conversionsTable = {
  M: 1000,
  CM: 900,
  D: 500,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
var romanNumerals = Object.keys(conversionsTable);

/**
 * Converts a base 10 integer into  it's equivalent roman numeral.
 * @param {number} int An integer greater than 0 that will be converted to a Roman Numeral.
 * @throws {Error} An error is thrown if the input is not of type "number", the input is not an whole number, or the input is less than 1.
 * @returns {string} The roman numeral representation of the input integer.
 */
module.exports = function(int) {
  // if int is not of type number, not an integer, or is less than 1
  if (typeof int !== "number" || int % 1 !== 0 || int < 1) {
    throw new Error("convert2Roman must be called with an positive integer");
  }
  var n = 0;
  var char = "";
  var output = "";
  for (var i = 0, len = romanNumerals.length; i <= len; i++) {
    char = romanNumerals[i];
    n = conversionsTable[char];
    while (int - n >= 0) {
      output += char;
      int -= n;
    }
  }
  return output;
};
