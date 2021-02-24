// third-party libraries
require("dotenv").config();
const expect = require("chai").expect;
const supertest = require("supertest");

const PORT = process.env.PORT;
const appServer = supertest.agent(`http://localhost:${PORT}`);

// Test suite
describe("/", () => {
  it("should return home page", async (done) => {
    appServer
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.states).to.equal(200);
        done();
      });
  });
});
