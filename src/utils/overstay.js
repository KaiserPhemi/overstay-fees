// third-party libraries
const differenceInHours = require("date-fns/differenceInHours");
const parseISO = require("date-fns/parseISO");

/**
 * @desc Gets overstay period in hours
 * @param {string} checkOutTime
 * @param {string} clientCheckOutTime
 * @author Oluwafemi Akinwa
 */
module.exports = (checkOutTime, clientCheckOutTime) => {
  const overstayHours = differenceInHours(
    parseISO(clientCheckOutTime),
    parseISO(checkOutTime)
  );
  return Number(overstayHours);
};;;
