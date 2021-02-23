// third-aprty libraries
const express = require("express");

// routes
const mainRoute = express.Router();
const reservationRoutes = require("./reservations/routes");

mainRoute.use("/reservations", reservationRoutes);

module.exports = mainRoute;
