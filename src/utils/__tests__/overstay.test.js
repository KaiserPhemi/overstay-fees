// third-party library
const expect = require("chai").expect;

// module
const overstay = require("../overstay");

// test suite
describe("overstay module", () => {
  it("should return overstay hours for stated timestamp with hours and minutes", () => {
    let checkOutTime = new Date("2021-02-02 5:21");
    let clientCheckOutTime = new Date("2021-02-03 01:00");
    expect(overstay(checkOutTime, clientCheckOutTime)).to.equal(20);
  });

  it(`should return 'NaN' for empty string time stamp`, () => {
    let checkOutTime = "";
    let clientCheckOutTime = new Date("2021-02-03 01:00");
    expect(overstay(checkOutTime, clientCheckOutTime)).to.be.NaN;
  });

  it(`should assume '00:00' for date string without timestamp and return a value based on that`, () => {
    let checkOutTime = new Date("2021-02-22");
    let clientCheckOutTime = new Date("2021-02-23");
    expect(overstay(checkOutTime, clientCheckOutTime)).to.equal(24);
  });

  it(`should return 'NaN' for invalid date string`, () => {
    let checkOutTime = new Date("2021-22-22");
    let clientCheckOutTime = new Date("2021-02-23");
    expect(overstay(checkOutTime, clientCheckOutTime)).to.be.NaN;
  });
});
