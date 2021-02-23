// third-aprty libraries
const express = require("express");

// controllers
const reservationController = require('./controllers');

// router
const reservationRoutes = express.Router();

// routes
reservationRoutes.route("/").get(reservationController.getAllReservations);


module.exports = reservationRoutes;
