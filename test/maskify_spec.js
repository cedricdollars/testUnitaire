let assert = require("assert");
let maskify = require("../lib/maskify");
describe("maskify", function () {
  it("should work for exameples", function () {
    assert.equal(maskify.maskify("2345612378906532"), "############6532");
    assert.equal(maskify.maskify("1"), "1");
    assert.equal(maskify.maskify("11111"), "#1111");
  });
});
