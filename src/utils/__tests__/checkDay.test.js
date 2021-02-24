// third-party library
const expect = require("chai").expect;

// module
const checkDay = require("../checkDay");

// test suite
describe("checkDay module", () => {
  it("should return false for non-weekend days", () => {
    let testDate = new Date("2021-02-02");
    expect(checkDay(testDate)).to.equal(false);
  });

  it("should return true for a date that falls on the weekday", () => {
    let testDate = new Date("2021-01-02");
    expect(checkDay(testDate)).to.equal(true);
  });
});
