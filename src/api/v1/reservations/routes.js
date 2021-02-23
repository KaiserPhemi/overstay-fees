// third-aprty libraries
const express = require("express");

// router
const reservationRoutes = express.Router();

// routes
reservationRoutes.route("/").get((req, res) => {
  res.json({
    message: "All reservations retrieved",
  });
});

module.exports = reservationRoutes;
