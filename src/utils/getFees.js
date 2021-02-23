// third-party library
const isWeekend = require("date-fns/isWeekend");
const parseISO = require("date-fns/parseISO");

// rates
const roomRates = require("../constants");

/**
 * @desc Gets the amount payable for extended stay
 * @param {number} overstayPeriod
 * @param {number} amountPaid
 * @param {string} roomType
 * @param {string} clientCheckoutTime
 * @author Oluwafemi Akinwa
 */
module.exports = (overstayPeriod, amountPaid, roomType, clientCheckoutTime) => {
  switch (roomType) {
    case "regular":
      if (isWeekend(parseISO(clientCheckoutTime))) {
        return overstayPeriod * roomRates.REGULAR_WEEKEND * amountPaid;
      } else {
        return overstayPeriod * roomRates.REGULAR_WEEK_DAY * amountPaid;
      }
    case "deluxe":
      if (isWeekend(parseISO(clientCheckoutTime))) {
        return overstayPeriod * roomRates.DELUXE_WEEK_DAY * amountPaid;
      } else {
        return overstayPeriod * roomRates.DELUXE_WEEKEND * amountPaid;
      }
    case "palatial":
      if (isWeekend(parseISO(clientCheckoutTime))) {
        return overstayPeriod * roomRates.PALATIAL_WEEK_DAY * amountPaid;
      } else {
        return overstayPeriod * roomRates.PALATIAL_WEEKEND * amountPaid;
      }
    default:
      return;
  }
};
