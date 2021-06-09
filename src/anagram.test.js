// take two strings same exact letters and quantity in different order. spaces should be ignored. case should be ignored
// import funcion from anagram.js
import { testAnagram } from "./anagram.js";
// import Expect from assertion library chai
import { expect } from "chai";

// Create test groups with describe
describe("testAnagram - basic functionality", () => {
  // First test// 'listen' 'silent'
  it("return true if include same letters", () => {
    // Assertions
    const expected = true;
    const actual = testAnagram("listen", "silent");

    expect(actual).to.equal(expected);
  });
  //Second Test // 'elbows' 'below' NOT Anagram
  it("return false if both strings are not equal", () => {
    // Assertions
    const expected = false;
    const actual = testAnagram("elbows", "below");

    expect(actual).to.equal(expected);
  });
  //Third Test// 'listens' 'silent' NOT Anagram
  it("return false if letter quantity is not the same", () => {
    // Assetions
    const expected = false;
    const actual = testAnagram("listens", "silent");

    expect(actual).to.equal(expected);
  });
  // Fourth Test// 'conversation' 'voices rant on' Are anagrams
  it("return true if both have the same letter count ignoring spaces", () => {
    // Assertions
    const expected = true;
    const actual = testAnagram("conversation", "voices rant on");

    expect(actual).to.equal(expected);
  });
  // Fifth test  // 'State' 'taSTE' are anagrams
  it('return truw if both strings are equal ignoring case', () => {
    const expected = true;
    const actual = testAnagram('State', 'taSTE');

    expect(actual).to.equal(expected);
  })

});
