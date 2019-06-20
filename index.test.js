const assert = require("assert");
const convert2Roman = require("./index");
const describe = require("mocha").describe;
const it = require("mocha").it;

const ERROR_MSG = "convert2Roman must be called with an positive integer";

describe("convert2Roman", function() {
  it("should throw an error if not called with 'typeof number'", function() {
    try {
      convert2Roman("throw an error!}");
    } catch (err) {
      assert.equal(err.message, ERROR_MSG);
    }
  });

  it("should throw an error if called with a floating point number", function() {
    try {
      convert2Roman("throw an error!}");
    } catch (err) {
      assert.equal(err.message, ERROR_MSG);
    }
  });

  it("should throw an error if called with a number less than 1", function() {
    try {
      convert2Roman("throw an error!}");
    } catch (err) {
      assert.equal(err.message, ERROR_MSG);
    }
  });

  it("it should convert positive whole integers to roman numerals", function() {
    assert.equal(convert2Roman(2), "II");
    assert.equal(convert2Roman(3), "III");
    assert.equal(convert2Roman(4), "IV");
    assert.equal(convert2Roman(5), "V");
    assert.equal(convert2Roman(9), "IX");
    assert.equal(convert2Roman(12), "XII");
    assert.equal(convert2Roman(16), "XVI");
    assert.equal(convert2Roman(29), "XXIX");
    assert.equal(convert2Roman(44), "XLIV");
    assert.equal(convert2Roman(45), "XLV");
    assert.equal(convert2Roman(68), "LXVIII");
    assert.equal(convert2Roman(83), "LXXXIII");
    assert.equal(convert2Roman(97), "XCVII");
    assert.equal(convert2Roman(99), "XCIX");
    assert.equal(convert2Roman(500), "D");
    assert.equal(convert2Roman(501), "DI");
    assert.equal(convert2Roman(649), "DCXLIX");
    assert.equal(convert2Roman(798), "DCCXCVIII");
    assert.equal(convert2Roman(891), "DCCCXCI");
    assert.equal(convert2Roman(1000), "M");
    assert.equal(convert2Roman(1004), "MIV");
    assert.equal(convert2Roman(1006), "MVI");
    assert.equal(convert2Roman(1023), "MXXIII");
    assert.equal(convert2Roman(2014), "MMXIV");
    assert.equal(convert2Roman(3999), "MMMCMXCIX");
  });
});
