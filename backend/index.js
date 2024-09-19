// index.js
const express = require("express");
const mongoose = require("mongoose");
const stationRoutes = require("./routes/stationRoutes");
const cors = require("cors");
require("dotenv").config();
const connectToDatabase = require("./database/db");

//add port
const port = 3000;

const userRouter = require("./routes/routes");

const app = express();
app.use(express.json());

// Connect to the databases
const connectDatabases = async () => {
  try {
    await connectToDatabase("zenergy");
    await connectToDatabase("coordinates");
  } catch (error) {
    console.error("Error connecting to databases:", error);
    process.exit(1); // Exit the process with failure
  }
};
connectDatabases();
/*
mongoose
  .connect("mongodb://localhost:27017/zenergy")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

mongoose
  .connect("mongodb://localhost:27017/coordinates")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });*/

// Define a route for the root path that returns 404
app.get("/", (req, res) => {
  res.status(404).send("Not Found");
});

// Use the station routes
app.use("/api/stations", stationRoutes);

// Export the app for testing
module.exports = app;
//use routes

//routes
app.use("/api", userRouter);

//export the app for testing
module.exports = app;

//start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
  });
}
