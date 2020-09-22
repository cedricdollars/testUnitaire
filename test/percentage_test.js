var assert = require('assert');
var percentage = require('../lib/Percentage');
describe('percentage', () => {

    describe("#evolution", () => {

        it("should give an evolution", function () {
            assert.equal(percentage.evolution(100, 200), 100);
            assert.equal(percentage.evolution(100, 50), -50);
            assert.equal(percentage.evolution(100, 150), 50);
        })
        it("should handle 0 evolution", function () {
            assert.equal(percentage.evolution(0, 0), 0)
        })
    })
})