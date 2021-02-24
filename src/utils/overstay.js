// constant(s)
const MILLISECOND_PER_HOUR = (1000 * 60 * 60);

/**
 * @desc Gets overstay period in hours
 * @param {string} checkOutTime
 * @param {string} clientCheckOutTime
 * @author Oluwafemi Akinwa
 */
module.exports = (checkOutTime, clientCheckOutTime) => {
  let overstayHours = (
    (new Date(clientCheckOutTime) - new Date(checkOutTime)) /
    MILLISECOND_PER_HOUR
  ).toFixed(2);
  overstayHours = parseFloat(Math.ceil(overstayHours));
  return Number(overstayHours);
};
