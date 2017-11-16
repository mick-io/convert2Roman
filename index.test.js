"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_1 = require("./index");
assert.equal(index_1.default(2), "II");
assert.equal(index_1.default(3), "III");
assert.equal(index_1.default(4), "IV");
assert.equal(index_1.default(5), "V");
assert.equal(index_1.default(9), "IX");
assert.equal(index_1.default(12), "XII");
assert.equal(index_1.default(16), "XVI");
assert.equal(index_1.default(29), "XXIX");
assert.equal(index_1.default(44), "XLIV");
assert.equal(index_1.default(45), "XLV");
assert.equal(index_1.default(68), "LXVIII");
assert.equal(index_1.default(83), "LXXXIII");
assert.equal(index_1.default(97), "XCVII");
assert.equal(index_1.default(99), "XCIX");
assert.equal(index_1.default(500), "D");
assert.equal(index_1.default(501), "DI");
assert.equal(index_1.default(649), "DCXLIX");
assert.equal(index_1.default(798), "DCCXCVIII");
assert.equal(index_1.default(891), "DCCCXCI");
assert.equal(index_1.default(1000), "M");
assert.equal(index_1.default(1004), "MIV");
assert.equal(index_1.default(1006), "MVI");
assert.equal(index_1.default(1023), "MXXIII");
assert.equal(index_1.default(2014), "MMXIV");
assert.equal(index_1.default(3999), "MMMCMXCIX");
assert.throws(function () { index_1.default(-1); }, Error);
