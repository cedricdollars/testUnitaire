let assert = require("assert");
let isProduct30 = require("../lib/func");

describe("Is product of 30", () => {
  it("should be return", () => {
    assert.equal(isProduct30.isProduct30());
  });
});
