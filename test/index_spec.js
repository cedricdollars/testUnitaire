let assert = require("assert");
let firstNotConsecutive = require("../lib/index");
describe("Not consecutive", function () {
  it("should be return", function () {
    const first = firstNotConsecutive.firstNotConsecutive([
      1,
      2,
      3,
      4,
      5,
      6,
      8,
    ]);
    assert.equal(first, 8);
  });
});
