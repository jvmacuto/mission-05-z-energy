// index.js
const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const stationRoutes = require("./routes/stationRoutes");
=======
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();



const userRouter = require("./routes/routes");
>>>>>>> main

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/zenergy", {
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

<<<<<<< HEAD
// Define a route for the root path that returns 404
app.get("/", (req, res) => {
  res.status(404).send("Not Found");
});

// Use the station routes
app.use("/api/stations", stationRoutes);

// Export the app for testing
module.exports = app;
=======
//use routes

//connect to the database
mongoose
  .connect("mongodb://localhost:27017/coordinates")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

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
>>>>>>> main
