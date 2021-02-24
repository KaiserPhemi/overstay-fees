// third-aprty libraries
require("dotenv").config();
const express = require("express");

// routes
const mainRoute = require("./src/api/v1");

const app = express();
const PORT = process.env.PORT;

// routes
app.use("/api/v1", mainRoute);
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Hotel App",
  });
});

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
