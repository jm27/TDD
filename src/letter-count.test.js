// Import function from letter count file
import { getLetterCount } from "./letter-count.js";
// Import from assertion library chai
import { expect } from "chai";
// Describe; group similar test together
describe("getLetterCount- basic functionality", () => {
  // it(); Individual test
  it("return an empty object when passed an empty string", () => {
    // Assertions
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected); // deep = comparing objects
  });
  // Another test
  it("Return the correct letter count for a word with only one of each letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });
  // Another test
  it("Return correct letter count for words with more than one letter", () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount("mississippi");
    expect(actual).to.deep.equal(expected);
  });
});
