import sinon from "sinon";
import request from "supertest";
import { expect } from "chai";
import db from "./db.js";
import { app } from "./server.js";

describe("GET /users/:username", () => {
  it("send the correct response when a user with username is found", async () => {
    // Test double with Sinon // Fake version of get user name
    const fakeData = {
      id: "123",
      username: "abc",
      email: "abc@gmail.com",
    };

    const stub = sinon.stub(db, "getUserByUsername").resolves(fakeData);

    // Supertest to test server
    await request(app)
      .get("/users/abc")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(fakeData);

    expect(stub.getCall(0).args[0]).to.equal("abc");

    stub.restore();
  });

  // 2nd test for error
  it("Sends the correct response when there is an error", async () => {
    const fakeError = { message: "Something went wrong!" };
    const stub = sinon.stub(db, "getUserByUsername").throws(fakeError);

    await request(app)
      .get("/users/abc")
      .expect(500)
      .expect("Content-Type", /json/)
      .expect(fakeError);

    stub.restore();
  });

  // Returns response when user is not found
  it("return the approriate response when the user is not found", async () => {
    const stub = sinon.stub(db, "getUserByUsername").resolves(null);

    await request(app).get("/users/def").expect(404);

    stub.restore();
  });
});
