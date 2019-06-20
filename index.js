"use strict";

/**
 * Converts a integer to a roman numeral.
 * @param {number} input the value to be converted to a Roman Numeral
 * @returns {string} The input value in roman numerals.
 */
module.exports = function(input) {
  // if input is not an positive integer...
  if (typeof input !== "number" || input % 1 !== 0 || input < 0) {
    throw new Error("convert2Roman must be called with an positive integer");
  }
  // if zero...
  if (input === 0) {
    return "";
  }
  var conversions = {
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
  var romanNums = Object.keys(conversions);
  var num = 0;
  var char = "";
  var output = "";
  for (var i = 0; i <= romanNums.length; i++) {
    char = romanNums[i];
    num = conversions[romanNums[i]];
    while (input - num >= 0) {
      output += char;
      input -= num;
    }
  }
  return output;
};
