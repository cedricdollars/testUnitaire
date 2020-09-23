const assert = require("assert");
describe("filter function", () => {
  it("should be filter by search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.github.com/cedricdollars" },
      { id: 2, url: "https://www.github.com/florinpop" },
      { id: 3, url: "https://www.github.com/florinpop" },
    ];
    const output = [{ id: 1, url: "https://www.github.com/cedricdollars" }];

    //test here
  });
});
