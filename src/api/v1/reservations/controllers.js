// database
const allReservations = require("../../../db");

// utils
const getOverstayPeriod = require('../../../utils/overstay')
const {idSchema, dateSchema} = require('../../../utils/validate')

/**
 * @desc Reservation controller
 * @author Oluwafemi Akinwa
 */
const reservationController = {
  /**
   * @desc Retrieves all reservations
   * @param {object} req
   * @param {object} res
   * @author Oluwafemi Akinwa
   */
  async getAllReservations(req, res) {
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
   * @author Oluwafemi Akinwa
   */
  async getReservation(req, res) {
    let idError = await idSchema.validate(req.params.id).error;
    if (idError) {
      return res.status(400).json({
        message: "Invalid customer ID",
        error: idError,
      });
    }
    const reservationId = Number(req.params.id);
    const { clientCheckoutTime } = req.query;
    let dateError = await dateSchema.validate(clientCheckoutTime).error;
    if (dateError || clientCheckoutTime === "") {
      return res.status(400).json({
        message: "Invalid date format.",
        error: dateError,
      });
    }
    try {
      const reservation = allReservations.find(
        (item) => item.reservationId === reservationId
      );
      const { checkOutTime } = reservation;
      // console.log(
      //   "Extended hours",
      //   getOverstayPeriod(checkOutTime, clientCheckoutTime)
      // );

      return res.status(200).json({
        message: "Item retrieved succussfully.",
        clientCheckoutTime,
      });
      // compare check out time
      // calculate if longer
      // do not calculate if it's not
    } catch (error) {}
  },
};

module.exports = reservationController;
