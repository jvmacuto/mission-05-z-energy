// index.js
const express = require("express");
const mongoose = require("mongoose");
const stationRoutes = require("./routes/stationRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/zenergy", {
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a route for the root path that returns 404
app.get("/", (req, res) => {
  res.status(404).send("Not Found");
});

// Use the station routes
app.use("/api/stations", stationRoutes);

// Export the app for testing
module.exports = app;
