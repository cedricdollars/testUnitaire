"use strict";

var assert = require('assert');

var Puissance = require('../lib/puissance');

describe('power of 2', function () {
  it('should do something', function () {
    assert.equal(Puissance.puissance(2), 4);
    assert.equal(Puissance.puissance(12), 144);
    assert.equal(Puissance.puissance(5), 25);
    assert.equal(Puissance.puissance(6), 36);
    assert.equal(Puissance.puissance(8), 64);
  });
});