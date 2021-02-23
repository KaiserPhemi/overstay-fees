// database
const allReservations = require("../../../db");

/**
 * @desc Reservation controller
 * @author Oluwafemi Akinwa
 */
const reservationController = {
  /**
   * @desc Retrieves all reservations
   * @param {object} req
   * @param {object} res
   */
  getAllReservations(req, res) {
    try {
      return res.status(200).json({
        message: "All reservations retrieved successfully.",
        allReservations,
      });
    } catch (error) {
      return res.status(400).json({
        message: "An error occur.",
        error,
      });
    }
  },

  /**
   * @desc Gets a single reservation with checkout time
   * @param {object} req
   * @param {object} res
   */
  getReservation(req, res) {
    try {
    } catch (error) {}
  },
};

module.exports = reservationController;
