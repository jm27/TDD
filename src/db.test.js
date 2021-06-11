import { expect } from "chai";
import { getUserByUsername } from "./db.js";
import {
  getDataBaseData,
  resetDataBase,
  setDataBaseData,
} from "./test-helpers.js";

// Describe statement
describe("getUserByUsername", () => {
  // Run after every test
  afterEach("reset the databas", async () => {
    await resetDataBase();
  });
  it("get the correct user from the database given a username", async () => {
    // Dummy data
    const fakeData = [
      {
        id: "123",
        username: "abc",
        email: "abc@gmail.com",
      },
      {
        id: "124",
        username: "wrong",
        email: "wrong@wrong.com",
      },
    ];

    // TESTS
    await setDataBaseData("users", fakeData);
    const actual = await getUserByUsername("abc");
    const finalDBState = await getDataBaseData("users");

    const expected = {
      id: "123",
      username: "abc",
      email: "abc@gmail.com",
    };

    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(finalDBState).excludingEvery("_id").to.deep.equal(fakeData);
  });
});
