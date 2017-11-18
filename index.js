"use strict";

/**
 * @param input: number - Value to be converted to a Roman Numeral
 */
function convert2Roman(input) {

    /* Sanitizing Input. */
    if (typeof input !== "number") {
        input = parseInt(input);
    }

    if (input == 0) {
        return "";
    } else if (!input) {
        throw new Error("convert2Roman must be called with typeof 'number'");
    }

    input = Math.round(Math.abs(input));

    /* Static Loop Variables */
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

    /* Dynamic Loop Variables */
    var char = "";
    var num = 0;

    /* Return Variable */
    var output = "";

    for (var i = 0; i <= romanCharacters.length; i++) {
        char = romanCharacters[i];
        num = romanNumerals[romanCharacters[i]];
        while (input - num >= 0) {
            output += char;
            input -= num;
        }
    }

    return output;
};

module.exports = convert2Roman;