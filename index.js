"use strict";

/**
 * Converts a integer to a roman numeral.
 * @param {number} input the value to be converted to a Roman Numeral
 * @returns {string} The input value in roman numerals.
 */
module.exports = function (input) {
    var EMPTY_STRING = "";
    var ZERO = 0;

    if (typeof input !== "number") {
        throw new Error("convert2Roman must be called with typeof 'number'");
    }

    if (input === ZERO) {
        return EMPTY_STRING;
    }

    input = Math.round(Math.abs(input));

    var romanNumerals = {
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
        I: 1,
    };
    var romanCharacters = Object.keys(romanNumerals);
    var char = EMPTY_STRING;
    var num = 0;
    var output = EMPTY_STRING;

    for (var i = ZERO; i <= romanCharacters.length; i++) {
        char = romanCharacters[i];
        num = romanNumerals[romanCharacters[i]];
        while (input - num >= ZERO) {
            output += char;
            input -= num;
        }
    }
    return output;
};