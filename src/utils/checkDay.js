/**
 * @desc Checks if date falls on a weekend
 * @param {string} clientCheckoutTime
 * @author Oluwafemi Akinwa
 */
module.exports = (clientCheckoutTime) => {
  let dayOfWeek = new Date(clientCheckoutTime).getDay();
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    return true;
  } else {
    return false;
  }
};
