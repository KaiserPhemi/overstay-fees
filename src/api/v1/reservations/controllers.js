// database
const allReservations = require("../../../db");

// utils
const getOverstayPeriod = require('../../../utils/overstay');
const {idSchema, dateSchema} = require('../../../utils/validate');
const getFees = require('../../../utils/getFees');

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
    const clientCheckoutTime = req.query.clientCheckoutTime || "";
    let dateError = await dateSchema.validate(clientCheckoutTime).error;
    if (dateError) {
      return res.status(400).json({
        message: "Invalid date format.",
        error: dateError,
      });
    }
    try {
      const reservation = allReservations.find(
        (item) => item.reservationId === reservationId
      );
      if (reservation === undefined) {
        return res.status(404).json({
          message: `Reservation with id: ${reservationId} does not exist.`,
        });
      }
      const { checkOutTime, amountPaid, roomType } = reservation;
      const overstayPeriod = getOverstayPeriod(
        checkOutTime,
        clientCheckoutTime
      );
      if (overstayPeriod > 0) {
        let fees = getFees(
          overstayPeriod,
          amountPaid,
          roomType,
          clientCheckoutTime
        ).toFixed(2);
        fees = parseFloat(fees);

        return res.status(201).json({
          message: "Reservation retrieved succussfully.",
          reservation,
          clientCheckoutTime,
          overstayPeriod: `${overstayPeriod} hours`,
          overstayFees: fees,
        });
      } else {
        return res.status(200).json({
          message: "Reservation retrieved succussfully.",
          reservation,
        });
      }     
    } catch (error) {
      return res.status(500).json({
        message: "An error occur.",
        error,
      });
    }
  },
};

module.exports = reservationController;
